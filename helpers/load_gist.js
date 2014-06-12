/**
 * Licensed to Neo Technology under one or more contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership. Neo Technology licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You
 * may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

'use strict';

var request = require("request");
var Base64 = require('js-base64').Base64;

var github_personal_token=process.env.GITHUB_TOKEN

var DROPBOX_BASE_URL = 'https://dl.dropboxusercontent.com/u/';
var DEFAULT_SOURCE = 'github-neo4j-contrib/gists//meta/Home.adoc';
var VALID_GIST = /^[0-9a-f]{5,32}\/?$/;

function fetchGithubGist(gist, callback) {
    if (!VALID_GIST.test(gist)) {
        callback('The gist id is malformed: ' + gist);
        return;
    }

    var url = 'https://api.github.com/gists/' + gist.replace("/", "");
    request(url,
        { headers: {'User-Agent': 'neo4j.org'}, json: true,
            auth: {user: github_personal_token, pass: 'x-oauth-basic'}, encoding: "UTF-8" },
        function (err, resp, data) {
            if (err) {
                return callback(err, "Could not load gist from " + url);
            }
            var file = data.files[Object.keys(data.files)[0]]; // todo check for content-type asciidoc or suffix
            var content = file.content;
            var link = data.html_url;
            callback(null, content, link);
        }
    );
}

function fetchGithubFile(id, callback) {
    var decoded = decodeURIComponent(id);

    decoded = decoded.replace(/\/contents\//, '//');
    var parts = decoded.split('/');
    var branch = 'master';
    var pathPartsIndex = 3;
    if (parts.length >= 4 && parts[3] === '') {
        branch = parts[2];
        pathPartsIndex++;
    }
    var url = 'https://api.github.com/repos/' + parts[0] + '/' + parts[1] + '/contents/' + parts.slice(pathPartsIndex).join('/');


    console.log("fetching", url);
    request(url,
        { headers: {'User-Agent': 'neo4j.org'}, json: true, qs: "ref=" + branch,
            auth: {user: github_personal_token, pass: 'x-oauth-basic'}, encoding: "UTF-8" },
        function (err, resp, data) {
            if (err) {
                console.log(err);
                callback("Could not load gist from " + url+ " "+err);
                return;
            }

            var content = Base64.decode(data.content);
            var link = data.html_url;
            var imagesdir = 'https://raw.github.com/' + parts[0] + '/' + parts[1]
                + '/' + branch + '/' + data.path.substring(0, -data.name.length);
            console.log("got", content);

            callback(null, content, link, imagesdir); // todo images
        }
    );
}

function fetchDropboxFile(id, callback) {
    var url = DROPBOX_BASE_URL + decodeURIComponent(id);
    fetchAnyUrl(url, callback);
}

function fetchAnyUrl(id, callback) {
    console.log('fetchAnyUrl', id);
    var url = decodeURIComponent(id);
    request(url, {Headers: {accept: "text/plain"}}, function (err, resp, data) {
        callback(err, data, id);
    });
}

function fetchLocalSnippet(id, callback) {
    var url = 'http://gist.neo4j.org/gists/' + id + '.adoc';
    fetchAnyUrl(url, callback);
}

exports.load_gist = function (id, callback) {

    if (id.length < 2) {
        id = DEFAULT_SOURCE;
    }
    else {
        id = id.replace(/^\?/,"")
        var idCut = id.indexOf('&');
        if (idCut !== -1) {
            id = id.substring(0, idCut);
        }
    }
    var fetcher = fetchGithubGist;
    if (id.length > 8 && id.substr(0, 8) === 'dropbox-') {
        fetcher = fetchDropboxFile;
        id = id.substr(8);
    }
    else if (id.length > 7 && id.substr(0, 7) === 'github-') {
        fetcher = fetchGithubFile;
        id = id.substr(7);
    }
    else if (!VALID_GIST.test(id)) {
        if (id.indexOf('%3A%2F%2F') !== -1) {
            fetcher = fetchAnyUrl;
        }
        else {
            fetcher = fetchLocalSnippet;
        }
    }
    fetcher(id, callback);
};

