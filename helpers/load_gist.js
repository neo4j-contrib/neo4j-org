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

var CACHE_TTL = 10*60*1000;

exports.load_gist = function (id, cache, callback) {
    if (id.length < 2) {
        id = DEFAULT_SOURCE;
    }
    else {
        id = id.substring(1);
        var idCut = id.indexOf('&');
        if (idCut !== -1) {
            id = id.substring(0, idCut);
        }
    }
    var entry = cache[id];
    if (entry && entry.time > Date.now() - CACHE_TTL) {
        console.log("Returning cache entry for ",id);
        callback(null,entry.content,entry.link);
        return;
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
    console.log("Using fetcher for id ",id,fetcher.toString().substring(0,20));
    fetcher(id, function(err,content,link) {
        console.log("Fetcher returning ",id,"err",err,"link",link);
        if (!err) {
            cache[id] = {time: Date.now(), content: content, link: link};
        }
        callback(err,content,link);
    });
};

function fetchGithubGist(id, callback) {
    if (!VALID_GIST.test(id)) {
        callback('The gist id is malformed: ' + id);
        return;
    }
    var url = 'https://api.github.com/gists/' + id.replace("/", "");
    console.log("fetchGithubGist() start ",id,"url",url);
    request(url,
        { headers: {'User-Agent': 'neo4j.org'}, json: true,
            auth: {user: github_personal_token, pass: 'x-oauth-basic'}, encoding: "UTF-8" },
        function (err, resp, data) {
            console.log("fetchGithubGist() result ",id,resp.statusCode,"err",err);
            try {
                if (err) {
                    return callback(err, "Could not load gist from " + url);
                }
                var file = data.files[Object.keys(data.files)[0]]; // todo check for content-type asciidoc or suffix
                var content = file.content;
                var link = data.html_url;
                callback(null, content, link);
            } catch(e) {
                console.log("Error: fetchGithubGist()",id,url,err,data,e);
                callback("Could not load gist from " + url + " " + e);
            }
        }
    );
}

function fetchGithubFile(id, callback) {
    console.log(fetchGithubFile,id);
    var decoded = decodeURIComponent(id);
    decoded = decoded.replace(/\/contents\//, '//');
    decoded = decoded.replace(/\/\//, '/');
    var parts = decoded.split('/');
    var branch = 'master';
    var pathPartsIndex = 2;
//    if (parts.length >= 4 && parts[3] === '') {
//        branch = parts[2];
//        pathPartsIndex++;
//    }


    var url = 'https://api.github.com/repos/' + parts[0] + '/' + parts[1] + '/contents/' + parts.slice(pathPartsIndex).join('/');
    console.log(fetchGithubFile,"parts",parts,"branch",branch,pathPartsIndex,"url",url);
    console.log("fetchGithubFile() start ",id,"url",url);
    request(url,
        { headers: {'User-Agent': 'neo4j.org'}, json: true, qs: "ref=" + branch,
            auth: {user: github_personal_token, pass: 'x-oauth-basic'}, encoding: "UTF-8" },
        function (err, resp, data) {
            try {
                console.log("fetchGithubFile() result ",id,resp.statusCode,"err",err);
                if (err || !data || !data['content']) {
                    console.log("Could not load gist from " + url + " " + err);
                    //console.log(data);
                    callback("Could not load gist from " + url + " " + err);
                    return;
                }

                var content = Base64.decode(data.content);
                var link = data.html_url;
                var imagesdir = 'https://raw.github.com/' + parts[0] + '/' + parts[1]
                    + '/' + branch + '/' + data.path.substring(0, -data.name.length);
                callback(null, content, link, imagesdir); // todo images
            } catch(e) {
                console.log("Error: fetchGithubFile()",id,url,err,data,e);
                callback("Could not load gist from " + url + " " + e);
            }
        }
    );
}

function fetchDropboxFile(id, callback) {
    var url = DROPBOX_BASE_URL + decodeURIComponent(id);
    fetchAnyUrl(url, callback);
}

function fetchAnyUrl(id, callback) {
    var url = decodeURIComponent(id);
    console.log("fetchAnyUrl() start ",id,"url",url);
    request(url, {Headers: {accept: "text/plain"}}, function (err, resp, data) {
        console.log("fetchAnyUrl() result ",id,resp.statusCode,"err",err);
        callback(err, data, id);
    });
}

function fetchLocalSnippet(id, callback) {
    var url = 'http://gist.neo4j.org/gists/' + id + '.adoc';
    fetchAnyUrl(url, callback);
}

