var content = require("./content").content

exports.pages = {
    learn: {
        path: "/learn",
        title: "Learn",
        introText: "Below you find a number of useful starting points to learn about neo4j, graph databases and fast development with Neo4j.",
        featured: null,
        related: [content.books.graphdatabases,"concepts", "intro", "tracks", "production"]
    },
    develop: {
        path: "/develop",
        title: "Develop",
        introText: "Learn how to develop applications with Neo4j and deploy Server instances.",
        featured: null,
        related: ["get_started", "drivers", "tools", "cloud", "ops"]
    },
    participate: {
        path: "/participate",
        title: "Participate",
        introText: "Connect with a friendly, engaging, and ever expanding community online or in person.",
        featured: null,
        related: ["q_and_a", "contributors", "events"]
    },
    concepts: {
        path: "/learn/concepts",
        title: "Graph Concepts",
        introText: "Learn about the graph data model, graph databases and their applicability. See how graph databases related to other NOSQL solutions.",
        featured: [content.videos.graphdb101],
        actionText: "Learn more",
        related: [ "graphdatabase", "nosql", content.links.neo4j_ref_card ]
    },
    intro: {
        path: "/learn/intro",
        title: "Neo4j Introduction",
        introText: "In order to get familiar with Graph Databases, Neo4j and Cypher, start with the following introduction sections.",
        featured: [
            content.videos.why_graphs
        ],
        related: [ "neo4j", "cypher", "tracks", content.links.neo4j_ref_card ]
    },
    tracks: {
        path: "/learn/tracks",
        title: "Neo4j learning tracks",
        introText: "This is the starting point for a number of different tracks to learn more about Neo4j. Follow a track that you are interested in to learn more about different aspects of Neo4j.",
        featured: null,
        actionText: "Choose your track",
        related: ["java","track_cypher"]
    },
    java: {
        path: "/java",
        type: "track",
        title: "Neo4j for Java devs",
        thumbnail: "/assets/img/languages/java.jpg",
        introText: "The Java track covers the Neo4j Core-API as well as interacting with the Neo4j Server from Java and other JVM languages.",
        actionText: "Start",
        next: ["java_basics", "jvm"],
        prev: ["server_plugins"],
        featured: null,
        related: [
            content.links.javadoc,
            content.links.manual
        ]
    },

    track_cypher: {
        path: "/tracks/cypher",
        type: "track",
        title: "The Cypher track",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "The Cypher track concentrates on the Cypher Graph Query language, making interaction with Neo4j framework independent.",
        actionText: "Start",
        next: [],
        prev: [],
        featured: [
        ],
        related: [
        ]
    },

    java_basics: {
        path: "/java/java_basics",
        title: "Java programming basics with Neo4j",
        introText: "",
        next: ["jvm"],
        prev: ["java"],
        featured: [
            content.tracks.java_basics
        ],
        related: ["neo4j"]

    },
    jvm: {
        path: "/java/jvm",
        title: "JVM projects",
        introText: "(TODO) Intro text for JVM projects",
        next: ["server_plugins"],
        prev: ["java_basics"],
        featured: [
            content.tracks.jvm_projects
        ],
        related: []
    },
    server_plugins: {
        path: "/java/server_plugins",
        title: "Server plugins",
        introText: "If you are using Neo4j Server, you can use Server plugins written in Java to extend the functionality of the REST API.",
        next: ["java"],
        prev: ["jvm"],
        featured: [
            {
                type: "track",
                content: "the content"
            }
        ],
        related: [
            content.links.manual_server
        ]
    },

    production: {
        path: "/learn/production",
        title: "Going into Production",
        introText: "In order to run Neo4j in production scenarios, there are a number of aspects that need to be covered. Here you find some resources on putting Neo4j into production.",
        featured: content.videos.production_secrets,
        actionText: "Go into production",
        related: [
            "licensing",
            content.links.partners_graph

        ]
    },
    licensing: {
        path: "/learn/licensing",
        title: "Commercial Licensing",
        introText: "Neo4's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
        actionText: "Read more",
        featured: [content.articles.licensing_guide],
        related: [content.articles.partner_graph]
    },
    partners: {
        path: "/learn/partners",
        title: "Partner Graph",
        //path : "http://www.neotechnology.com/partners/",
        introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
        actionText: "Read more",
        featured: [
            content.articles.partner_graph
        ],
        related: []
    },
    graphdatabase: {
        path: "/learn/graphdatabase",
        title: "What is a Graph Database?",
        introText: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way",
        content: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way. Let’s follow along some graphs, using them to express themselves. We’ll “read” a graph by following arrows around the diagram to form sentences.",
        next: ["nosql", "neo4j"],
        prev: [],
        featured: ["content_graphdb_graph", "content_graphdb_traversal", "content_graphdb_indexes"],
        actionText: "Learn more",
        related: ["cypher"]
    },
    nosql: {
        path: "/learn/nosql",
        title: "NoSQL Data Models",
        introText: "Understanding data stores for your application.",
        next: ["graphdatabase"],
        prev: ["concepts"],
        featured: [
            content.tracks.nosql
        ],
        actionText: "Not only SQL",
        related: null
    },
    get_started: {
        path: "/learn/get_started",
        title: "Get started with Neo4j",
        introText: "(TODO) Intro text for get started with Neo4j",
        featured: ["content_video_installing_neo4j"],
        related: ["intro", "drivers"]
    },
    drivers: {
        path: "/develop/drivers",
        title: "Language Drivers",
        introText: "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail: "/assets/img/still/neo4j_drivers.png",
        featured: null,
        related: ["neo4j_rest", "spring_data_neo4j", "neo4j_java", "neo4j_rb", "neography", "neo4jphp", "neo4jclient", "py2neo", "neo4j_python", "node_neo4j", "neocons", "bulbflow", "keymaker", "neoid", "neo4django", "neo4j_rest_client", "neo4p", "scala", "grails", "anorm_cypher", "haskell", "datanucleus", "neo4j_go"]
    },
    tools: {
        path: "/develop/tools",
        title: "Tools and Resources",
        introText: "There are a lot of tools and resources around Neo4j.",
        featured: [content.videos.cypher],
        related: ["drivers", "try", "visualize"]
    },
    books: {
        path: "/learn/books",
        thumbnail: "/assets/img/books/nosql_distilled.png",
        title: "Graph Database related Books",
        introText: "Learn more about Neo4j, Graph Theory and Graph Databases by reading these amazing books!",
        featured: [content.books.graphdatabases],
        related: [content.books.graphdatabases, content.books.goodrelationships, content.books.nosqldistilled, content.books.sevendatabases, content.books.neo4jinaction, content.books.visualcomplexity, content.books.connected]
    },
    cloud: {
        path: "/develop/cloud",
        title: "Neo4j in the Cloud",
        introText: "Neo4j can be run in various cloud scenarios and on a number of cloud stacks.",
        actionText: "Neo4j in the Cloud",
        featured: [content.videos.james_ward_neo4j],
        related: ["heroku"]
    },
    heroku: {
        path: "/develop/heroku",
        title: "Neo4j Heroku Add-on",
        introText: "NA managed graph database in the cloud, perfect for getting to know Neo4j.",
        actionText: "Do it now",
        featured: [
            content.articles.neo4j_on_heroku
        ],
        related: ["heroku_screencast"]
    },
    heroku_screencast: {
        path: "/develop/heroku/screencast",
        title: "Screencast: Integrate Neo4j, Heroku and Google Docs",
        actionText: "Watch this screencast ",
        featured: [
            content.videos.neo4j_heroku_gdocs
        ],
        related: []
    },
    sdn: {
        path: "/spring",
        title: "Spring Data Neo4j",
        introText: "The best NOSQL database for Spring.",
        actionText: "Go ahead",
        featured: [content.videos.good_relationships],
        related: ["good-relationships-spring-data", "getting-started-spring"]
    },
    // people : {
    //     path : "/participate/people",
    //     title : "People around Neo4j",
    //     introText : "See who drives Neo4j",
    //     featured : {
    //         title : "We need you",
    //         type : "video",
    //         thumbnail : "http://photos3.meetupstatic.com/photos/event/8/3/a/6/600_149253702.jpeg",
    //         introText : "(TODO) we need an introductory video about why people matter to Neo4j",
    //         src : "http://player.vimeo.com/video/53838744"
    //     },
    //     related : ["contributors", "neo_staff", "speakers", "authors"]
    // },
    contributors: {
        path: "/participate/contributors",
        title: "Contributors - you rock.",
        introText: "The Neo4j project is driven by the community. Here are some individuals that you might encounter in the discussion forums or come across their projects.\
        For a full list of all code contributors, please see <a href='http://docs.neo4j.org/chunked/snapshot/contributors.html' target='_blank'>The official docs.</a>",
        previewText: "We're very proud to have such an engaged group of contributors to Neo4j and its ecosystem.",
        actionText: "See our contributors",
        thumbnail: "/assets/new/img/contributors.png",
//        type: "_contributors",
        related: ["maxdemarzi","mhluongo","ronge","craigtaverner","technige", "pablopareja","espeed","rhetonik"]
    },
    events: {
        path: "/events",
        title: "Events",
        thumbnail: "/assets/img/logo/meetup.jpg",
        introText: "If you want to learn more about Neo4j nothing beats a hands on experience. Listen to our community members and driver authors, talk to our engineers or discuss with our customers.",
        related: ["meetups", "conferences", "webinars"]
    },
    meetups: {
        path: "/participate/events/meetups",
        title: "Meetups around the World",
        introText: "",
        actionText: "Find a meetup",
        featured: [
            content.articles.meetups
        ],
        related: ["events", "webinars", "conferences"]
    },
    webinars: {
        path: "/participate/events/webinars",
        title: "Webinars",
        introText: "",
        actionText: "Find a webinar",
        featured: [
            {
                type: "article",
                title: "",
                introText: "(TODO) Introtext webinars",
                content: "TODO: Content for webinars page"
            }
        ],
        related: ["events", "meetups", "conferences"]
    },
    conferences: {
        path: "/participate/events/conferences",
        title: "Neo4j at Conferences",
        introText: "(TODO) intro text neo4j conferences",
        actionText: "Neo4j at conferences",
        featured: ["content_article_gc2012"],
        related: ["events", "meetups", "webinars"]

    },
    q_and_a: {
        path: "/participate/q_and_a",
        title: "Ask Questions and Share Answers",
        introText: "Here you can find some of the resources that give you access to questions, answers and support around Neo4j related questions.",
        thumbnail: "/assets/img/logo/googlegroups.png",
        featured: null,
        related: [
            content.links.stack_overflow, content.links.mailing_list, content.links.github_neo4j
        ]
    },
    neo4j: {
        path: "/learn/neo4j",
        title: "What is Neo4j?",
        introText: "Neo4j is a graph database, reliable and fast for managing and querying highly connected data.",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
        actionText: "Study this",
        featured: [
            content.articles.learn
        ],
        related: ["graphdatabase", content.videos.graphdb101, content.links.reference_card]
    },
    reference_card: {
        path: "/learn/neo4j/reference_card",
        title: "Ne4j Reference Card",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w587.png",
        featured: [content.links.reference_card]
    },
    cypher: {
        path: "/learn/cypher",
        title: "Cypher Tutorial",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "Hands on introduction to the Cypher Query Language",
        actionText: "Learn it",
        featured: [
            {
                title: "Cypher Tutorial",
                type: "_cypher"
            }
        ],
        related: [
            "try", content.videos.cypher, content.links.manual_cypher, content.links.cypher_cheat_sheet
        ]
    },
    ops: {
        path: "/develop/ops",
        title: "Operations",
        introText: "Here you can find some resources related to running Neo4j in different scenarios.",
        actionText: null,
        featured: null,
        related: [content.videos.ha, content.videos.installing_neo4j]
    },
    try: {
        path: "/learn/try",
        title: "Try",
        introText: "Try Cypher live on a dataset of your choice",
        actionText: "Try live",
        featured: [
            {
                title: "Cypher Console",
                type: "_try",
                content: ""
            }
        ],
        related: [content.links.cypher_cheat_sheet, content.links.manual_cypher,"cypher"
        ]
    },
    visualize: {
        path: "/develop/visualize",
        title: "Graph Visualization",
        introText: "Storing a graph is one thing, but visualizing it creates awe and epiphanies.\
                Graph visualisations are a powerful tool to convey the content of a graph. They can highlight patterns, show clusters and connections.\
                There are different tools that you can use to visualize the content of a Neo4j graph database.",
        featured: [
            {
                type: "_visualize",
                items: [
                    content.videos.neo4j_webui,
                    content.links.d3,
                    content.links.gephi,
                    content.videos.graphviz
                ]
            }
        ],
        related: [
            {
                title: "Max De Marzi's Graph Visualization Blog",
                path: "http://maxdemarzi.com/tag/visualization-2/"
            },
            {
                title: "D3.js visualization",
                path: "https://github.com/mbostock/d3/wiki/Gallery"
            },
            {
                title: "Gephi",
                path: "http://gephi.org"
            },
            {
                title: "Neoclipse on GitHub",
                path: "https://github.com/neo4j/neoclipse"
            },
            {
                title: "A collection of graph visualization options",
                path: "http://clipboard.com/mesirii/boards/viz"
            }
        ]
    },
    apps: {
        path: "/learn/apps",
        title: "Apps Gallery",
        introText: "Built with Neo4j, tripping the graph fantastic.",
        featured: null,
        related: [content.apps.flavorwocky, content.apps.frostymug, content.apps.polymap, content.apps.neosocial, content.apps.structr]
    }
    /*
     ]
     {
     title : "POJO to Graph",
     path : "/develop/spring",
     introText : "Simply annotate your Java classes, configure your Spring application, then enjoy the power of object graph mapping.",
     actionText : "Go ahead"
     },
     {
     title : "Example App",
     path : "http://blog.neo4j.org/2012/10/using-spring-data-neo4j-for-hubway-data.html",
     introText : "Use Spring Data Neo4j to model and import the <a target='_blank' href='http://hubwaydatachallenge.org/trip-history-data/''>Hubway Challenge</a> dataset, for advanced querying and visualization.",
     actionText : "Follow along"
     }
     ]
     {
     title : "High Availability",
     path : "http://docs.neo4j.org/chunked/stable/ha-how.html",
     introText : "Master-slave replication in a cluster provides your application with read-scaling and fault tolerance.",
     actionText : "Read more"
     },
     {
     title : "Backups",
     path : "http://docs.neo4j.org/chunked/stable/operations-backup.html",
     introText : "A fundamental operation for any application: back up early, back up often.",
     actionText : "Read more"
     },
     {
     title : "Hardware Sizing",
     path : "",
     introText : "<img class='thumbnail' src='/assets/img/still/hardware-sizing.png' alt='Click to View' data-src='http://player.vimeo.com/video/46049647'><br><i class='icon icon-facetime-video'></i>  Roll up your sleeves and pop the hood, let&#39;s tune this engine.",
     actionText : ""
     }
     ]
     ]

     */

    //            content: "<p>The Neo4j Java API is very easy to use. You can interact with the GraphDatabase, Nodes and Relationships directly.\
//            To run more interesting queries or complex operations you can also execute <a href=\"/java/java_cypher\">Cypher</a>\
//        from your program.</p>\
//                                                             \
//    <p>After including Neo4j in your project and <a href=\"/java/ide\">setting up your IDE</a>. See the Hello-World example\
//    below for getting started.   </p>\
//    <h3>Adding the Neo4j dependencies to your project</h3>\
//    <% include ../../download/_embedded_dependency %>      \
//                                                              \
//        <div class=\"markdown\"><%- content.java_hello_world %></div>"

}
