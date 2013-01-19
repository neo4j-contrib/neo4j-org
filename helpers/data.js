exports.drivers = {
    anorm_cypher : {
        name : "AnormCypher",
        author : "Wes Freeman",
        twitter : "wefreema",
        source : "https://github.com/AnormCypher/AnormCypher",
        docs : "https://github.com/AnormCypher/AnormCypher/blob/master/readme.md#anormcypher",
        url : "http://anormcypher.org",
        site : "http://anormcypher.org",
        logo : "/assets/img/languages/scala.png",
        text: "A Cypher-oriented Scala library modeled after the Play! framework's Anorm library.",
        tags: ["scala","rest","cypher"]
    },
    neo4j_rest : {
        url : "http://docs.neo4j.org/chunked/milestone/rest-api.html",
        author : "Neo4j Team",
        twitter : "neo4j",
        tags : ["java", "rest"],
        logo : "/assets/img/languages/neo4jrest.png" ,
        name : "Neo4j REST API",
        text : "Discoverable, language-neutral data access from anything that can send HTTP requests. You could write a whole application with just bash scripts and curl."
    },
    spring_data_neo4j : {
        tags : ["java", "jvm", "rest", "spring"],
        author : "Neo4j Team",
        twitter : "neo4j",
        url : "/develop/spring",
        logo : "/assets/img/languages/sdn.png" ,
        name : "Spring Data Neo4j",
        text : "Familiar POJO-based development, enabling object-to-graph mapping using annotations. Amazingly simple, with full graph power just a traversal query away."
    },
    neo4j_java : {
        tags : ["jvm", "java"],
        author : "Neo4j Team",
        twitter : "neo4j",
        url : "http://docs.neo4j.org/chunked/stable/tutorials-java-embedded.html",
        logo : "/assets/img/languages/embedded.png" ,
        name : "Java API",
        text : "For intimate access, talk directly to Neo4j&#39;s graph engine directly in your JVM based application. Full feature parity with Neo4j Server, including HA clustering."
    },
    neo4j_rb : {
        tags : ["ruby", "jvm"],
        author : "Andreas Ronge",
        twitter : "ronge",
        url : "https://github.com/andreasronge/neo4j",
        logo : "/assets/img/languages/rails.png" ,
        name : "neo4j.rb",
        text : "Ruby on Rails? Try coasting along graph paths with Neo4j. Everything you know and love, wrapped with graph glory."
    },
    neography : {
        tags : ["ruby", "rest"],
        author : "Max de Marzi",
        twitter : "maxdemarzi",
        url : "https://github.com/maxdemarzi/neography/",
        logo : "/assets/img/languages/ruby.png" ,
        name : "Neography",
        text : "For native Ruby access to Neo4j, Neography provides a thin, elegant wrapper around the REST API. "
    },
    neo4jphp : {
        tags : ["php", "rest"],
        url : "https://github.com/jadell/neo4jphp/wiki/Introduction",
        author : "Josh Adell",
        twitter : "josh_adell",
        logo : "/assets/img/languages/php.png" ,
        name : "Neo4jPHP",
        text : "Neo4jPHP provides an API that is both intuitive and flexible, and it takes advantage of 'under-the -hood' performance enhancements, such as caching and lazy-loading. "
    },
    neo4jclient : {
        tags : ["dotnet", "rest"],
        author : "Tatham Oddie, Romiko Derbynew",
        twitter : "readify",
        url : "http://hg.readify.net/neo4jclient/wiki/Home/",
        source : "http://hg.readify.net/neo4jclient/",
        logo : "/assets/img/languages/dotnet.png" ,
        name : "Neo4jClient",
        text : "A .NET client for Neo4j which supports basic CRUD operations, a fluent Cypher query interface, and indexing operations. "
    } ,
    py2neo : {
        tags : ["python", "rest"],
        url : "http://py2neo.org/",
        site : "http://py2neo.org/",
        author : "Nigel Small",
<<<<<<< HEAD
        twitter : "technige",
=======
        twitter : "techige",
>>>>>>> 936630ed0f5f25dcbead228c7e5e4708c4531f95
        logo : "/assets/img/languages/py2neo.png" ,
        name : "py2neo",
        text : "Py2neo is a simple and pragmatic Python library that provides access to the popular graph database Neo4j via its RESTful web service interface.",
        source : "https://github.com/nigelsmall/py2neo",
        docs : "http://nigelsmall.com/_api/py2neo/"
    },
    neo4j_python : {
        tags : ["python", "jvm"],
        author : "Neo4j Team",
        twitter : "neo4j",
        url : "http://pypi.python.org/pypi/neo4j-embedded",
        logo : "/assets/img/languages/python.png" ,
        name : "Neo4j Python",
        text : "The JVM based Python integration for Neo4j uses JPype. More details in the <a href='http://docs.neo4j.org/chunked/snapshot/python-embedded.html'>Neo4j manual.</a>"
    },
    grails : {
        tags : ["groovy", "grails","jvm"],
        author : "Stefan Armbruster",
        twitter : "darthvader42",
        url : "http://www.grails.org/plugin/neo4j",
        site : "http://www.grails.org/plugin/neo4j",
        docs : "http://springsource.github.com/grails-data-mapping/neo4j/manual/index.html",
        source : "https://github.com/SpringSource/grails-data-mapping/tree/master/grails-datastore-gorm-neo4j",
        logo : "/assets/img/languages/grails.png" ,
        name : "Neo4j Grails Plugin",
        text : "A plugin that integrates the Neo4j graph database into Grails, providing a GORM API onto it"
    },
    node_neo4j : {
        tags : ["js", "rest", "nodejs"],
<<<<<<< HEAD
        author : "Aseem Kishore",
        twitter : "aseemk",
        url : "https://github.com/thingdom/node-neo4j",
=======
        author : "Aseem Kishore, Daniel Gasienica",
        twitter : "aseemk",
        url : "https://github.com/thingdom/node-neo4j",
        docs : "http://coffeedoc.info/github/thingdom/node-neo4j/",
        source : "https://github.com/thingdom/node-neo4j",
>>>>>>> 936630ed0f5f25dcbead228c7e5e4708c4531f95
        logo : "/assets/img/languages/nodejs.png" ,
        name : "node-neo4j",
        text : "Node.js driver for Neo4j. Cleverly asynchronous, and blazingly fast. "
    },
    neo4js : {
        tags : ["js", "rest", "nodejs"],
        author : "Neo4j Team",
        twitter : "neo4j",
        url : "https://github.com/neo4j/neo4js",
        logo : "/assets/img/languages/nodejs.png" ,
        name : "Neo4js",
        text : "Neo4j REST client for JavaScript, used in Neo4j Web-UI, makes use of promises to handle deferred responses. Needs jQuery to run."
    },
    neocons : {
        tags : ["clojure", "rest","jvm"],
        author : "Michael Klishin",
        twitter : "michaelklishin",
        url : "http://clojureneo4j.info/",
        logo : "/assets/img/languages/clojure.png" ,
        name : "Neocons",
        text : "An idiomatic, feature rich Clojure client which supports (almost) all Neo4J REST API features and is constantly tested against bleeding edge server changes, like the Cypher language improvements. " },
    bulbflow : {
        tags : ["python", "rest"],
        author : "James Thornton",
        twitter : "espeed",
        url : "http://bulbflow.com/overview/",
        logo : "/assets/img/languages/bulbflow.png" ,
        name : "Bulbflow",
        text : "Bulbs is an open-source Python persistence framework for graph databases and the first piece of a larger Web-development toolkit. It’s like an ORM for graphs. "
    },
    keymaker : {
        tags : ["ruby", "rest"],
        author : "Rogelio Samour",
        twitter : "therubymug",
        url : "http://github.com/therubymug/keymaker",
        logo : "/assets/img/languages/ruby.png" ,
        name : "Keymaker",
        text : "A multi-layer REST API Ruby wrapper for the Neo4j graph database built on top of Faraday." },
    neoid : {
        author : "Elad Ossadon",
        twitter : "elado",
        tags : ["ruby", "rest"],
        url : "https://github.com/elado/neoid",
        logo : "/assets/img/languages/rails.png" ,
        name : "Neoid",
        text : "Make your ActiveRecords stored and searchable on Neo4j graph database. With Neoid, queries that would make MySQL crawl become super fast. You get the benefits of Neo4j speed while keeping your schema on your plain old RDBMS. "
    },
    neo4django : {
        tags : ["python", "rest", "django"],
        author : "Matt Luongo",
        twitter : "mhluongo",
        url : "https://github.com/scholrly/neo4django",
        logo : "/assets/img/languages/django.png" ,
        name : "neo4django",
        text : "neo4django is an Object Graph Mapper (OGM) for Django. Use familiar Django models and queries against Neo4j."
    },
    neo4j_rest_client : {
        tags : ["python", "rest"],
        author : "Javier de la Rosa",
        twitter : "versae",
        url : "http://readthedocs.org/docs/neo4j-rest-client/en/latest/",
        logo : "/assets/img/languages/python.png" ,
        source : "https://github.com/versae/neo4j-rest-client",
        name : "Neo4j Rest Client",
        text : "Object-oriented Python library to interact with Neo4j standalone REST server"
    },
    neo4p : {
        tags : ["perl", "rest"],
        author : "Mark A. Jensen",
        twitter : "thinkinator",
        url : "https://metacpan.org/release/REST-Neo4p",
        logo : "/assets/img/languages/perl.png" ,
        name : "REST::Neo4p",
        text : "Works with the Neo4j's REST by using Perl5 objects in a Perl person's favorite way."
    },
    scala : {
        tags : ["scala", "jvm"],
        author : "Christopher Schmidt",
        twitter : "fakod",
        url : "https://github.com/FaKod/neo4j-scala/",
        logo : "/assets/img/languages/scala.png" ,
        name : "Neo4j Scala",
        text : "A Scala wrapper for Neo4j which introduces an intuitive DSL for graph operations."
    },
    haskell : {
        tags : ["haskell", "rest"],
        author: "Sam Anklesaria",
        twitter: "bogiebro",
        url : "http://hackage.haskell.org/package/cypher-0.8",
        logo : "/assets/img/languages/haskell.png" ,
        name : "Haskell Cypher",
        text : "Haskell Cypher makes it easy to send cypher commands to neo4j servers over the REST API. Additionally, it allows users to parse haskell datatypes from cypher queries."
    },
    datanucleus : {
        tags : ["java", "jvm", "jpa"],
        author: "Andy Jefferson",
        twitter: "datanucleus",
        url : "http://www.datanucleus.org/plugins/store.neo4j.html",
        logo : "/assets/img/languages/datanucleus.png" ,
        name : "DataNucleus Neo4j Plugin",
        text : "datanucleus-neo4j provides persistence of Java objects to Neo4j. It builds on top of the basic persistence provided by datanucleus-core."
    },
    neo4j_go : {
        url : "https://github.com/davemeehan/Neo4j-GO",
        logo : "/assets/img/languages/go.png",
        author: "Dave Meehan",
        tags: ["go","rest"],
        name : "Neo4j GO",
        text: "A Neo4j REST client in the GO language."
    }
};
exports.apps = {
    flavorwocky : {
        url: "http://www.flavorwocky.com",
        name : "Flavorwocky",
        logo : "/assets/img/apps/flavorwocky.png",
        text : "A whimsical look at food pairing, graph-style.",
        source : "",
        docs : "",
        site : ""
    },
    neosocial : {
        docs : "http://maxdemarzi.com/2012/08/17/neosocial-connecting-to-facebook-with-neo4j/",
        name : "Neosocial",
        text : "Neosocial: Connecting to Facebook with Neo4j",
        logo : "/assets/img/apps/neosocial.png"
    },
    typology : {
        url : "http://typology.de/",
        logo : "/assets/img/apps/typology.png",
        text : "Word typing predictions, based on Neo4j and Google N-Gram data.",
        name : "Typology"
    },
    transportdublin : {
        url : "https://github.com/WhichWay/TransportDublin",
        logo : "/assets/img/apps/TransportDublin.png",
        name : "Transport Dublin",
        text : "A Neo4j & Google Maps based Public Transport Route Planner"
    },
    structr : {
        url : "http://structr.org/home",
        logo : "/assets/img/apps/structr.gif",
        text : "A Content Management System, build on Neo4j.",
        name : "structr"
    },
    polymap : {
        url : "http://polymap.org/polymap3/wiki/Screenshots",
        logo : "/assets/img/apps/polymap.png",
        text : "A web based GIS system running on top of OpenStreetMap and other datasources, integrating with Neo4j Spatial.",
        name : "Polymap"
    }
}
exports.contributors = {
    maxdemarzi : {
        url : "http://www.maxdemarzi.com",
        name : "Max De Marzi",
        logo : "/assets/img/contributors/maxdemarzi.jpg",
        text : 'Max is a wizard in graph <a href="http://www.maxdemarzi.com">vizualisations</a>. He works on the popular <a href="https://github.com/maxdemarzi/neography">Neography Ruby Gem</a> for the Neo4j Server'
    },
    mhluongo : {
        url : "http://scholr.ly/",
        name : "Matt Luongo",
        logo : "/assets/img/contributors/mhluongo.jpg",
        text : 'Matt is building awesome technology at <a href="http://scholr.ly/">Scholr.ly</a> in Boston. He is the author of the <a href="https://github.com/scholrly/neo4django/">Neo4django</a> Django bindings for Neo4j'
    },
    ronge : {
        url : "https://github.com/andreasronge/neo4j",
        logo : "/assets/img/contributors/ronge.jpeg",
        name : "Andreas Ronge",
        text : 'Andreas is a long time Neo4j contributor and author of the Neo4j <a href="https://github.com/andreasronge/neo4j">JRuby and Rails bindings</a>'
    },
    craigtaverner : {
        name : "Craig Taverner",
        url : "http://www.amanzi.org/",
        logo : "/assets/img/contributors/craigtaverner.jpg",
        text : 'Craig is a GIS expert and author of the Neo4j <a href="https://github.com/neo4j/spatial">Spatial Plugin</a>'
    },
    technige : {
        url : "http://nigelsmall.com/",
        name : "Nigel Small",
        logo : "/assets/img/contributors/nigelsmall.jpg",
        text : 'Nigel created <a href="http://nigelsmall.com/geoff">Geoff</a> and is the author of the Neo4j <a href="http://py2neo.org/">Py2neo</a> library'
    },
    tathamoddie : {
        url : "http://blog.tatham.oddie.com.au/",
        logo : "/assets/img/contributors/tathamoddie.jpg",
        name : "Tatham Oddie",
        text : 'Tatham built the <a href="http://hg.readify.net/neo4jclient/overview">.Net Neo4jClient</a> and deploys <a href="http://blog.tatham.oddie.com.au/2012/06/18/new-talks-neo4j-in-a-net-world-and-youre-in-production-now-what/">Neo4j on Azure</a>'
    },
    pablopareja : {
        name : "Pablo Pareja Tobes",
        url : "http://about.me/pablopareja",
        logo : "/assets/img/contributors/pabloparejatobes.jpg",
        text : 'Pablo is a bioinformatics expert and created <a href="http://bio4j.com/">Bio4j</a>'
    },
    espeed : {
        name : "James Thornton",
        logo : "/assets/img/contributors/jamesthornton.jpg",
        url : "http://jamesthornton.com/",
        text : 'James is a Python guru who wrote <a href="http://bulbflow.com/">Bulbs</a>, a persistence framework for graph databases'
    },
    rhetonik : {
        name : "Nikhil Lanjewar",
        url : "https://twitter.com/rhetonik",
        logo : "/assets/img/contributors/nikhillanjewar.jpg",
        text : 'Nikhil runs the  <a href="http://www.meetup.com/Neo4j-India/">Neo4j India Meet-up Group</a> and built the  <a href="https://github.com/yournextleap/activerecord-neo4j-adapter">Active Record Neo4j Adapter</a>'
    }
}

