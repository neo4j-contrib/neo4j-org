var render = require('./render');
var content = require("./content").content
var video = require("./content").video
var asset = require("../helpers/assets.js").asset

exports.pages = {
    learn: {
        path: "/learn",
        title: "Learn",
        introText: "Below you find a number of useful starting points to learn about neo4j, graph databases and fast development with Neo4j.",
        featured: [content.books.graphdatabases,content.videos.why_graphs,content.videos.graphdb101],
        related: ["graphdatabase","neo4j", "nosql","tracks", "cypher","production", "licensing",content.links.manual,"scientific"]
    },
    develop: {
        path: "/develop",
        title: "Develop",
        introText: "Learn how to develop applications with Neo4j and deploy Server instances.",
        featured: null,
        related: ["tracks", "drivers", "import", "tools", "cloud", "ops", "java","spring","ruby", "dotnet", "python", "scala", "php", "clojure"]
    },
    participate: {
        path: "/participate",
        title: "Participate",
        introText: "Connect with a friendly, engaging, and ever expanding community online or in person.",
        featured: null,
        related: ["q_and_a", "contributors", "events",
            {
                type: "include",
                title: "@Neo4j Tweets",
                path: "/participate/twitter"
            }, "channels", "graphistas_map", "beer", content.projects.neo4j_org
        ]
    },
    download_thanks: {
        path: "/download_thanks",
        title: "Here you go!",
        introText: "",
        content: function (params) {
            return render.include("download_thanks", params);
        },
        featured:[ content.videos.installing_neo4j],
        related: [
           
            "other_versions",
            content.install.upgrading,
            {
                type: "link",
                title: "Detailed Installation Instructions",
                introText: "For detailed explanations on how to install Neo4j please refer to the Manual",
                path: "http://docs.neo4j.org/chunked/stable/server-installation.html"
            },
            "maven",
            "linux",
            content.install.homebrew
        ]
    },
    download: {
        path: "/download",
        title: "Download and Install Neo4j",
        introText: "Take Neo4j for a spin. Community, Advanced, and Enterprise are available for your exploration.",
        content: ""// render.include("download/installation")
        ,
        featured: [
            {
                type: "include",
                title: "Neo4j Releases",
                path: "/partials/version/_main"
            }
            // content.videos.installing_neo4j,
            // content.install.milestone
            //,content.install.stable
        ],
        related: [
            // content.install.milestone,
            // content.install.stable,
            //"graphdatabase",
            //"develop",
            //"participate",
            "other_versions",
            content.install.upgrading,
            {
                type: "link",
                title: "Detailed Installation Instructions",
                introText: "For detailed explanations on how to install Neo4j please refer to the Manual",
                path: "http://docs.neo4j.org/chunked/stable/server-installation.html"
            },
            "maven",
            "linux",
            content.install.homebrew
        ]
    },
    other_versions: {
        type: "page",
        title: "Other Neo4j Versions",
        introText: "Older, stable Neo4j versions and nightly builds",
        path: "/download/other_versions",
        related: [
            content.install["1_7_2"],
            content.install["1_6_3"],
            content.install["1_5_3"],
            content.install.upgrading,
            content.install.snapshot
        ]
    },
    maven: {
        path: "/download/maven",
        title: "Maven Dependency",
        actionText: "Add dependency",
        introText: "If you want to include Neo4j in the build of your JVM language project (Java,Scala, Groovy, Clojure) just add the correct dependency",
        featured: [ content.install.maven ],
        related: [content.tracks.java_intro]
    },
    linux: {
        path: "/download/linux",
        config: { tile_page: true, no_slides: true },
        title: "Linux Installation",
        actionText: "Install on Linux",
        introText: "Installing Neo4j on Linux for instance by using apt or puppet",
        featured: [
            content.install.debian,
            content.install.puppet
        ]
    },
    scientific: {
        path: "/learn/scientific",
        thumbnail: asset("img/logo/scientific.png"),
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
    tracks: {
        path: "/learn/tracks",
        title: "Neo4j learning tracks",
        introText: "This is the starting point for a number of different tracks to learn more about Neo4j. Follow a track that you are interested in to learn more about different aspects of Neo4j.",
        featured: null,
        actionText: "Choose your track",
        related: ["java", "cypher_track_start"]
    },
    java: {
        path: "/develop/java",
        type: "track",
        title: "Neo4j for Java devs",
        thumbnail: asset("img/languages/java.jpg"),
        introText: "The Java track covers the Neo4j Core-API as well as interacting with the Neo4j Server from Java and other JVM languages.",
        actionText: "Start",
        next: ["java_basics", "jvm"],
        prev: ["server_plugins"],
        featured: [
            content.tracks.java_intro
        ],
        related: [
            "spring",
            "neo4j_server",
            content.links.javadoc,
            content.links.manual_java
        ]
    },

    cypher_track_start: {
        path: "/tracks/cypher_track_start",
        type: "track",
        title: "The Cypher track",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "The Cypher track concentrates on the Cypher Graph Query language, making interaction with Neo4j framework independent.",
        actionText: "Start",
        next: ["cypher", "cypher_track_use"],
        prev: [],
        featured: [content.videos.cypher],
        related: [ "reference_card", content.links.cypher_cheat_sheet, content.videos.cypher, video('Interview: Michael Hunger discusses Cypher transition from SQL')

        ]
    },
    cypher_track_use: {
        path: "/tracks/cypher_track_use",
        type: "track",
        title: "Use Cypher",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "",
        actionText: "Begin to use Cypher",
        next: ["cypher_track_develop"],
        prev: ["cypher", "cypher_track_start"],
        featured: [content.videos.cypher_vs_sql],
        related: [
            content.videos.cypher_advanced,
            content.links.cypher_cheat_sheet,
            content.links.wes_cypher,
            {
                type: "video",
                title: "Got a graph database? Need a Query Language!",
                introText: "Cypher is a graph query language that is powerful and easy to use, and a unique feature of Neo4j.  Much like SQL, Cypher is a declarative language and is the easiest way to query one’s graph.  Whereas first-generation graph query languages require you to specify exactly how the database will walk the graph, with Cypher you simply tell the database what you want, and the database engine takes care of the low-level details.  This results in less code, improved readability, and faster development cycles.  Cypher has been embraced with great enthusiasm by the Neo4j user community, and is now the preferred language for Neo4j development.",
                thumbnail: asset("img/still/got_a_graph_talk.png"),
                src: "http://player.vimeo.com/video/45318365"
            }
            // import with cypher
            // the shell
            // the rest-cypher
            // profiling
        ]
    },
    cypher_track_develop: {
        path: "/tracks/cypher_track_develop",
        type: "track",
        title: "Develop with Cypher",
        thumbnail: asset("img/logo/cypher_small.gif"),
        introText: "",
        actionText: "Start",
        next: ["java"],
        prev: ["cypher_track_use", "cypher"],
        featured: [
            // demo app
            // how to use cypher from java
        ],
        related: [
            content.links.mark_cypher,
            // import with cypher
            // the shell
            // the rest-cypher
            // profiling
            // demo apps
            "shell",
            content.videos.neo4j_webui,
            "import",
            content.drivers.anorm_cypher,
            content.drivers.neography,
            content.drivers.node_neo4j
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
        related: ["neo4j", content.links.eclipse_maven_neo4j_setup, "cypher_track_start"]

    },
    jvm: {
        path: "/java/jvm",
        title: "JVM projects",
        introText: "Here you can see a number of components, projects and products that are useful and interesting if you are working on the JVM ecosystem with Neo4j.",
        next: ["server_plugins"],
        prev: ["java_basics"],
        featured: [
        ],
        related: [content.projects.neoclipse, content.apps.structr, content.projects.spatial, content.projects.jdbc, content.projects.jpa, content.drivers.neo4j_rest, content.projects.graph_collections]
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
            video('0607 - High Availability with Neo4j'),
            "ops",
            content.links.partners_graph
        ]
    },
    licensing: {
        path: "/learn/licensing",
        title: "Pragmatic Licensing Guide",
        introText: "Neo4's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
        thumbnail: asset("img/logo/neotechnology_small.png"),
        featured: [content.articles.licensing_guide,content.articles.licensing_guide_which],
        related: [
            content.books.graphdatabases,
            {
                title: "Contact Neo Technology",
                thumbnail: asset("img/logo/neotechnology_small.png"),
                introText: "A Neo Technology representative can help you to determine how to proceed to a production deployment of Neo4j.",
                path: "http://neotechnology.com/contactus/"
            },
            {
                title: "Neo4j White Papers",
                thumbnail: "http://www.neotechnology.com/wp-content/uploads/2013/02/WP_FTSL-125x160.png",
                introText: "Whitepapers about Graph Databases, Big Data, Scaling, Licensing and more.",
                path: "http://www.neotechnology.com/resources/"
            },
            {
                key: "use-cases",
                title: "Neo4j Use Cases",
                thumbnail: "http://www.neotechnology.com/wp-content/uploads/2013/01/WP-NetMgmt_sm.png",
                introText: "Principal uses of Neo4j include social, recommendations, bioinformatics, fraud detection, network management, authorization and access control, content management, and parcel routing, with new ones being added regularly.",
                path: "http://www.neotechnology.com/neo4j-use-cases/"
            },
            {
                title: "Neo4j Customers",
                thumbnail: "http://www.neotechnology.com/wp-content/uploads/2012/11/neo4j_customers.png",
                introText: "From the Fortune 500 to cutting edge startups, our customers depend on Neo4j for insanely high performance queries on massive amounts of connected data. Graphs Are Everywhere!",
                path: "http://www.neotechnology.com/customers/"
            },
            content.articles.partner_graph
        ]
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
        introText: "A graph database stores data in a graph, the most generic of data structures, capable of elegantly representing any kind of data in a highly accessible way.",
        content: "Let’s follow along some graphs, using them to express themselves. We’ll “read” a graph by following arrows around the diagram to form sentences.",
        thumbnail: asset("img/propertygraph/graphdb-gve.png"),
        //next: ["nosql", "neo4j"],
        //prev: [],
        featured: [
            content.articles.graphdb.graph,
            content.articles.graphdb.graphdb_traversal,
            content.articles.graphdb.graphdb_indexes,
            content.videos.why_graphs
        ],
        actionText: "Learn more",
        related: [
            content.books.graphdatabases,
            "neo4j",
            content.videos.graphdb101,"cypher_track_start","nosql"]
    },
    nosql: {
        path: "/learn/nosql",
        title: "NoSQL Data Models",
        thumbnail: asset("img/propertygraph/nosql-space.png"),
        introText: "Understanding data stores for your application.",
        // next: ["graphdatabase"],
        //prev: ["concepts"],
        featured: [
            content.articles.nosql.nosql,
            content.articles.nosql.rdbms,
            content.articles.nosql.keyvalue,
            content.articles.nosql.document
        ],
        actionText: "Not only SQL",
        related: ["graphdatabase","neo4j","cypher_track_start","licensing"]
    },
    drivers: {
        path: "/develop/drivers",
        title: "Language Drivers",
        introText: "Friends of Neo4j speak many languages, and work in many frameworks.",
        thumbnail: asset("img/still/neo4j_drivers.png"),
        featured: null,
        related: ["neo4j_rest", "spring_data_neo4j", "neo4j_java", "neo4j_rb", "neography", "neo4jphp", "neo4jclient", "py2neo", "neo4j_python", "node_neo4j", "neocons", "bulbflow", "keymaker", "neoid", "neo4django", "neo4j_rest_client", "neo4p", "scala", "grails", "anorm_cypher", "haskell", "datanucleus", "neo4j_go", "kundera"]
    },
    tools: {
        path: "/develop/tools",
        title: "Tools and Resources",
        introText: "There are a lot of tools and resources around Neo4j.",
        thumbnail: asset("img/still/cypher.png"),
        featured: [content.videos.cypher],
        related: ["drivers", "try", "visualize"]
    },
    books: {
        path: "/learn/books",
        thumbnail: asset("img/books/nosql_distilled.png"),
        title: "Graph Database related Books",
        introText: "Learn more about Neo4j, Graph Theory and Graph Databases by reading these amazing books!",
        featured: [content.books.graphdatabases],
        related: [content.books.graphdatabases, content.books.springdata,content.books.goodrelationships, content.books.nosqldistilled, content.books.sevendatabases, content.books.neo4jinaction, content.books.visualcomplexity, content.books.connected]
    },
    cloud: {
        path: "/develop/cloud",
        title: "Neo4j in the Cloud",
        introText: "Neo4j can be run in various cloud scenarios and on a number of cloud stacks.",
        thumbnail: asset("img/neo4j/neo4j_cloud.png"),
        actionText: "Neo4j in the Cloud",
        featured: [content.videos.james_ward_neo4j],
        related: ["heroku", "ec2", content.install.debian]
    },
    ec2: {
        path: "/develop/ec2",
        title: "Easy Neo4j on Amazon EC2",
        introText: "Setup your EC2 instance AND Neo4j using Puppet <a href='https://github.com/neo4j-contrib/neo4j-puppet/blob/master/README.CLOUDFORMATION.md' target='_blank'>(source)</a>",
        actionText: "Easy Neo4j on Amazon EC2",
        thumbnail: "http://tctechcrunch2011.files.wordpress.com/2012/12/aws-logo-640.jpg?w=200",
        featured: [
            {
                title: "Puppet Setup",
                type: "article",
                thumbnail: "http://blog.netways.de/wp-content/uploads/2010/04/Puppet_Logo.png",
                content: "\
            <blockquote class='external markdown'>\
                <%-: content.ec2_template | md %>\
            </blockquote>"
            }
        ],
        related: ["ec2_detailed", "develop", "drivers", content.links.ec2_aws_tools]
    },
    ec2_detailed: {
        path: "/develop/ec2_detailed",
        title: "Set up your EC2 instance and Neo4j manually",
        actionText: "Manual Setup",
        thumbnail: "http://tctechcrunch2011.files.wordpress.com/2012/12/aws-logo-640.jpg?w=200",
        featured: [
            {
                type: "article",
                title: "Setup <strong>Neo4j only</strong> using Puppet <a href='https://github.com/neo4j-contrib/neo4j-puppet/blob/master/README.md' target='_blank'>(source)</a>",
                content: "\
            <blockquote class='external markdown'>\
                <%-: content.puppet | md %>\
            </blockquote>"
            }
        ],
        related: ["ec2", "cloud", content.links.ec2_aws_tools,
            , "ec2_manual",
            {
                type: "link",
                title: "Deploy Neo4j on Eucalyptus",
                path: "http://blogs.mindspew-age.com/2012/12/04/another-great-example-of-aws-fidelity-neo4j-cloud-init-and-eucalyptus/"
            }]
    },
    ec2_manual: {
        type: "page",
        path: "/develop/ec2_manual",
        title: "Manually set up an AWS EC2 instance",
        featured: [
            {
                type: "include",
                path: "/develop/_ec2_manual",
                title: "Manually set up an AWS EC2 instance"
            }
        ]
    },
    heroku: {
        path: "/develop/heroku",
        title: "Neo4j Heroku Add-on",
        thumbnail: asset("img/logo/heroku.png"),
        introText: "A managed graph database in the cloud, perfect for getting to know Neo4j.",
        actionText: "Do it now",
        featured: [
            content.articles.neo4j_on_heroku
        ],
        related: [
            content.videos.neo4j_heroku_gdocs,
            {
                thumbnail: asset("img/logo/heroku.png"),
                title: "Heroku Neo4j Add-on",
                path: "http://addons.heroku.com/neo4j"

            },
            {
                thumbnail: asset("img/logo/heroku.png"),
                title: "Heroku devcenter article on Neo4j",
                path: "http://devcenter.heroku.com/articles/neo4j"
            },
            {
                thumbnail: asset("img/logo/github.png"),
                title: "Clone an example Github Herkou template",
                path: "https://github.com/neo4j-contrib/neo4j-heroku-seeds"
            },
            {
                thumbnail: asset("img/contributors/maxdemarzi.jpg"),
                title: "Max De Marzi's Heroku examples",
                path: "http://maxdemarzi.com/tag/heroku/"
            },
            {
                thumbnail: asset("img/neo4j/neo4j_cloud.png"),
                title: "Neo4j Heroku Challenge Applications",
                path: "http://blog.neo4j.org/2012/03/heroku-challengers-vote-now.html"
            },
            {
                thumbnail: "https://waza.heroku.com/images/layout/waza-bookmark.png",
                title: "Neo4j at Heroku Waza 2013",
                path: "http://waza.neo4j.org"
            },
            content.videos.james_ward_neo4j
        ]
    },
    spring: {
        path: "/develop/spring",
        title: "Spring Data Neo4j",
        introText: "Spring Data Neo4j was the founding project of Spring Data and integrates Neo4j very well with the Spring Framework.",
        actionText: "Go ahead",
        thumbnail: asset("img/languages/sdn.png"),
        featured: [content.videos.good_relationships, content.books.goodrelationships],
        related: [
            {
                title: "Spring Data Neo4j Resources",
                type: "article",
                introText: "<ul>\
                    <li><a href='http://spring.neo4j.org/notes' target='_blank'>Developer Notes</a></li>\
                    <li><a href='http://spring.neo4j.org/docs' target='_blank'>Reference documentation</a></li>\
                    <li><a href='http://spring.neo4j.org/issues' target='_blank'>Issue Tracker</a></li>\
                    <li><a href='http://spring.neo4j.org/discussions' target='_blank'>Spring Forum</a></li>\
                    <li><a href='http://spring.neo4j.org/build' target='_blank'>Build Status</a></li>\
                    <li><a href='http://spring.neo4j.org/api' target='_blank'>API JavaDoc</a></li>\
                    </ul>\
                    "
            },
            {
                thumbnail: "http://www.springsource.org/files/imagefield_thumbs/project/images/Project_Data.png",
                title: "Spring Data Neo4j page on springsoure.org",
                path: "http://springsource.org/spring-data/neo4j"
            }    ,
            {
                type: "link",
                thumbnail: "",
                title: "Importing Data for SDN using Batch-Inserter",
                author: "Tero Paananen",
                path: "http://code.paananen.fi/2012/04/05/neo4j-batchinserter-and-spring-data-for-neo4j/"
            }    ,
            {
                type: "link",
                thumbnail: "http://1.bp.blogspot.com/-1wuzYs5eO1A/T3UQSaOrTnI/AAAAAAAAATY/OKRFYhWP_EY/s320/scala_with_sdn.png",
                title: "Using Spring Data Neo4j from Scala",
                author: "Jan Machacek",
                path: "http://blog.neo4j.org/2012/03/spring-data-neo4j-from-scala.html"
            } ,
            {
                type: "link",
                thumbnail: "http://skillsmatter.com/custom/images/skills-matter_150x60_logo_2010.gif",
                title: "Connecting to Neo4j using Spring Data",
                introText: "Anirvan shows building a 'User Management System' using Spring Data Neo4j.",
                author: "Anirvan Chakraborty",
                path: "http://skillsmatter.com/podcast/java-jee/akka-scala-spring"
            } ,
            {
                type: "link",
                thumbnail: "http://skydingo.com/blog/wp-content/uploads/2011/12/abstract_graph-300x261.png",
                title: "Domain Modeling using SDN",
                introText: "Willie uses SDN to build the configuration management database, he details the modeling process and describes in details the thinking and the code written for that.",
                author: "Willie Wheeler",
                path: "http://www.javacodegeeks.com/2012/01/domain-modeling-with-spring-data-neo4j.html"
            },
            {
                type: "article",
                thumbnail: "http://springinpractice.com/wp-content/uploads/2008/08/sip-cover-small1.jpg",
                title: "Cypher query examples when using Spring Data Neo4j",
                introText: "This post shows how to perform various sample <a target='_blank' href='http://springinpractice.com/2012/03/06/neo4j-1-6-1-cypher-query-examples-when-using-spring-data-neo4j-2-0/'>Cypher queries</a> when using Neo4j and Spring Data Neo4j (SDN).\
                Here I show how to <a target='_blank' href='http://springinpractice.com/2011/12/28/initializing-lazy-loaded-collections-with-spring-data-neo4j/'>initialize lazy-loaded collections</a> with Spring Data Neo4j\
                ",
                author: "Willie Wheeler",
                path: ""
            },
            {
                type: "link",
                title: "Graph Analysis with Scala and Spring Data Neo4j",
                author: "Hendy Irawan",
                path: "http://scala-enterprise.blogspot.ca/2011/12/graph-analysis-with-scala-and-spring.html"
            } ,
            content.example_data.hubway
        ]

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
        thumbnail: asset("img/still/neo4j_code_2012.gif"),
//        type: "_contributors",
        related: ["maxdemarzi", "mhluongo", "ronge", "craigtaverner", "technige", "pablopareja", "espeed", "rhetonik"]
    },
    channels: {
        path: "/participate/channels",
        thumbnail: asset("img/logo/survey.png"),
        title: "How do you learn?",
        introText: "We are interested in which communication channels you, but also especially your co-workers, friends and customer developers use to learn more about technology and software development.",
        content: function (params) {
            return render.include("/participate/_channels", params);
        },
        featured: [],
        related: [],
        actionText: "Participate in survey"
    },
    videos: {
        type: "track",
        next: ["videos_webinar"],
        path: "/learn/videos",
        title: "Neo4j videos, webinars and screencasts",
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: ["videos_webinar", "videos_interview", "videos_graphconnect", "videos_other"],
        actionText: "Watch them"
    },
    videos_webinar: {
        type: "track",
        path: "/learn/videos_webinar",
        title: "Neo4j webinars",
        prev: ["videos"],
        next: ["videos_interview"],
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    videos_interview: {
        type: "track",
        prev: ["videos_webinar"],
        next: ["videos_graphconnect"],
        path: "/learn/videos_interview",
        title: "Neo4j interviews",
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    videos_graphconnect: {
        type: "track",
        prev: ["videos_interview"],
        next: ["videos_other"],
        path: "/learn/videos_graphconnect",
        title: "Neo4j GraphConnect recordings",
        thumbnail: asset("img/logo/graphconnect.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    videos_other: {
        type: "track",
        prev: ["videos_graphconnect"],
        next: ["videos"],
        path: "/learn/videos_other",
        title: "Neo4j related videos",
        thumbnail: asset("img/events/webinar.png"),
        introText: "Enjoy yourself watching these videos that were produced to entertain and educate about graph databases, Neo4j and Cypher",
        featured: [],
        related: [],
        actionText: "Watch them"
    },
    events: {
        path: "/events",
        title: "Neo4j related events",
        thumbnail: asset("img/logo/meetup.jpg"),
        introText: "Join the Neo4j community at one of our events! Learn about Neo4j at a conference, meet other Neo4j users at a meet up, or quickly get up to speed at a Neo4j tutorial near you.",
        content: "If you want to learn more about Neo4j nothing beats a hands on experience. Listen to our community members and driver authors, talk to our engineers or discuss with our customers.",
        badge: "<h3>GraphConnect<br/>Graph Conference</h3><a href='http://graphconnect.com' target='_blank'><img src='" + asset("img/logo/graphconnect.png") + "'></a> ",
        featured: [], // content.links.graphconnect,content.links.tutorials
        related: ["meetups", "webinars", "trainings", "conferences"],
        actionText: "Pick your event"
    },
    meetups: {
        path: "/participate/events/meetups",
        thumbnail: asset("img/logo/meetup.jpg"),
        title: "Worldwide Meetups",
        introText: "Neo4j meetups are worldwide. Make a connection or start a new group. <br/>Find the next meetup events in <a href='/participate/events/meetups_US'>the US</a>, <a href='/participate/events/meetups_EU'>Europe</a> or <a href='/participate/events/meetups_DE'>German</a>.",
        prev: ["events"],
        next: ["webinars"],
        actionText: "Find a meetup",
        featured: [
            {
                title: "Neo4j worldwide Meetups",
                thumbnail: asset("img/still/meetups_world.gif"),
                path: "http://neo4j.meetup.com"
            }
        ],
        related: []
    },
    webinars: {
        path: "/participate/events/webinars",
        title: "Webinars",
        prev: ["meetups", "events"],
        next: ["trainings"],
        thumbnail: asset("img/events/webinar.png"),
        introText: "Neo4j webinars give you hands on expert information either directly from Neo Technology or from our partners and users.",
        actionText: "Register for a webinar",
        featured: [
            "videos_webinar"
        ],
        related: []
    },
    trainings: {
        path: "/participate/events/trainings",
        title: "Trainings",
        thumbnail: asset("img/events/training.png"),
        img: "http://www.neotechnology.com/wp-content/uploads/2013/03/tutorials_0305313.png",
        prev: ["webinars", "events"],
        next: ["conferences"],
// TODO move to a related in content and use in participate
//        badge: "<h3>Stay Connected</h3>\
//                <img src='"+asset('img/neo4j/neo4j-news.gif')+"' style='float:left'>\
//            <div style='max-width: 20em'>\
//            Please keep me updated about Neo4j events, releases and articles.\
//            <iframe src='http://info.neotechnology.com/2012Newsletters_NewsletterSubscriptioniframe.html' onload='this.style.visibility = 'visible';' style='border:0;padding: 0;' width='180px' height='50px' frameborder='0' scrolling='no'></iframe>\
//            </div>",
        introText: "Get productive with Neo4j with a Graph Database Training. Meet an expert from Neo Technology or one of our partners for a full day training event in your city.\
        <br/>Find the next trainings in <a href='/participate/events/trainings_US'>the US</a>, <a href='/participate/events/trainings_EU'>Europe</a> or <a href='/participate/events/trainings_DE'>German</a>.\
        ",
        actionText: "Find trainings near you",
        featured: [
            {title: "Training Testimonial",
                introText: "We developed a hands-on, full day training course to teach the basics of using a graph database as Neo4j. After the training you should feel confident to start your own Neo4j based project.",
                type: "video",
                path: "http://player.vimeo.com/video/55473433",
                thumbnail: "http://secure-b.vimeocdn.com/ts/383/938/383938829_295.jpg",
                content: function (params) {
                    return render.include("/learn/training", params)
                }
            }
        ],
        related: []  //"partners","licensing"
    },
    trainings_US : { path: "/participate/events/trainings_US" },
    trainings_EU : { path: "/participate/events/trainings_EU" },
    trainings_DE : { path: "/participate/events/trainings_DE" },
    conferences_US : { path: "/participate/events/conferences_US" },
    conferences_EU : { path: "/participate/events/conferences_EU" },
    conferences_DE : { path: "/participate/events/conferences_DE" },
    meetups_US : { path: "/participate/events/meetups_US" },
    meetups_EU : { path: "/participate/events/meetups_EU" },
    meetups_DE : { path: "/participate/events/meetups_DE" },
    conferences: {
        path: "/participate/events/conferences",
        title: "Neo4j at Conferences",
        prev: ["trainings"],
        next: ["events"],
        introText: "There is a lot of interest in graph databases and Neo4j. here are some of the conferences where you can learn and " +
            "talk more about Neo4j. <br/>Find the next conference talks in <a href='/participate/events/conferences_US'>the US</a>, <a href='/participate/events/conferences_EU'>Europe</a> or <a href='/participate/events/conferences_DE'>German</a>.",
        thumbnail: asset("img/logo/graphconnect.png"),
        actionText: "Neo4j at conferences",
        featured: [content.links.graphconnect],
        related: []

    },
    q_and_a: {
        path: "/participate/q_and_a",
        title: "Ask Questions and Share Answers",
        introText: "Here you can find some of the resources that give you access to questions, answers and support around Neo4j related questions.",
        thumbnail: asset("img/logo/googlegroups.png"),
        featured: [content.links.stack_overflow],
        related: [
            content.links.mailing_list, content.links.github_neo4j,
            {
                title: "FAQ",
                introText: "There are FAQ's in several places:<ul>\
                    <li><a href='http://docs.neo4j.org/chunked/milestone/questions.html' target='_blank'>FAQ in the Manual</a></li>\
                    <li><a href='http://github.com/simpsonjulian/neo4j-faq/blob/master/README.md#neo4j-faq' target='_blank'>Julian Simpson</a></li>\
                    <li><a href='http://stackoverflow.com/questions/tagged/neo4j?sort=faq&pagesize=50' target='_blank'>frequent questions on StackOverflow</a></li>\
                    </ul>"
            }
        ]
    },
    neo4j: {
        path: "/learn/neo4j",
        title: "What is Neo4j?",
        introText: "Neo4j is a graph database, reliable and fast for managing and querying highly connected data.",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
        actionText: "Study this",
        featured: [
            content.articles.learn, video('Ian Robinson  - What is a Graph Database? What is Neo4j?')
        ],
        related: [content.videos.why_graphs,"graphdatabase", content.videos.graphdb101, content.links.neo4j_ref_card, "nosql","licensing", content.links.manual, "neo4j_server"]
    },
    reference_card: {
        path: "/learn/neo4j/reference_card",
        title: "Neo4j Reference Card",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w587.png",
        featured: [
            content.links.neo4j_ref_card
        ]
    },
    cypher: {
        type: "track",
        path: "/learn/cypher",
        title: "Learn Cypher - the Neo4j query language",
        thumbnail: asset("img/still/cypher_tutorial.gif"),
        //introText: "Hands on introduction to the Cypher Query Language",
        content: function (params) {
            return render.include("/cypher/cypher_console", params)
        },
        prev: ["cypher_track_start"],
        next: ["cypher_track_use"],
        actionText: "Learn it",
        featured: [
            { type: "include", title: "Intro", path: "/cypher/cypher_tutorial_intro" },
            { type: "include", title: "First Steps", path: "/cypher/cypher_tutorial_firststeps" },
            { type: "include", title: "Explore the graph", path: "/cypher/cypher_tutorial_explore" },
            { type: "include", title: "Update the graph", path: "/cypher/cypher_tutorial_update" },
            { type: "include", title: "Add some friends", path: "/cypher/cypher_tutorial_update_friends" },
            { type: "include", title: "Work with paths", path: "/cypher/cypher_tutorial_advanced_matches" },
            { type: "include", title: "Work with paths", path: "/cypher/cypher_tutorial_paths" },
            { type: "include", title: "Alternative Setups", path: "/cypher/cypher_tutorial_alternatives" }
        ],
        related: [
            "try", content.videos.cypher, content.links.manual_cypher, content.links.cypher_cheat_sheet
        ],
        badge: "<h3>Cypher Tutorial</h3>\
  <p>Cypher is a Graph Query Language</p>\
  <ul>\
    <li>it is human readable and expressive</li>\
    <li>MATCHes patterns in the graph</li>\
    <li>is about the <strong>what</strong> not how</li>\
  </ul>\
  <a id=\"detachConsole\" class=\"btn\">Open Console in new Window</a>"
    },
    ops: {
        path: "/develop/ops",
        title: "Operations",
        introText: "Here you can find some resources related to running Neo4j in different scenarios.",
        actionText: null,
        thumbnail: asset("img/still/secrets.png"),
        featured: [video('0607 - High Availability with Neo4j')],
        related: [content.videos.ha, content.videos.installing_neo4j, content.videos.production_secrets, video('0719 - Hardware Sizing with Neo4j'), "production"]
    },
    try: {
        path: "/learn/try",
        title: "Try querying different graphs with Cypher online",
        thumbnail: asset("img/still/cypher_tutorial.gif"),
        introText: "Try Cypher live on a dataset of your choice",
        actionText: "Try live",
        featured: [
            {
                title: "Cypher Console",
                type: "include",
                path: "/learn/try"
            }
        ],
        related: [content.links.cypher_cheat_sheet, content.links.manual_cypher, "cypher", content.links.wes_cypher
        ]
    },
    neo4j_server: {
        path: "/tracks/neo4j_server",
        thumbnail: asset("img/still/webadmin.png"),
        type: "page",
        title: "Neo4j Server",
        introText: "Neo4j comes as standalone server. Easy to download and start. It has an accessible Web-UI and a comprehensive REST-API. Neo4j-Server is also available at Heroku and for cloud setup. The drivers for non-JVM languages all work with the Neo4j-Server",
        featured: [content.videos.neo4j_webui],
        related: [
            "download",
            "heroku",
            {
                type: "link",
                introText: "The tabs of the Web-UI quickly described in the manual.",
                title: "Manual: Web-UI",
                path: "http://docs.neo4j.org/chunked/milestone/tools-webadmin.html"
            },
            {
                type: "link",
                introText: "Detailed description and usage of the Neo4j-Server REST-API, Cypher-Endpoint and REST-Batch-Insertion",
                title: "Manual: REST-API & Cypher",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api.html"
            },
            "drivers",
            // java example rest-api from manual
            // java-rest-binding
            // extensions, setup
            // remoting protocol
            "cloud",
            {
                type: "link",
                title: "Manual: Neo4j-Server",
                introText: "Components, installation and other aspects of the Neo4j Server documented in the manual.",
                path: "http://docs.neo4j.org/chunked/milestone/server.html"
            }
        ]
    },
    visualize: {
        path: "/develop/visualize",
        title: "Graph Visualization",
        thumbnail: asset("img/still/d3_network.png"),
        introText: "Storing a graph is one thing, but visualizing it creates awe and epiphanies.\
                Graph visualisations are a powerful tool to convey the content of a graph. They can highlight patterns, show clusters and connections.\
                There are different tools that you can use to visualize the content of a Neo4j graph database.",
        featured: [
            content.videos.neo4j_webui,
            video('GraphConnect 2012: Visualizing Graphs-Max De Marzi'),
            content.links.linkurious,
            content.links.keylines
        ],
        related: [
            {
                title: "Max De Marzi's Graph Visualization Blog",
                introText: "Max De Marzi presents different ways of visualizing graphs.",
                path: "http://maxdemarzi.com/tag/visualization-2/",
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/04/threed2.jpg?w=1160&h=336"
            },
            content.links.linkurious,
            content.links.keylines,
            content.links.d3,
            content.links.gephi,
            content.projects.neoclipse,
            {
                title: "VivaGraphJS on GitHub",
                path: "https://github.com/anvaka/VivaGraphJS",
                thumbnail: "http://www2.research.att.com/~yifanhu/GALLERY/GRAPHS/GIF_THUMBNAIL/Bai@bfwa398.gif",
                introText: "VivaGraphJS is a free graph drawing library for JavaScript."
                // todo yasiv.com some text, pictures etc
            },
            {
                title: "Three.js on GitHub",
                path: "https://github.com/mrdoob/three.js",
                thumbnail: "http://mrdoob.github.com/three.js/files/examples/webgl_buffergeometry_lines.png",
                introText: "The aim of the project is to create a lightweight 3D library with a very low level of complexity"
                // todo max article, neo4waza etc.
            },
            {
                title: "A collection of graph visualization options",
                path: "http://clipboard.com/mesirii/boards/viz",
                introText: "Michael Hunger has a nice collection on interesting projects in the visualisation space.",
                thumbnail: "http://d2g1zjdg4phkb4.cloudfront.net/IiVRi9fidoad7M4g5KflUrgx3Tg="
            },
            content.articles.jdbc
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
    },

    ruby: {
        path: "/develop/ruby",
        title: "Neo4j and Ruby",
        introText: "Neo4j and Ruby have been close friends for a long time. You can use Neo4j embedded via neo4j.rb (JRuby) or Neo4j server via neography and other drivers",
        thumbnail: asset("img/languages/ruby.png"),
        featured: [
            {
                type: "video",
                title: "Neo4j: Social Skills for Ruby Developers",
                src: "https://vimeo.com/36391029",
                author: "PrasannaPendse",
                content: "Ruby developers tend to be a lonely bunch. Slumped over a Mac in a dimly lit corner of a warehouse turned open-workspace. Unable to approach new people and introduce yourself. Unable to have a conversation that doesn't devolve into an opinionated debate. Social skills are limited to what you learned from Manga. Unfortunately, you can't use those in real life. Yet, one day, someone shows up and asks if you can build 'em a \"social site\" - you know, friends, activity feeds, jealousy. And privacy settings. \"Me?\", you think. \"You want ME to build you a SOCIAL site?\" Go ahead. Reach for that bottle of Neo4J. Its time to celebrate!",
                thumbnail: "http://b.vimeocdn.com/ps/104/778/1047786_75.jpg",
                img: "http://b.vimeocdn.com/ts/249/596/249596808_640.jpg"
            }
        ],
        related: [
            {
                type: "link",
                path: "http://maxdemarzi.com/tag/ruby/",
                title: "Ruby examples by Max de Marzi",
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/02/network.png?w=290&h=239",
                introText: "Examples on how to query, import, export and visualize data in Neo4j using Ruby from Max de Marzi"
            },
            content.drivers.neo4j_rb,
            content.drivers.neography,
            content.drivers.neoid,
            content.drivers.keymaker,
            "maxdemarzi",
            "ronge",
            content.apps.neosocial
        ]
    },
    dotnet: {
        path: "/develop/dotnet",
        title: "Neo4j and .net",
        introText: "Thanks to our partners at readify, the .net story for Neo4j is much better than everyone who sees the 4j suffix would imagine.",
        thumbnail: asset("img/languages/dotnet.png"),
        featured: [
            {
                type: "video",
                title: "Neo4j in a .NET world",
                src: "http://vimeo.com/43676873",
                thumbnail: asset("img/languages/dotnet.png"),
                author: "tathamoddie",
                introText: "<p>Tatham Oddie will be coming from Australia to present at the Neo4j User Group on Neo4j with .NET, and will cover:\
            <ol><li>the Neo4j client we have built for .NET SyntaxErrorl</li>\
            <li>hosting it all in Azure</li>\
            <li>why our queries were 200ms slower in the cloud, and how we fixed it</li></ol>\
            </p>\
            <p>Tatham will present a case study, explaining:\
            <ol><li>what our project is</li>\
            <li>why we chose a graph db</li>\
            <li>how we modelled it to start with</li>\
            <li>how our first attempts at modelling were wrong</li>\
            <li>what we're doing now</li>\
            </ol></p>"
            }
        ],
        related: [
            content.drivers.neo4jclient,
            {
                type: "link",
                title: "Neo4j Koans in .net using Neo4jClient",
                author: "Brian Woodward",
                path: "https://github.com/doowb/neo4j-dotnet-koans"
            },
            "tathamoddie" , // "romikoderbynew" ,
            {
                type: "link",
                title: "Neo4jD–.NET client for Neo4j Graph DB",
                author: "Sony Arouje",
                introText: "Last couple of days I was working on a small light weight .NET client for Neo4j.",
                path: "http://sonyarouje.com/2012/02/03/neo4jd-net-client-for-neo4j-graph-db/"
            },
            {
                type: "link",
                path: "http://blogs.microsoft.co.il/blogs/erix99/archive/2013/03/05/using-c-to-connect-with-neo4j-graph-database-part-1.aspx",
                title: "Using C# to connect to Neo4j Part 1",
                introText: "Ariel discusses the options connecting to Neo4j from C# using code examples for the different approaches.",
                author: "Ariel Rabinovich"
            },
            {
                type: "link",
                title: "Neo4j on Azure",
                path: "http://blog.neo4j.org/2011/02/announcing-neo4j-on-windows-azure.html"
            }
        ]},
    python: {
        path: "/develop/python",
        title: "Neo4j and Python",
        introText: "Python rocks and so does Python and Neo4j. There are many ways of interacting with Neo4j from Python",
        thumbnail: asset("img/languages/python.png"),
        featured: [
            {
                type: "video",
                title: "PyCon 2010:Persistent Graphs in Python with Neo4j",
                src: "http://blip.tv/play/g4VigczNTgI.x?p=1",
                author: "thobe",
                img: "http://a.images.blip.tv/Pycon-PyCon2010PersistentGraphsInPythonWithNeo4j140164-779.jpg"
            }
        ],
        related: [
            content.drivers.py2neo, content.drivers.neo4j_rest_client, content.drivers.bulbflow, content.drivers.neo4django, content.drivers.neo4j_python,
            "technige"
        ]
    },
    php: {
        path: "/develop/php",
        title: "Neo4j and Php",
        introText: "The easy web language can access Neo4j via the the Neo4j Server or Remote APIs",
        thumbnail: asset("img/languages/php.png"),
        featured: [video('1025 - Neo4j at Seth Godin\'s Squidoo')],
        related: [
            content.drivers.neo4jphp, content.apps.frostymug, "josh_adell",
            {
                type: "link",
                authors: ["josh_adell", "Christophe Willems"],
                path: "https://github.com/neoxygen",
                title: "NeoXygen: A collection of Neo4j related PHP project repositories"
            },
            {
                type: "link",
                authors: ["josh_adell"],
                path: "http://blog.everymansoftware.com/2011/11/development-setup-for-neo4j-and-php.html",
                title: "Development Setup for Neo4j and PHP"
            },
            {
                type: "link",
                path: "https://github.com/lphuberdeau/Neo4j-PHP-OGM",
                title: "Neo4j-PHP-OGM - A doctrine2 style library to access neo4j graphs",
                introText: "The Neo4j PHP Object Graph Mapper is an object management layer built on top of everyman/neo4jphp. It allows manipulation of data inside the Neo4j graph database through the REST connectors.\
                The library is also based on Doctrine\\Common and borrows significantly from the excellent Doctrine\\ORM design.",
                author: {name: "Louis-Philippe Huberdeau", twitter: "lphuberdeau"}
            },
            {
                type: "link",
                path: "https://github.com/kwattro/KwattroNeo4jOGMBundle",
                title: "A Object Graph Mapper for Symfony",
                introText: "This bundle lets you make use of the Neo4j Graph Database REST API inside your symfony applications.\
                It is momently a WIP as it relies on the Neo4j-PHP-OGM from lphuberdeau that gives integration with Doctrine Common.\
                My main focus is momently the User Management integrated with FOSUB and Neo4j, I will come on this bundle later.\
                Contributions for adding compiler to configuration and travis love would be really appreciated !",
                author: {name: "Christophe Willemsen", twitter: "ikwattro"}
            }
        ]
    },
    scala: {
        path: "/develop/scala",
        title: "Neo4j and Scala",
        introText: "Parts of Neo4j, esp. the Cypher query engine are written in Scala, the more we're happy about the great Scala support",
        thumbnail: asset("img/languages/scala.png"),
        featured: [
            {
                type: "link",
                title: "Neo4J with Scala Play! 2.0 on Heroku",
                introText: "In this new posts series I’ll try to gather all steps of a spike I did building a prototype using scala and a graph database. \
                        <strong>Play! Framework</strong> as the web framework, in its 2.0 version built from sources. \
                        <strong>Neo4j</strong> as the back end service for storing graph data. \
                        <strong>Scala</strong> for telling the computer what it should do...",
                img: "http://2.bp.blogspot.com/-UHeP3vJf3WA/T0wGNElHqTI/AAAAAAAAAwE/CnPvABqf-Pg/s1600/neo4j-and-play2.0.tiff",
                path: "http://ska-la.blogspot.de/2012/02/neo4j-with-scala-play-20-on-heroku-part.html",
                author: "Andy Petrella"
            }
        ],
        related: [
            content.drivers.anorm_cypher, content.drivers.scala,
            "wefreema",
            {
                type: "link",
                thumbnail: "http://www.cakesolutions.net/teamblogs/wp-content/themes/twentyten/images/cake_solutions_logo_green.png",
                path: "http://www.cakesolutions.net/teamblogs/2012/03/29/neo4j-spring-data-scala/",
                title: "Neo4j Spring Data & Scala",
                author: "Jan Machacek"
            },
            {
                type: "link",
                thumbnail: "http://www.cakesolutions.net/teamblogs/wp-content/themes/twentyten/images/cake_solutions_logo_green.png",
                path: "http://www.cakesolutions.net/teamblogs/2013/02/04/neo4j-and-spray-json/",
                title: "Neo4j and Spray JSON",
                author: "Jan Machacek"
            },
            {
                type: "link",
                path: "http://maxdemarzi.com/2013/02/14/neo4j-and-gatling-sitting-in-a-tree-performance-t-e-s-t-ing/",
                title: "Neo4j and Gatling sitting in a tree, performance testing",
                author: "maxdemarzi"
            },
            {
                type: "link",
                path: "http://ahalmeida.com/2011/09/06/how-neo4j-uses-scalas-parser-combinator-cyphers-internals-part-1/",
                title: "How Neo4j uses Scala’s Parser Combinator: Cypher’s internals",
                author: "adrianoalmeida7"
            },
            {
                type: "link",
                author: "fakod",
                path: "http://blog.fakod.eu/2010/10/04/neo4j-example-written-in-scala/",
                title: "Neo4j Example written in Scala"
            }
        ]
    },
    clojure: {
        path: "/develop/clojure",
        title: "Neo4j with Clojure",
        introText: "Clojure is a great language and fits very well with the graph concepts and lazy evaluation",
        thumbnail: asset("img/languages/clojure.png"),
        featured: [
            {
                type: "link",
                path: "http://clojureneo4j.info/articles/getting_started.html",
                img: "http://clojurewerkz.org/assets/images/clojurewerkz_logo_big.png",
                title: "Getting Started with Neocons and Neo4j",
                introText: "<p>This guide combines an overview of Neocons with a quick tutorial that helps you to get started with it. It should take about 15 minutes to read and study the provided code examples. This guide covers:\
                        <ul><li>Features of Neocons</li>\
                        <li>Clojure and Neo4J Server version requirements</li>\
                        <li>How to add Neocons dependency to your project</li>\
                        <li>A very brief introduction to graph databases and theory</li>\
                        <li>Basic operations (creating nodes and relationships, fetching nodes, using Cypher queries, traversing graph paths)</li>\
                        </ul></p>",
                author: "michaelklishin"
            }
        ],
        related: [
            content.drivers.neocons,
            {
                type: "link",
                path: "http://blog.opal.io/post/41701508265/loading-dbpedia-into-neo4j-with-clojure",
                title: "Loading DBPedia into Neo4j with Clojure",
                introText: "This article describes how to load over 82 million relationships from the DBPedia datasets into Neo4j with Clojure.",
                author: "opal_io"
            },
            "michaelklishin"
        ]
    },
    beer: {
        path: "/misc/beer",
        thumbnail: "http://www.travelandbeer.com/wp-content/uploads/2011/05/belgian-beers.jpg",
        title: "Everyone loves beer.",
        introText: "Beer is at the core of software development, a good part of Neo4j runs on it.",
        content: "<p>There is a high density of beer-loving geeks in the neo4j community. Below are some of the projects and resources tht have been developed with or around Neo4j.</p>\
        <blockquote>A traditional relational database may tell you the average age of everyone in this pub, but a graph database will tell you who is most likely to buy you a beer. <i>Andreas Kollegger</i></blockquote>\
        <p>Of course, we are sponsoring beer for the <a href='/participate/meetups'>Neo4j Meetups</a>, so drop by!</p>",
        featured: ["rik_belgian_beers1"],
        related: ["popchartlabs_beer", "trycypher_beer", "beer_rik_screencast", "frostymug"],
        actionText: "Grab a beer"

    },
    import: {
        path: "/develop/import",
        title: "Importing data into Neo4j",
        introText: "The first thing you need to get started is to import data from various sources into Neo4j. Fortunately there are a number of ways to do that.",
        content: "If you have your data in a relational database, spreadsheet or somewhere else, you want to get in into the graph database. " +
            "Although you can point and click in the <a href='/develop/server'>Web-UI</a> or script a bit in the <a href='/develop/shell'>shell</a>, " +
            "the easiest way by far is to generate <a href='/tracks/cypher'>Cypher</a> statements and import them via the shell " +
            "(<code>cat insert.cql | neo4j-shell -path /path/to/db</code>), use the <a href='/develop/tools/jdbc'>JDBC-Driver</a> " +
            "or pump them through the Batch-REST-API.<br/>You can also import CSV files with a tool or <a href='/develop/tools/gephi'>Gephi</a> " +
            "or write a custom <a href='/develop/import/batch-insert'>Batch-Inserter</a> in a JVM language to do high performance imports.",
        featured: [
            {
                type: "video",
                title: "ETL into Neo4j",
                author: "maxdemarzi",
                introText: "In this presentation, Max explains several ways of importing data into Neo4j",
                src: "http://de.slideshare.net/slideshow/embed_code/13143642",
                thumbnail: "http://image.slidesharecdn.com/etlintoneo4j-120531001746-phpapp02/95/slide-1-728.jpg?1338442853"
            }
        ],
        related: [
            {
                type: "link",
                title: "Importing data into Neo4j - the spreadsheet way",
                path: "http://blog.neo4j.org/2013/03/importing-data-into-neo4j-spreadsheet.html",
                author: "rvanbruggen",
                thumbnail: "https://lh3.googleusercontent.com/hkoYal89xuVDMvXY8BuE7dN0IM5svowOJr9cURxT3vN_ThzxSambyj1DE-6fQlSIoEcqw2IUgg5xj8c-CJv8dHgKovjA1hMjljsMgImH963u0LrDxP07AzIRow",
                introText: "A spreadsheet and some formulas building cypher queries are one of the simplest ways of getting data into Neo4j. If even a sales-guy like Rik can do it, you can too"
            },
            {
                type: "link",
                title: "CSV-Batch-Importer",
                path: "http://maxdemarzi.com/2012/02/28/batch-importer-part-1/",
                author: ["maxdemarzi", "mesirii"],
                thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2012/02/matrix.jpg?w=200",
                introText: "Michael wrote a <a href='https://github.com/jexp/batch-import'>batch importer</a> to load csv data quickly. I’m going to walk you through getting your data out of tables and into nodes and edges."
            },
            {
                type: "link",
                title: "REST-Batch-API",
                path: "http://docs.neo4j.org/chunked/milestone/rest-api-batch-ops.html",
                author: ["nawroth", "jakewins", "mesirii"],
                thumbnail: "",
                introText: "Use the REST-Batch API with cypher statements to insert data into Neo4j remotely and quickly. Make sure to use parameters in the cypher statements",
                content: "TODO syntax example"
            },
            "jdbc",
            "geoff"
        ]
    },
    geoff: {
        title: "Geoff",
        path: "/develop/python/geoff",
        author: ["technige"],
        thumbnail: asset("img/languages/py2neo.png"),
        introText: "Geoff is a declarative notation for representing graph data within concise human-readable text, designed specifically with Neo4j in mind. ",
        content: "The format has been built to allow independent subgraphs to be represented outside of a graph database environment in such a way that they may be stored, transmitted and imported easily and efficiently. The basic elements which make up the Geoff format - subgraphs, rules and descriptors - are well defined but there exist several container representations which serve different purposes; commonly, either delimited text or a form of JSON is used.",
        featured: [
            {
                title: "Hello, Subgraph - Alice & Bob",
                type: "article",
                path: "http://nigelsmall.com/geoff/hello-subgraph",
                introText: "Subgraphs are the primary structures used within Geoff to hold collections of data. These are simply standalone pieces of graph data consisting of nodes and relationships. The following diagram shows a subgraph which illustrates a relationship between the ubiquitous Alice and Bob",
                content: "<pre>\
(A) {\"name\": \"Alice\"}\n\
(B) {\"name\": \"Bob\"}\n\
(A)-[:KNOWS]->(B)\n\
                    </pre>"
            }
        ],
        related: [
            {
                type: "link",
                introText: "Geoff is a declarative notation for representing graph data within concise human-readable text, designed specifically with Neo4j in mind. The format has been built to allow independent subgraphs to be represented outside of a graph database environment in such a way that they may be stored, transmitted and imported easily and efficiently.",
                path: "http://nigelsmall.com/geoff",
                title: "Geoff Documentation"
            },
            {
                type: "link",
                introText: "XML data can easily be converted into a graph. Simply load paste the XML data into the left-hand side, convert into both Geoff and a Cypher CREATE statement, then view the results in the Neo4j console.",
                path: "http://nigelsmall.com/xml2graph",
                title: "XML to Graph converter"
            }
        ]
    },
    shell: {
        path: "/develop/shell",
        title: "The awesome Neo4j Shell",
        introText: "Neo4j's shell allows you to issue Cypher statements, export and import subgraphs navigate and update the graph using a set of commands that remind of a unix shell. It is available both on the command line and in the Neo4j-Server web-ui.",
        content: "",
        featured: [],
        related: [
        {
            type:"link",
            author: "duanenickull",
            title:"Duane explains the Neo4j-Shell",
            path: "http://technoracle.blogspot.de/2012/04/neo4j-installing-running-and-shell.html",
            introText: "In a detailed walkthrough Duane shows how to download and install Neo4j and explains how to use the shell to create nodes and relationships"
        },
        {
            type:"link",
            title:"Neo4j-Shell in the Manual",
            path: "http://docs.neo4j.org/chunked/milestone/shell.html",
            introText: "The manual describes how to use the shell, lists the individual commands and also explains how to extend it with your own commands."
        },
        {
            type:"link",
            title:"A sample shell session",
            introText: "This session shows how to navigate in the shell, set properties and create nodes and relationships.",
            path: "http://docs.neo4j.org/chunked/milestone/shell-sample-session.html"
        }
        ]
    },
    import_shell: {
        path: "/develop/import/shell",
        title: "Import and export with the Neo4j-Shell",
        introText: "",
        content: "",
        featured: [],
        related: []
    },
    "batch-insert": {
        path: "/develop/import/batch-insert",
        title: "High performance imports with the non-transactional Batch-Inserter API's",
        introText: "",
        content: "",
        featured: [],
        related: []
    },
    jdbc: {
        path: "/develop/tools/jdbc",
        title: "Easy integration in Java applications and tools with the JDBC driver",
        author: ["rickardoberg", "mesirii"],
        introText: "",
        content: "",
        featured: [content.projects.jdbc],
        related: []
    },

    graphistas_map: {
        path: "/participate/graphistas_map",
        thumbnail: asset("img/still/graphistas_map.png"),
        title: "The Graphistas map - add yourself!",
        author: ["mesirii"],
        introText: '<p>Go to the <a target="_blank" href="https://maps.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0&amp;msid=215787240736307886514.00049e70e573cbd8a91e5&amp;t=m&amp;ll=24.527135,-20.039062&amp;spn=123.963155,225&amp;z=2&amp;source=embed" style="text-align:left">map edit page</a>. Then zoom to your place, hit the red "Edit" button and then place a landmark, add your info and a icon from the google selection. Click the "Done", when you\'re satisfied.</p>',
        content: '<iframe width="100%" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0&amp;msid=215787240736307886514.00049e70e573cbd8a91e5&amp;t=m&amp;ll=24.527135,-20.039062&amp;spn=123.963155,225&amp;z=2&amp;output=embed"></iframe>',
        featured: [],
        related: [],
        actionText : "Add yourself"
    }
}