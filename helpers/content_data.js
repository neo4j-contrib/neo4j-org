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
    tracks : {
        heading : "Learn Tracks",
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
            thumbnail : "/assets/img/still/install.gif",
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
            thumbnail : "/assets/img/still/cypher.png",
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
            thumbnail : "/assets/img/still/jamesward.jpg",
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
            thumbnail : "/assets/img/still/sdn-intro.png",
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
            thumbnail : "/assets/img/still/ha_video.gif",
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
    },

    // participate

    questions : {
        heading : "Ask Questions and Share Answers",
        related : [
            {
                heading : "Stack Overflow",
                path : "http://stackoverflow.com/questions/tagged/neo4j",
                img : "/assets/img/logo/stackoverflow.png",
                intro : "Find answers or reach to fellow developers with questions.",
                actionText : "Ask Neo4j questions &raquo;"
            },
            {
                heading : "Neo4j Google Group",
                path : "http://groups.google.com/group/neo4j",
                img : "/assets/img/logo/googlegroups.png",
                intro : "Find answers or reach to fellow developers with questions.",
                actionText : "Join now &raquo;"
            },
            {
                heading : "GitHub Issues",
                path : "http://github.com/neo4j/neo4j/issues",
                img : "/assets/img/logo/github.png",
                intro : "Encountered an issue with Neo4j? Submit it here.",
                actionText : "Report issue &raquo;"
            }
        ]
    },
    meet : {
        heading : "Meet & Learn",
        related : [
            {
                heading : "Meetups / User Groups",
                path : "http://neo4j.meetup.com",
                img : "/assets/img/logo/meetup.jpg",
                intro : "Find answers or reach to fellow developers with questions.",
                actionText : "Ask Neo4j questions &raquo;"
            },
            {
                heading : "Webinars and Events",
                path : "learn/events",
                img : "/assets/img/logo/webinar.png",
                intro : "Learn from the Neo4j community, watch our webinars or see us at special events.",
                actionText : "Event Calendar &raquo;"
            },
            {
                heading : "GraphConnect",
                path : "http://graphconnect.com",
                img : "/assets/img/logo/github.png",
                intro : "GraphConnect 2012 conference has been a blast. Keep connected for updates on 2013 events.",
                actionText : "Attend GraphConnect &raquo;"
            },
            {
                heading : "Graphistas World Map",
                path : "/participate/contributors#map",
                img : "/assets/img/logo/graphmap.png",
                intro : "Add yourself to the graphistas world map and let it become a smaller place.",
                actionText : "Add yourself &raquo;"
            }
        ]
    },
    contribute : {
        heading : "Contribute",
        related : [
            {
                heading : "GitHub",
                path : "http://github.com/neo4j/neo4j",
                img : "/assets/img/logo/github.png",
                intro : "As an open-source project, Neo4j is hosted on GitHub. Check out the code and please contribute improvements as pull requests.",
                actionText : "View the Source  &raquo;"
            },
            {
                heading : "Contributors",
                path : "/participate/contributors",
                img : "/assets/img/logo/stackoverflow.png",
                intro : "We&#39;re very proud to have such an engaged group of contributors to Neo4j and its ecosystem.",
                actionText : "See our contributors &raquo;"
            },
            {
                heading : "Contribute to Neo4j.org",
                path : "http://github.com/neo4j-contrib/neo4j-org",
                img : "https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png",
                intro : "Feel free to fork the code for the neo4j.org site on github, to correct, update or extend the information and issue a pull request.",
                actionText : "Fork Me &raquo;"
            },
            {
                heading : "Contribution Guidelines",
                path : "http://docs.neo4j.org/chunked/stable/community-contributing.html",
                img : "",
                intro : "If you want to contribute, start here.",
                actionText : "Contribution Guidelines &raquo;"
            },
        ]
    }
};



