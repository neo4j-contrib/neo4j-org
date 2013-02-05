exports.drivers = {
    anorm_cypher: {
        name: "AnormCypher",
        authors: ["@wefreema"],
        source: "https://github.com/AnormCypher/AnormCypher",
        docs: "https://github.com/AnormCypher/AnormCypher/blob/master/readme.md#anormcypher",
        url: "http://anormcypher.org",
        site: "http://anormcypher.org",
        logo: "/assets/img/languages/scala.png",
        text: "A Cypher-oriented Scala library modeled after the Play! framework's Anorm library.",
        tags: ["scala", "rest", "cypher"]
    },
    neo4j_rest: {
        url: "http://docs.neo4j.org/chunked/milestone/rest-api.html",
        authors: ["@neo4j"],
        tags: ["java", "rest"],
        logo: "/assets/img/languages/neo4jrest.png",
        name: "Neo4j REST API",
        text: "Discoverable, language-neutral data access from anything that can send HTTP requests. You could write a whole application with just bash scripts and curl."
    },
    spring_data_neo4j: {
        tags: ["java", "jvm", "rest", "spring"],
        authors: ["@neo4j"],
        url: "/develop/spring",
        logo: "/assets/img/languages/sdn.png",
        name: "Spring Data Neo4j",
        text: "Familiar POJO-based development, enabling object-to-graph mapping using annotations. Amazingly simple, with full graph power just a traversal query away."
    },
    neo4j_java: {
        tags: ["jvm", "java"],
        authors: ["@neo4j"],
        url: "http://docs.neo4j.org/chunked/stable/tutorials-java-embedded.html",
        logo: "/assets/img/languages/embedded.png",
        name: "Java API",
        text: "For intimate access, talk directly to Neo4j&#39;s graph engine directly in your JVM based application. Full feature parity with Neo4j Server, including HA clustering."
    },
    neo4j_rb: {
        tags: ["ruby", "jvm"],
        authors: ["@ronge"],
        url: "https://github.com/andreasronge/neo4j",
        logo: "/assets/img/languages/rails.png",
        name: "neo4j.rb",
        text: "Ruby on Rails? Try coasting along graph paths with Neo4j. Everything you know and love, wrapped with graph glory."
    },
    neo4j_core: {
        tags: ["ruby", "jvm"],
        authors: ["@ronge"],
        url: "https://github.com/andreasronge/neo4j-core",
        logo: "/assets/img/languages/ruby.png",
        name: "neo4j-core",
        text: "For a fast and simple JRuby binding to the embedded Neo4j Java API. This gem is used by neo4j.rb"
    },
    neography: {
        tags: ["ruby", "rest"],
        authors: ["@maxdemarzi"],
        url: "https://github.com/maxdemarzi/neography/",
        logo: "/assets/img/languages/ruby.png",
        name: "Neography",
        text: "For native Ruby access to Neo4j, Neography provides a thin, elegant wrapper around the REST API. "
    },
    neo4jphp: {
        tags: ["php", "rest"],
        url: "https://github.com/jadell/neo4jphp/wiki/Introduction",
        authors: ["@josh_adell"],
        logo: "/assets/img/languages/php.png",
        name: "Neo4jPHP",
        text: "Neo4jPHP provides an API that is both intuitive and flexible, and it takes advantage of 'under-the -hood' performance enhancements, such as caching and lazy-loading. "
    },
    neo4jclient: {
        tags: ["dotnet", "rest"],
        authors: ["@tathamoddie", "@romikoderbynew"],
        url: "http://hg.readify.net/neo4jclient/wiki/Home/",
        source: "http://hg.readify.net/neo4jclient/",
        logo: "/assets/img/languages/dotnet.png",
        name: "Neo4jClient",
        text: "A .NET client for Neo4j which supports basic CRUD operations, a fluent Cypher query interface, and indexing operations. "
    },
    py2neo: {
        tags: ["python", "rest"],
        url: "http://py2neo.org/",
        site: "http://py2neo.org/",
        authors: ["@technige"],
        logo: "/assets/img/languages/py2neo.png",
        name: "py2neo",
        text: "Py2neo is a simple and pragmatic Python library that provides access to the popular graph database Neo4j via its RESTful web service interface.",
        source: "https://github.com/nigelsmall/py2neo",
        docs: "http://nigelsmall.com/_api/py2neo/"
    },
    neo4j_python: {
        tags: ["python", "jvm"],
        authors: ["@neo4j"],
        url: "http://pypi.python.org/pypi/neo4j-embedded",
        logo: "/assets/img/languages/python.png",
        name: "Neo4j Python",
        text: "The JVM based Python integration for Neo4j uses JPype. More details in the <a href='http://docs.neo4j.org/chunked/snapshot/python-embedded.html'>Neo4j manual.</a>"
    },
    grails: {
        tags: ["groovy", "grails", "jvm"],
        authors: ["@darthvader42"],
        url: "http://www.grails.org/plugin/neo4j",
        site: "http://www.grails.org/plugin/neo4j",
        docs: "http://springsource.github.com/grails-data-mapping/neo4j/manual/index.html",
        source: "https://github.com/SpringSource/grails-data-mapping/tree/master/grails-datastore-gorm-neo4j",
        logo: "/assets/img/languages/grails.png",
        name: "Neo4j Grails Plugin",
        text: "A plugin that integrates the Neo4j graph database into Grails, providing a GORM API onto it"
    },
    node_neo4j: {
        tags: ["js", "rest", "nodejs"],
        authors: ["@aseemk", "@gasi"],
        url: "https://github.com/thingdom/node-neo4j",
        docs: "http://coffeedoc.info/github/thingdom/node-neo4j/",
        source: "https://github.com/thingdom/node-neo4j",
        logo: "/assets/img/languages/nodejs.png",
        name: "node-neo4j",
        text: "Node.js driver for Neo4j. Cleverly asynchronous, and blazingly fast. "
    },
    neo4js: {
        tags: ["js", "rest", "nodejs"],
        authors: ["@neo4j"],
        url: "https://github.com/neo4j/neo4js",
        logo: "/assets/img/languages/nodejs.png",
        name: "Neo4js",
        text: "Neo4j REST client for JavaScript, used in Neo4j Web-UI, makes use of promises to handle deferred responses. Needs jQuery to run."
    },
    neocons: {
        tags: ["clojure", "rest", "jvm"],
        authors: ["@michaelklishin"],
        url: "http://clojureneo4j.info/",
        logo: "/assets/img/languages/clojure.png",
        name: "Neocons",
        text: "An idiomatic, feature rich Clojure client which supports (almost) all Neo4J REST API features and is constantly tested against bleeding edge server changes, like the Cypher language improvements. " },
    bulbflow: {
        tags: ["python", "rest"],
        authors: ["@espeed"],
        url: "http://bulbflow.com/overview/",
        logo: "/assets/img/languages/bulbflow.png",
        name: "Bulbflow",
        text: "Bulbs is an open-source Python persistence framework for graph databases and the first piece of a larger Web-development toolkit. It’s like an ORM for graphs. "
    },
    keymaker: {
        tags: ["ruby", "rest"],
        authors: ["@therubymug"],
        url: "http://github.com/therubymug/keymaker",
        logo: "/assets/img/languages/ruby.png",
        name: "Keymaker",
        text: "A multi-layer REST API Ruby wrapper for the Neo4j graph database built on top of Faraday." },
    neoid: {
        authors: ["@elado"],
        tags: ["ruby", "rest"],
        url: "https://github.com/elado/neoid",
        logo: "/assets/img/languages/rails.png",
        name: "Neoid",
        text: "Make your ActiveRecords stored and searchable on Neo4j graph database. With Neoid, queries that would make MySQL crawl become super fast. You get the benefits of Neo4j speed while keeping your schema on your plain old RDBMS. "
    },
    neo4django: {
        tags: ["python", "rest", "django"],
        authors: ["@mhluongo"],
        url: "https://github.com/scholrly/neo4django",
        logo: "/assets/img/languages/django.png",
        name: "neo4django",
        text: "neo4django is an Object Graph Mapper (OGM) for Django. Use familiar Django models and queries against Neo4j."
    },
    neo4j_rest_client: {
        tags: ["python", "rest"],
        authors: ["@versae"],
        url: "http://readthedocs.org/docs/neo4j-rest-client/en/latest/",
        logo: "/assets/img/languages/python.png",
        source: "https://github.com/versae/neo4j-rest-client",
        name: "Neo4j Rest Client",
        text: "Object-oriented Python library to interact with Neo4j standalone REST server"
    },
    neo4p: {
        tags: ["perl", "rest"],
        authors: ["@thinkinator"],
        url: "https://metacpan.org/release/REST-Neo4p",
        logo: "/assets/img/languages/perl.png",
        name: "REST::Neo4p",
        text: "Works with the Neo4j's REST by using Perl5 objects in a Perl person's favorite way."
    },
    scala: {
        tags: ["scala", "jvm"],
        authors: ["@fakod"],
        url: "https://github.com/FaKod/neo4j-scala/",
        logo: "/assets/img/languages/scala.png",
        name: "Neo4j Scala",
        text: "A Scala wrapper for Neo4j which introduces an intuitive DSL for graph operations."
    },
    haskell: {
        tags: ["haskell", "rest"],
        authors: ["@bogiebro"],
        url: "http://hackage.haskell.org/package/cypher-0.8",
        logo: "/assets/img/languages/haskell.png",
        name: "Haskell Cypher",
        text: "Haskell Cypher makes it easy to send cypher commands to neo4j servers over the REST API. Additionally, it allows users to parse haskell datatypes from cypher queries."
    },
    datanucleus: {
        tags: ["java", "jvm", "jpa"],
        authors: ["@datanucleus"],
        url: "http://www.datanucleus.org/plugins/store.neo4j.html",
        logo: "/assets/img/languages/datanucleus.png",
        name: "DataNucleus Neo4j Plugin",
        text: "datanucleus-neo4j provides persistence of Java objects to Neo4j. It builds on top of the basic persistence provided by datanucleus-core."
    },
    neo4j_go: {
        url: "https://github.com/davemeehan/Neo4j-GO",
        logo: "/assets/img/languages/go.png",
        authors: ["@dmeehan"],
        tags: ["go", "rest"],
        name: "Neo4j GO",
        text: "A Neo4j REST client in the GO language."
    }
};
exports.apps = {
    flavorwocky: {
        author: "@luannem",
        url: "http://www.flavorwocky.com",
        name: "Flavorwocky",
        logo: "/assets/img/apps/flavorwocky.png",
        text: "A whimsical look at food pairing, graph-style.",
        source: "",
        docs: "",
        site: ""
    },
    neosocial: {
        author: "@maxdemarzi",
        docs: "http://maxdemarzi.com/2012/08/17/neosocial-connecting-to-facebook-with-neo4j/",
        name: "Neosocial",
        text: "Neosocial: Connecting to Facebook with Neo4j",
        logo: "/assets/img/apps/neosocial.png"
    },
    typology: {
        author: "@renepickhardt",
        url: "http://typology.de/",
        logo: "/assets/img/apps/typology.png",
        text: "Word typing predictions, based on Neo4j and Google N-Gram data.",
        name: "Typology"
    },
    transportdublin: {
        author: "@paddydub",
        url: "https://github.com/WhichWay/TransportDublin",
        logo: "/assets/img/apps/TransportDublin.png",
        name: "Transport Dublin",
        text: "A Neo4j & Google Maps based Public Transport Route Planner"
    },
    structr: {
        author: "@amorgner",
        url: "http://structr.org/home",
        logo: "/assets/img/apps/structr.gif",
        text: "A Content Management System, build on Neo4j.",
        name: "Structr"
    },
    polymap: {
        author: "Falko Bräutigam",
        url: "http://polymap.org/polymap3/wiki/Screenshots",
        logo: "/assets/img/apps/polymap.png",
        text: "A web based GIS system running on top of OpenStreetMap and other datasources, integrating with Neo4j Spatial.",
        name: "Polymap"
    },
    frostymug: {
        author: "@josh_adell",
        url: "http://frostymug.herokuapp.com",
        logo: "/assets/img/apps/frostymug.png",
        text: "A proof-of-concept beer recommendation engine, built by Josh Adell",
        name: "Frosty Mug"
    }
}

//THIS IS OVERWRITTEN FROM GOOGLE
exports.contributors = {
    maxdemarzi: {
        url: "http://www.maxdemarzi.com",
        name: "Max De Marzi",
        logo: "/assets/img/contributors/maxdemarzi.jpg",
        text: 'Max is a wizard in graph <a href="http://www.maxdemarzi.com">vizualisations</a>. He works on the popular <a href="https://github.com/maxdemarzi/neography">Neography Ruby Gem</a> for the Neo4j Server'
    },
    mhluongo: {
        url: "http://scholr.ly/",
        name: "Matt Luongo",
        logo: "/assets/img/contributors/mhluongo.jpg",
        text: 'Matt is building awesome technology at <a href="http://scholr.ly/">Scholr.ly</a> in Boston. He is the author of the <a href="https://github.com/scholrly/neo4django/">Neo4django</a> Django bindings for Neo4j'
    },
    ronge: {
        url: "https://github.com/andreasronge/neo4j",
        logo: "/assets/img/contributors/ronge.jpeg",
        name: "Andreas Ronge",
        text: 'Andreas is a long time Neo4j contributor and author of the Neo4j <a href="https://github.com/andreasronge/neo4j">JRuby and Rails bindings</a>'
    },
    craigtaverner: {
        name: "Craig Taverner",
        url: "http://www.amanzi.org/",
        logo: "/assets/img/contributors/craigtaverner.jpg",
        text: 'Craig is a GIS expert and author of the Neo4j <a href="https://github.com/neo4j/spatial">Spatial Plugin</a>'
    },
    technige: {
        url: "http://nigelsmall.com/",
        name: "Nigel Small",
        logo: "/assets/img/contributors/nigelsmall.jpg",
        text: 'Nigel created <a href="http://nigelsmall.com/geoff">Geoff</a> and is the author of the Neo4j <a href="http://py2neo.org/">Py2neo</a> library'
    },
    tathamoddie: {
        url: "http://blog.tatham.oddie.com.au/",
        logo: "/assets/img/contributors/tathamoddie.jpg",
        name: "Tatham Oddie",
        text: 'Tatham built the <a href="http://hg.readify.net/neo4jclient/overview">.Net Neo4jClient</a> and deploys <a href="http://blog.tatham.oddie.com.au/2012/06/18/new-talks-neo4j-in-a-net-world-and-youre-in-production-now-what/">Neo4j on Azure</a>'
    },
    pablopareja: {
        name: "Pablo Pareja Tobes",
        url: "http://about.me/pablopareja",
        logo: "/assets/img/contributors/pabloparejatobes.jpg",
        text: 'Pablo is a bioinformatics expert and created <a href="http://bio4j.com/">Bio4j</a>'
    },
    espeed: {
        name: "James Thornton",
        logo: "/assets/img/contributors/jamesthornton.jpg",
        url: "http://jamesthornton.com/",
        text: 'James is a Python guru who wrote <a href="http://bulbflow.com/">Bulbs</a>, a persistence framework for graph databases'
    },
    rhetonik: {
        name: "Nikhil Lanjewar",
        url: "https://twitter.com/rhetonik",
        logo: "/assets/img/contributors/nikhillanjewar.jpg",
        text: 'Nikhil runs the  <a href="http://www.meetup.com/Neo4j-India/">Neo4j India Meet-up Group</a> and built the  <a href="https://github.com/yournextleap/activerecord-neo4j-adapter">Active Record Neo4j Adapter</a>'
    },
    josh_adell: {
        name: "Josh Adell",
        url: "https://twitter.com/josh_adell",
        logo: "/assets/img/contributors/josh_adell.jpg",
        text: 'Josh is the creator of Neo4j PHP bindings and an active contributor to the Neo4j discussions.'
    }
}

exports.ext_content = {
    rik_belgian_beers1: {
        author: "@rvanbruggen",
        name: "Fun with beer and graphs",
        logo: "http://www.travelandbeer.com/wp-content/uploads/2011/05/belgian-beers.jpg",
        url: "http://popchartlab.com/collections/prints/products/the-very-very-many-varieties-of-beer",
        text: "A brief introduction to Neo4j, Belgian beers and import and recommendations."
    },
    popchartlabs_beer: {
        author: "@popchartlab",
        name: "The Beer Pop Chart",
        logo: "http://cdn.shopify.com/s/files/1/0068/6272/products/VVMVOBeerPrint_Main_thumb_a_1024x1024.jpg?358",
        url: "http://popchartlab.com/collections/prints/products/the-very-very-many-varieties-of-beer",
        text: "Chart of the world's most comprehensive beer taxonomy, with 89 varieties of beer with over 200 representative quaffs,"
    },
    trycypher_beer: {
        author: "@neo4j",
        name: "A live sample beer graph",
        logo: "/assets/img/apps/beer-console.png",
        url: "http://console.neo4j.org/?id=beer",
        text: "A small live dataset of Belgian beers in the cypher console"
    },
    beer_rik_screencast: {
        author: "@rvanbruggen",
        name: "Screencast of Neo4j, Gephi and Beer",
        logo: "/assets/img/apps/rik-screencast-beer.png",
        url: "https://vimeo.com/57182040",
        text: "Rik shows how easy it is to import data about beers, their attributes and breweries into Neo4j and walks through different ways of exploring, visualizing and querying this very tasty data."
    }

}

exports.books = {
    springdata: {
        url: "http://shop.oreilly.com/product/0636920024767.do",
        name: "Spring Data",
        author: "Jon Brisbin, Oliver Gierke, Thomas Risberg, Mark Pollack, Michael Hunger",
        price: "Early Release Ebook $23.99",
        logo: "/assets/img/books/spring_data.png",
        text: 'This book shows you how Spring’s data access framework can help you connect to either non-relational or relational databases, or a combination of the two.'
    },
    goodrelationships: {
        url: "http://www.lulu.com/shop/michael-hunger-and-david-montag-and-andreas-kollegger/good-relationships-the-spring-data-neo4j-guide-book/paperback/product-20201195.html",
        name: "Good Relationships",
        author: "Michael Hunger with Andreas Kolleger and David Montag",
        price: "$9.95",
        logo: "/assets/img/books/good_relationships.png",
        text: 'With Spring Data, the ever popular Spring Framework has cultivated a new patch of ground, bringing Big Data and NOSQL technology like Neo4j to enterprise developers. This guide introduces you to Spring Data Neo4j, using the fast, powerful and scalable graph database Neo4j to enjoy the benefits of having good relationships in your data.'
    },
    nosqldistilled: {
        url: "http://www.amazon.com/gp/product/0321826620/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321826620&linkCode=as2&tag=neotech05-20",
        name: "NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence",
        author: "Pramod J. Sadalage and Martin Fowler",
        price: "List Price: $39.99",
        logo: "/assets/img/books/nosql_distilled.png",
        text: 'Together, Fowler and ThoughtWorks principal consultant Pramod Sadalage thoroughly explain how NoSQL databases work, and why they may often be a superior alternative for Big Data, high-traffic web sites, heavy-duty streaming media delivery, and other demanding environments.'
    },
    sevendatabases: {
        url: "http://www.amazon.com/gp/product/1934356921/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1934356921&linkCode=as2&tag=neotech05-20",
        name: "Seven Databases in Seven Weeks",
        author: "Eric Redmond and Jim R. Wilson",
        price: "List Price: $35.00",
        logo: "/assets/img/books/seven_databases.png",
        text: 'Seven Databases in Seven Weeks takes you on a tour of some of the hottest open source databases today. In the tradition of Bruce A. Tate\'s Seven Languages in Seven Weeks, this book goes beyond your basic tutorial to explore the essential concepts at the core each technology.'
    },
    neo4jinaction: {
        url: "http://www.manning.com/partner/",
        name: "Neo4j in Action",
        author: "Jonas Partner and Aleksa Vukotic",
        price: "Ebook - $35.99, Print - $44.99",
        logo: "/assets/img/books/neo4j_in_action.png",
        text: 'Neo4j in Action is a comprehensive guide to Neo4j, aimed mainly at application developers and software architects. This exciting new book by Jonas Partner and Aleksa Vukotic is the first full length book on Neo4j, covering an introduction to Neo4j, application development with Neo4j, and Neo4j in production.'
    },
    visualcomplexity: {
        url: "http://www.amazon.com/gp/product/1568989369/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1568989369&linkCode=as2&tag=neotech05-20",
        name: "Visual Complexity: Mapping Patterns of Information",
        author: "Manuel Lima",
        price: "List Price: $50.00",
        logo: "/assets/img/books/visual_complexity.png",
        text: 'From representing networks of friends on Facebook to depicting interactions among proteins in a human cell, Visual Complexity presents one hundred of the most interesting examples of information-visualization by the field\'s leading practitioners.'
    },
    connected: {
        url: "http://www.amazon.com/gp/product/0316036137/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316036137&linkCode=as2&tag=neotech05-20",
        name: "Connected: The Surprising Power of Our Social Networks and How They Shape Our Lives — How Your Friends\' Friends\' Friends Affect Everything You Feel, Think, and Do",
        author: "Nicholas A. Christakis and James H. Fowler",
        price: "List Price: $15.99",
        logo: "/assets/img/books/connected.png",
        text: 'Renowned scientists Christakis and Fowler present compelling evidence for our profound influence on one another\'s tastes, health, wealth, happiness, beliefs, even weight, as they explain how social networks form and how they operate.'
    }
}
exports.trainings = [
    { date: "Feb 13", url: "0213-siliconvalley-register.html", city: "Silicon Valley", presenter: {name: "@dmontag"}, location: "Quadrus Conference Center", area: "US" },
    { date: "Feb 20", url: "0220-chicago-register.html", city: "Chicago", presenter: {name: "@maxdemarzi", twitter: "maxdemarzi"}, location: "TechNexus", area: "US" },
    { date: "Feb 26", url: "0226-dc-register.html", city: "Washington, D.C.", presenter: {name: "@maxdemarzi", twitter: "maxdemarzi"}, location: "Catalyst Restaurant", area: "US" },
    { date: "Feb 28", url: "0228-boston-register.html", city: "Boston", presenter: {name: "@maxdemarzi", twitter: "maxdemarzi"}, location: "Catalyst Restaurant", area: "US" },
    { date: "Mar 7", url: "0307-sf-register.html", city: "San Francisco", presenter: { name: "@akollegger", twitter: "akollegger"}, location: "Mission Bay CC", area: "US" },
    { date: "Mar 12", url: "0312-la-register.html", city: "Los Angeles", presenter: { name: "@chrisl", twitter: "cleishm"}, location: "Working Village", area: "US" },

    { date: "Feb 19", url: "0219-munich-register.html", city: "M&uuml;nchen", presenter: { name: "@darthvader42", twitter: "darthvader42"}, location: "comSysto", area: "EU" },
    { date: "Feb 21", url: "0221-frankfurt-register.html", city: "Frankfurt", presenter: { name: "@darthvader42", twitter: "darthvader42"}, location: "UG Morgner", area: "EU" },
    { date: "Mar 4", url: "http://qconlondon.com/london-2013/presentation/Neo4j%20Tutorial", city: "London", 
        presenter: [{name:"@iansrobinson"},{name:"@jimwebber"}],
        location: "QCon London", area: "EU" },
    { date: "Mar 5", url: "0305-paris-register.html", city: "Paris", presenter: { name: "@darthvader42", twitter: "darthvader42"}, location: "Zenika", area: "EU" },
    { date: "Mar 5", url: "0305-london-register.html", city: "London", presenter: { name: "@aleksavukotic", twitter: "AleksaVukotic", company: "OpenCredo"}, location: "LMG Training & Development", area: "EU"},
    { date: "Mar 7", url: "0307-amsterdam-register.html", city: "Amsterdam", presenter: { name: "@darthvader42", twitter: "darthvader42"}, location: "Xebia", area: "EU" },
    { date: "Mar 12", url: "0312-berlin-register.html", city: "Berlin", presenter: { name: "@mesirii", twitter: "mesirii"}, location: "betahaus", area: "EU" },
    { date: "Mar 14", url: "0314-dusseldorf-register.html", city: "D&uuml;sseldorf", presenter: { name: "@darthvader42", twitter: "darthvader42"}, location: "codecentric", area: "EU" }
]
