var content = require("./content").content

exports.pages = {
    learn: {
        path: "/learn",
        title: "Learn",
        introText: "Below you find a number of useful starting points to learn about neo4j, graph databases and fast development with Neo4j.",
        featured: null,
        related: [content.books.graphdatabases, "concepts", "intro", "tracks", "production", "scientific"]
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
    scientific: {
        path: "/learn/scientific",
        title: "Neo4j in the scientific community",
        introText: "There is a lot of research going on around Graph Databases in general and Neo4j in particular. Below you find some of the more recent works in this field.",
        featured: null,
        actionText: "Read more",
        related: [content.scientific.wordnet_using_graphdbs, content.scientific.the_graph_traversal_pattern]
    },
    /*
     <li>Open the <a href='http://localhost:7474' target='_blank'>Neo4j Web Interface</a></li>
     <li>Explore the Data Browser Tab</li>
     <li>Switch to the Console Tab</li>
     <li>Read about the <a href="/learn/cypher">Cypher</a> Query Language</li>
     <li>Follow the source links for some example cypher queries</li>

     */
    example_data: {
        path: "/develop/example_data",
        title: "Example Datasets",
        introText: "Prepared data sets for you to explore",
        content: "<p>The ZIP-Files contain the content of the <code>graph.db</code> directory. To use them:</p>" +
            " <ul> " +
            "<li>Stop your Neo4j server</li> " +
            "<li>Extract the file into <code>/path/to/neo/data/graph.db</code></li> " +
            "<li>Start the server again</li> " +
            "<li>Open the <a href='http://localhost:7474' target='_blank'>Neo4j Web Interface</a></li>" +
            "<li>Read about the <a href='/learn/cypher'>Cypher</a> Query Language</li>" +
            "<li>Follow the source links for some example cypher queries</li>" +
            "</ul> " +
            "<p> All data sets are compatible with Neo4j version 1.6 and later. </p> " +
            "<p> You can also point the <a href='http://docs.neo4j.org/chunked/milestone/shell.html' target='_blank'>neo4j-shell</a> to the extracted directory to run cypher-queries directly: </p> " +
            "<pre>/path/to/neo/bin/neo4j-shell -path /path/to/graph.db</pre>",
        featured: [ content.videos.importing_sample_data],
        actionText: "Get some data",
        related: [
            content.example_data.dr_who
            , content.example_data.fec_2012
            , content.example_data.heroku_waza_2013
            , content.example_data.cineasts_small
            , content.example_data.cineasts_large
            , content.example_data.hubway
            , content.videos.neo4j_webui
            , content.links.cypher_cheat_sheet
        ]
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
        related: ["java", "cypher_track_start"]
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
        featured: [
            content.tracks.java_intro
        ],
        related: [
            content.links.javadoc,
            content.links.manual
        ]
    },

    cypher_track_start: {
        path: "/tracks/cypher_track_start",
        type: "track",
        title: "The Cypher track",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "The Cypher track concentrates on the Cypher Graph Query language, making interaction with Neo4j framework independent.",
        actionText: "Start",
        next: ["cypher_track_1"],
        prev: [],
        featured: [],
        related: [  "cypher","reference_card", content.links.manual_cypher

        ]
    },
    cypher_track_1: {
        path: "/tracks/cypher_track_1",
        type: "track",
        title: "1. Intro",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "",
        actionText: "Start",
        next: ["cypher_track_2"],
        prev: ["cypher_track_start"],
        featured: [content.tracks.cypher_tutorial_1],
        related: []
    },
    cypher_track_2: {
        path: "/tracks/cypher_track_2",
        type: "track",
        title: "2. First steps with Cypher",
        thumbnail: "/assets/img/still/cypher_tutorial.gif",
        introText: "",
        actionText: "Start",
        next: ["tracks"],
        prev: ["cypher_track_1"],
        featured: [content.tracks.cypher_tutorial_2],
        related: []
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
        related: ["neo4j", content.links.eclipse_maven_neo4j_setup, "cypher_track_start"]

    },
    jvm: {
        path: "/java/jvm",
        title: "JVM projects",
        introText: "Here you can see a number of components, projects and products that are useful and interesting if you are working on the JVM ecosystem with Neo4j.",
        next: ["server_plugins"],
        prev: ["java_basics"],
        featured: [
//            content.tracks.jvm_projects
        ],
        related: [content.projects.neoclipse, content.apps.structr, content.projects.spatial, content.projects.jdbc, content.projects.jpa, content.projects.java_rest_binding, content.projects.graph_collections]
    },
    server_plugins: {
        path: "/java/server_plugins",
        title: "Server plugins",
        introText: "If you are using Neo4j Server, you can use Server plugins written in Java to extend the functionality of the REST API.",
        next: ["java"],
        prev: ["jvm"],
        featured: [
            content.tracks.tracks_server_plugins
        ],
        related: [
            content.links.manual_server, content.projects.spatial, content.projects.gremlin_plugin
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
        featured: [
            content.articles.graph,
            content.articles.graphdb_traversal,
            content.articles.graphdb_indexes
        ],
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
        related: ["tracks","intro", "drivers"]
    },
    drivers: {
        path: "/develop/drivers",
        title: "Language Drivers",
        introText: "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail: "/assets/img/still/neo4j_drivers.png",
        featured: null,
        related: ["neo4j_rest", "spring", "neo4j_java", "neo4j_rb", "neography", "neo4jphp", "neo4jclient", "py2neo", "neo4j_python", "node_neo4j", "neocons", "bulbflow", "keymaker", "neoid", "neo4django", "neo4j_rest_client", "neo4p", "scala", "grails", "anorm_cypher", "haskell", "datanucleus", "neo4j_go"]
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
        thumbnail:"/assets/img/neo4j/neo4j_cloud.png",
        actionText: "Neo4j in the Cloud",
        featured: [content.videos.james_ward_neo4j],
        related: ["heroku"]
    },
    heroku: {
        path: "/develop/heroku",
        title: "Neo4j Heroku Add-on",
        thumbnail: "/assets/img/logo/heroku.png",
        introText: "A managed graph database in the cloud, perfect for getting to know Neo4j.",
        actionText: "Do it now",
        featured: [
            content.articles.neo4j_on_heroku
        ],
        related: [
            content.videos.neo4j_heroku_gdocs,
            {
                thumbnail:"/assets/img/logo/heroku.png",
                title: "Heroku Neo4j Add-on",
                path: "http://addons.heroku.com/neo4j"
        
            },
            {
                thumbnail:"/assets/img/logo/heroku.png",
                title: "Heroku devcenter article on Neo4j",
                path: "http://devcenter.heroku.com/articles/neo4j"
            },
            {
                thumbnail:"/assets/img/logo/github.png",
                title: "Clone an example Github Herkou template",
                path: "https://github.com/neo4j/neo4j-heroku-example"
            },
            {
                thumbnail:"/assets/img/contributors/maxdemarzi.jpg",
                title: "Max De Marzi's Heroku examples",
                path: "http://maxdemarzi.com/tag/heroku/"
            },
            {
                thumbnail:"/assets/img/neo4j/neo4j_cloud.png",
                title: "Neo4j Heroku Challenge Applications",
                path: "http://blog.neo4j.org/2012/03/heroku-challengers-vote-now.html"
            },
            {
                thumbnail:"https://waza.heroku.com/images/layout/waza-bookmark.png",
                title: "Neo4j at Heroku Waza 2013",
                path: "http://waza.neo4j.org"
            },
            content.videos.james_ward_neo4j
        ]
    },
    spring: {
        path: "/develop/spring",
        title: "Spring Data Neo4j",
        introText: "The best NOSQL database for Spring.",
        actionText: "Go ahead",
        featured: [content.videos.good_relationships, content.books.goodrelationships],
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
        featured: [content.videos.neo4j_code_2012],
        thumbnail: "/assets/img/still/neo4j_code_2012.gif",
//        type: "_contributors",
        related: ["maxdemarzi", "mhluongo", "ronge", "craigtaverner", "technige", "pablopareja", "espeed", "rhetonik"]
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
            // content.articles.meetups
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
        featured: [content.links.stack_overflow],
        related: [
            content.links.mailing_list, content.links.github_neo4j
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
        related: ["graphdatabase", content.videos.graphdb101, content.links.neo4j_ref_card]
    },
    reference_card: {
        path: "/learn/neo4j/reference_card",
        title: "Ne4j Reference Card",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w587.png",
        featured: [
            content.links.neo4j_ref_card
        ]
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
        related: [content.links.cypher_cheat_sheet, content.links.manual_cypher, "cypher"
        ]
    },
    visualize: {
        path: "/develop/visualize",
        title: "Graph Visualization",
        introText: "Storing a graph is one thing, but visualizing it creates awe and epiphanies.\
                Graph visualisations are a powerful tool to convey the content of a graph. They can highlight patterns, show clusters and connections.\
                There are different tools that you can use to visualize the content of a Neo4j graph database.",
        featured: [
            content.videos.neo4j_webui,
            content.links.d3,
            content.projects.neoclipse,
            content.links.gephi,
            content.videos.graphviz
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
        related: [content.apps.flavorwocky,
            content.apps.frostymug, content.apps.polymap,
            content.apps.neosocial, content.apps.structr,
            content.projects.neoclipse]
    }
}