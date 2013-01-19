exports.chapters = {

    // learn

    graph_concepts : {
        heading : "Graph Concepts",
        featured : {
            heading : "Graph DB 101",
            type : "video",
            thumbnail : "/assets/img/still/graphdb-intro.png",
            intro : "A pleasant stroll through general concepts, and Neo4j particulars.",
            src : "http://player.vimeo.com/video/46886385"
        },
        related : [
            {
                heading : "Property Graph",
                path : "/learn/graphdatabase",
                intro : "Neo4j stores data in a Property Graph: nodes + relationships, with properties on both. Leave the schema behind and start focusing on how your data is connected.",
                actionText : "Learn more &raquo;"                
            },
            {
                heading : "NoSQL",
                path : "/learn/nosql",
                intro : "You know relational, now consider relationships. Relate the graph model to relational, documents, and other NoSQL stores.",
                actionText : "Not only SQL &raquo;"                
            }
        ]
    },
    neo4j_intro : {
        heading : "Neo4j Introduction",
        featured : {
            heading : "Why Graphs",
            type : "video",
            thumbnail : "/assets/img/still/emil-explains.jpg",
            intro : "Emil Eifrem explains the secret behind websites like Twitter, Yelp and Facebook.",
            src : "http://player.vimeo.com/video/56040747"
        },
        related : [
            {
                heading : "Neo4j Intro",
                path : "/learn/neo4j",
                intro : "Our versioned online manual start with a comprehensive tutorial section, complemented with detailed a reference and live interaction.",
                actionText : "Study this &raquo;"                
            },
            {
                heading : "Cypher Tutorial",
                path : "/learn/cypher",
                intro : "Hands on introduction to the Cypher Query Language",
                actionText : "Learn it &raquo;"                
            }
        ]
    },
    production : {
        heading : "Going into Production",
        featured : {
            heading : "Production Secrets",
            type : "video",
            thumbnail : "/assets/img/still/secrets.png",
            intro : "Maybe a day or two before you get featured on Techcrunch, make sure your application is fully production-ready.",
            src : "http://player.vimeo.com/video/49485027"
        },
        related : [
            {
                heading : "Licensing Guide",
                path : "/learn/licensing",
                intro : "Neo4's enterprise editions are provided by Neo Technology for use in commercial, non open-source deployments.",
                actionText : "Read more &raquo;"                
            },
            {
                heading : "Partner Graph",
                path : "http://www.neotechnology.com/partners/",
                intro : "Hands on introduction to the Cypher Query Language",
                actionText : "Read more &raquo;"                
            }
        ]
    },

    // develop

    install : {
        heading : "Get started with Neo4j",
        featured : {
            heading : "Installing Neo4j",
            type : "video",
            intro : "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
            src : "http://player.vimeo.com/video/53838744"
        },
        related : [
            {
                heading : "Install Neo4j",
                path : "/install",
                intro : "Install Neo4j on your machine and get started immediately",
                actionText : "Install now &raquo;"
            },
            {
                heading : "Language Drivers",
                path : "/develop/drivers",
                intro : "Drivers for Neo4j exist in most programming languages.",
                actionText : "Get yours &raquo;"
            },
            {
                heading : "Cypher Tutorial",
                path : "/learn/cypher",
                intro : "Hands on introduction to the Cypher Query Language",
                actionText : "Learn it &raquo;"
            },
            {
                heading : "Example Datasets",
                path : "/develop/example_data",
                intro : "Use on of our example datasets for some initial graph data.",
                actionText : "Check them out &raquo;"
            }
        ]
    },
    tools : {
        heading : "Tools and Resources",
        featured : {
            heading : "Query with Cypher",
            type : "video",
            intro : "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
            src : "http://player.vimeo.com/video/50389825"
        },
        related : [
            {
                heading : "Demo Console",
                path : "/learn/try",
                intro : "The Neo4j Demo Console allows you to interactively try our Cypher Query Language with different datasets",
                actionText : "Try live &raquo;"
            },
            {
                heading : "Visualization",
                path : "/develop/visualize",
                intro : "Storing a graph is one thing, but visualizing it creates awe and epiphanies.",
                actionText : "Learn how &raquo;"
            },
            {
                heading : "Apps Gallery",
                path : "/learn/apps",
                intro : "A selection of example apps lets you explore the possibilities that a graph database offers.",
                actionText : "Check them out"
            }
        ]
    },
    cloud : {
        heading : "Neo4j in the Cloud",
        featured : {
            heading : "James Ward on Neo4j",
            type : "video",
            intro : "James Ward shows how to build and deploy a Neo4j based app on heroku.",
            src : "http://player.vimeo.com/video/53221343"
        },
        related : [
            {
                heading : "Heroku Addon",
                path : "/develop/heroku",
                intro : "Neo4j is available on Heroku in a public 'try' plan.",
                actionText : "Do it now &raquo;"
            }
        ]
    },
    sdn : {
        heading : "Spring Data Neo4j",
        featured : {
            heading : "Good Relationships",
            type : "video",
            intro : "Michael Hunger introduces <a target='_blank' href='http://www.infoq.com/minibooks/good-relationships-spring-data'>Good Relationships</a>, the SDN book.",
            src : "http://www.youtube.com/embed/heC-8Pq2exQ"
        },
        related : [
            {
                heading : "POJO to Graph",
                path : "/develop/spring",
                intro : "Simply annotate your Java classes, configure your Spring application, then enjoy the power of object graph mapping.",
                actionText : "Go ahead &raquo;"
            },
            {
                heading : "Example App",
                path : "http://blog.neo4j.org/2012/10/using-spring-data-neo4j-for-hubway-data.html",
                intro : "Use Spring Data Neo4j to model and import the <a target='_blank' href='http://hubwaydatachallenge.org/trip-history-data/''>Hubway Challenge</a> dataset, for advanced querying and visualization.",
                actionText : "Follow along &raquo;"
            }
        ]
    },
    ops : {
        heading : "Operations",
        featured : {
            heading : "High Availability",
            type : "video",
            intro : "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
            src : "http://player.vimeo.com/video/51906007"
        },
        related : [
            {
                heading : "High Availability",
                path : "http://docs.neo4j.org/chunked/stable/ha-how.html",
                intro : "Master-slave replication in a cluster provides your application with read-scaling and fault tolerance.",
                actionText : "Read more &raquo;"
            },
            {
                heading : "Backups",
                path : "http://docs.neo4j.org/chunked/stable/operations-backup.html",
                intro : "A fundamental operation for any application: back up early, back up often.",
                actionText : "Read more &raquo;"
            },
            {
                heading : "Hardware Sizing",
                path : "",
                intro : "<img class='thumbnail' src='/assets/img/still/hardware-sizing.png' alt='Click to View' data-src='http://player.vimeo.com/video/46049647'><br><i class='icon icon-facetime-video'></i>  Roll up your sleeves and pop the hood, let&#39;s tune this engine.",
                actionText : ""
            }
        ]
    }
};
