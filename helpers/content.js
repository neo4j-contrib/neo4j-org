var render = require('./render');
var asset = require("../helpers/utils.js").asset;

exports.content = {
    action: {
         signup:            {
//               "title":"Don't miss important information.",
             "title":"Sign up for Neo4j",
             introText: "For the best developer experience, subscribe and stay informed about events,<br/>\
               releases and technical articles on graphs and development with Neo4j.\
               <iframe class='newsletter' style='visibility:visible;margin-left:-10px;width:15em;' src='' style='border:0;padding: 5;' width='300px' height='75px' frameborder='0' scrolling='no'></iframe>",
             thumbnail: ""
         }
    },
    install: {
        releases: {
            type: "include",
            title: "Neo4j Releases",
            path: "/partials/version/_main"
        },
        stable: {
            type: "version",
            title: "Neo4j Stable Release 2.1.1",
            version: "2.1.1",
            stability: "stable",
            key: "stable",
            date: "May 29, 2014",
            introText: "ETL CSV Import, Dense Nodes",
            path: "http://neo4j.com/blog/neo4j-2-1-graph-etl/",
            thumbnail: asset("img/still/install.gif"),
            src: "http://player.vimeo.com/video/53838744"
        },
        download_button: {
            type: "include",
            path: "partials/version/_download_button"
        },
        snapshot: {
            type: "version",
            title: "Snapshot Version 2.1-SNAPSHOT",
            stability: "snapshot",
            key: "snapshot",
            version: "2.1-SNAPSHOT",
            date: "2013",
            introText: "Unstable Snapshot, for resolution issue verification"
        },
        "milestone": {
            type: "version",
            title: "Neo4j Stable Release 2.1.1",
            version: "2.1.1",
            key: "milestone",
            stability: "milestone",
            date: "May 29, 2014",
            introText: "ETL CSV Import, Dense Nodes",
            path: "http://neo4j.com/blog/neo4j-2-1-graph-etl/",
            thumbnail: asset("img/still/install.gif"),
            src: "http://player.vimeo.com/video/53838744"
        },
        "2_0_3": {
            type: "version",
            title: "Neo4j Stable Release 2.0.3",
            version: "2.0.3",
            stability: "stable",
            date: "April 30, 2014",
            introText: "General Availability",
            path: "http://neo4j.com/blog/neo4j-2-0-ga-graphs-for-everyone/",
            thumbnail: asset("img/still/install.gif"),
            src: "http://player.vimeo.com/video/53838744"
        },
        "1_9_7": {
            type: "version",
            title: "Neo4j Stable Release 1.9.7",
            version: "1.9.7",
            stability: "stable",
            date: "Apr 11, 2014",
            introText: "General Availability",
            path: "http://blog.neo4j.org/2013/09/installer-check-desktop-launcher-check.html",
            thumbnail: asset("img/still/install.gif"),
            src: "http://player.vimeo.com/video/53838744"
        },
        "1_8_3": {
            type: "version",
            title: "Neo4j Stable Release 1.8.3",
            version: "1.8.3",
            stability: "stable",
            date: "June 27, 2013",
            introText: "General Availability",
            path: "http://blog.neo4j.org/2012/12/neo4j-1-8-1-release-stability-and-cypher-performance.html",
            thumbnail: asset("img/still/install.gif"),
            src: "http://player.vimeo.com/video/53838744"
        },
        "1_7_2": {
            type: "version",
            title: "Neo4j Stable Release 1.7.2",
            version: "1.7.2",
            stability: "stable",
            date: "May 28, 2012",
            path: "http://blog.neo4j.org/2012/04/neo4j-17-ga-bastutrask-bank-released.html"
        },
        "1_6_3": {
            type: "version",
            stability: "stable",
            title: "Neo4j Stable Release 1.6.3",
            version: "1.6.3",
            date: "May 28, 2012",
            path: "http://blog.neo4j.org/2012/01/released-neo4j-16-ga-jorn-kniv.html"
        },
        "1_5_3": {
            type: "version",
            stability: "stable",
            title: "Neo4j Stable Release 1.5.3",
            version: "1.5.3",
            date: "May 24, 2012",
            path: "http://blog.neo4j.org/2011/10/announcing-neo4j-boden-bord-15-ga.html"
        },
        upgrading: {
            type: "link",
            title: "Upgrading Docs",
            introText: "Upgrading from a previous version? Make sure to read the upgrading notes",
            path: "http://docs.neo4j.org/chunked/milestone/deployment-upgrading.html"
        },
        maven: {
            type: "article",
            title: "Maven Dependency",
            content: function (params) {
                return render.include("download/_embedded_dependency", params);
            }
        },
        windows: {
            type: "video",
            title: "Windows 8 Installation",
            author: "peterneubauer",
            introText: "Installing Neo4j on Windows 8 requires a few steps which are outlined in this video.",
            src: "http://player.vimeo.com/video/63158030",
            thumbnail: asset("img/still/neo4j_install_windows8.gif")
        },
        windows7: {
            type: "video",
            title: "Windows 7 Installation",
            author: "rootsical",
            introText: "Installing Neo4j on Windows 7 requires a few steps which are outlined in this video.",
            src: "http://www.youtube.com/embed/KreTJA8vjnI?rel=0&autoplay=1",
            thumbnail: asset("img/still/install_neo4j_windows7.gif")
        },
        debian: {
            type: "video",
            title: "Debian - stable",
            introText: "We provide Debian packages in a repository.\
                We <em>sign</em> the packages so you know you're getting the genuine Neo4j packages.",
            src: "http://player.vimeo.com/video/57939261",
            thumbnail: asset("img/still/debian_install.png"),
            content: function (params) {
                return render.include("download/debian", params)
            }
        },
        puppet: {
            type: "article",
            title: "Install with Puppet",
            introText: "Setup <strong>only</strong> Neo4j using Puppet <a href='https://github.com/neo4j-contrib/neo4j-puppet/blob/master/README.md' target='_blank'>(source)</a>",
            thumbnail: "http://www.lennu.net/images/blog/2012-11-01/1/1.png",
            content: function (params) {
                return render.render(
                    "<blockquote class='external markdown'>\
                                <%-: content.puppet | md %>\
                            </blockquote>\
                ", params)
            }
        },
        homebrew: {
            type: "article",
            title: "MacOS X - Homebrew - stable",
            actionText: "Brew It",
            introText: "Installing the stable version of Neo4j on a Mac with homebrew is really simple.\
            If you have <a href='http://mxcl.github.com/homebrew/' target='_blank'>homebrew</a> installed, adding Neo4j to your Mac is simple a:<br/>\
                <pre>brew update\nbrew install neo4j\nneo4j start</pre>"
        },
        chef: {
            type: "video",
            title: "Install Neo4j-server with Chef",
            author: {"twitter": "mulpat", "name": "Patrick Mulder", "github": "https://github.com/mulderp"},
            actionText: "Cook it",
            introText: "Patrick Mulder shows how to setup an automatic installation of <a href='http://thinkingonthinking.com/An-experiment-with-Vagrant-and-Neo4J/' target='_blank'>Neo4j-Server with Chef and Vagrant</a> and hosts the <a href='https://github.com/mulderp/chef-neo4j' target='_blank'>cookbook on github</a>",
            src: "http://player.vimeo.com/video/55085049",
            path: "http://thinkingonthinking.com/An-experiment-with-Vagrant-and-Neo4J/"
        },
        subscriptions: {
            type: "article",
            title: "Neo4j Commercial Subscriptions",
            introText: "Are you building a business-critical application? We'd love to support you in being successful.",
            src: asset("img/still/neo4j_bundles.png"),
            url: "http://www.neotechnology.com/price-list/",
            path: "http://www.neotechnology.com/price-list/",
            actionText: "Neo4j Enterprise Subscriptions",
            content: "<p>\
                            Neo4j Enterprise Edition is designed for large-scale high-availability deployments. In production since 2003, today it powers applications globally for \
                            <a href='http://www.neotechnology.com/customers'>hundreds of commercial customers</a>, Neo4j can also make the difference for your company.</p>\
                            <p>By applying the powerful property graph model and fast graph search to your data you can make well informed and faster decisions \
                            in an increasingly demanding market.</p>\
                            <p><strong>Neo4j, Enterprise Edition</strong> is an Open-Source, <a href='http://www.neotechnology.com/neo4j-scales-for-the-enterprise/'>high-performance</a> graph database with fully transactional operations. \
                            It offers production capabilities, like a High Performance Cache, Live Backup, High Availability Clustering, and Advanced Monitoring\
                            </p>\
                            <p>The Enterprise edition is available in different <a href='http://www.neotechnology.com/price-list/'>subscriptions tailored to your needs</a>. \
                                From a free personal subscription for individual usage, a startup and small business package to a comprehensive offering for medium and large enterprises.</p>"
        }
    },
    docs: {
        domain_modeling: {
            type: "link",
            title: "Docs: Data Modeling Modeling Examples",
            author: ["nawroth", "peterneubauer"],
            introText: "The following chapters contain simplified examples of how different domains can be modeled using Neo4j. The aim is not to give full examples, but to suggest possible ways to think using nodes, relationships, graph patterns and data locality in traversals.",
            path: "http://docs.neo4j.org/chunked/stable/data-modeling-examples.html"
        }
    },
    videos: {
        high_availability : {
            title: "High Availability with Neo4j",
            type: "video",
            author: "Andreas Kollegger",
            introText: "Learn about Neo4j High Availability (HA). This webinar will explain the benefits, use cases, and basic operational procedures for: Why organizations choose Neo4j HA; Scaling performance to meet demand; Deployment scenarios, best practices; How to prepare for Disaster Recovery",
            thumbnail: "https://secure-b.vimeocdn.com/ts/304/073/304073737_295.jpg",
            src: "https://player.vimeo.com/video/43797268"
        },
        ian_graphdb_neo4j: {
            title: "What is a Graph Database? What is Neo4j?",
            type: "video",
            author: "Ian Robinson",
            introText: "Ian Robinson explains what excites him about graph databases and Neo4j. He discusses the power of the graph data model and how its expressiveness supersedes the relational model. He shares some insights in getting started with modeling and using graphs in your application development.",
//            thumbnail: "http://b.vimeocdn.com/ts/388/074/388074752_640.jpg",
            thumbnail: asset("img/still/what_isa_graphdb.jpg"),
            src: "https://player.vimeo.com/video/56043918#t=0m19s"
        },
        what_is_neo4j: {
            key: "what_is_neo4j",
            title: "What is a Graph Database? What is Neo4j?",
            type: "video",
            author: "Andreas Kollegger",
            introText: "Andreas Kollegger explains what kinds of questions you can answer with a graph database. It's not only the big sites that have graph questions but EVERYONE! Neo4j is the tool that can help YOU to solve the ones that are important to you. Learn how with our <a href='/learn/online_course'>online training</a>.",
//            thumbnail: "http://b.vimeocdn.com/ts/388/074/388074752_640.jpg",
            thumbnail: asset("img/still/what_isa_graphdb.jpg"),
            src: "https://player.vimeo.com/video/77866447"
        },
        browser_styling: {
            key: "browser_styling",
            title: "Styling your Neo4j-Browser Visualization",
            type: "video",
            author: "Michael Hunger",
            introText: "Michael shows how to style Nodes and Relationships in the Neo4j's Browser visualization, setting colors, sizes and titles. \
            He discusses the Graph-Style-Sheet (GRASS) and how you can download, update and reset the styling information.",
            thumbnail: "https://i.vimeocdn.com/video/477496068_295x166.jpg",
            img: "https://i.vimeocdn.com/video/477496068_590x232.jpg",
            src: "https://player.vimeo.com/video/97204829"
        },
        power_modeling: {
            title: "Modelling with Graphs",
            type: "video",
            author: "Alistair Jones",
            introText: "Modelling data as graphs is quite different from modelling data under with relational databases. In this talk we'll cover modelling business domains using graphs.",
            thumbnail: "http://www.neotechnology.com/wp-content/uploads/2012/05/Screen-Shot-2012-05-16-at-2.38.21-PM-300x192.png",
            src: "http://www.youtube.com/embed/XzDNw2y0QEM"
        },
        sdn_cineasts: {
            title: "Running SDN Tutorial Cineasts",
            type: "video",
            introText: "Downloading and running Cineasts the Spring Data Neo4j Tutorial Web Application",
            thumbnail: asset("img/spring/cineasts.png"),
            src: "http://www.youtube.com/embed/DAJvvchL_oE?rel=0&autoplay=1"
        },
        azure_channel9: {
            title: "Neo4j, the Open Source Java graph database, and Windows Azure",
            type: "video",
            introText: "This segment we talk about Neo4j, the open source graph database, on Windows Azure. We discuss the project, getting up on the cloud with Windows Azure and what's coming.",
            thumbnail: asset("img/still/neo4j_azure_channel9.gif"),
            src: "http://channel9.msdn.com/Blogs/Interoperability/Neo4j-the-Open-Source-Java-graph-database-and-Windows-Azure/player"
        },
        neo4j_recommendation_engine: {
            title: "Recommendation Engine with Neo4j 2.0",
            type: "video",
            introText: "In just 2 minutes, we show you how to build a recommendation engine using Neo4j-Browser 2.0 and the powerful graph query language Cypher.",
            thumbnail: asset("img/still/browser_get_some_data.png"),
            src: "//www.youtube.com/embed/qbZ_Q-YnHYo"
        },
        graphviz: {
            title: "GraphViz",
            type: "video",
            introText: "<p>Using the GraphViz Exporter it is possible to generate <code>.dot</code> files which can then be rendered as images using graphviz' dot toolchain.\
              See this <a href='http://blog.neo4j.org/2012/05/graph-this-rendering-your-graph-with.html' target='_blank'>blog post</a> for details.</p>",
            thumbnail: "http://docs.neo4j.org/chunked/snapshot/images/graphdb-indexes.svg.png"
        },
        neo4j_heroku_gdocs: {
            type: "video",
            title: "Screencast: Integrate Neo4j, Heroku and Google Docs",
            introText: "A screencast about <a href='http://blog.neo4j.org/2011/12/neo4j-labs-heroku-neo4j-and-google.html'>deploying an application using the Neo4j add-on on Heroku</a> to expose a readonly Cypher endpoint. Then integrating with a Google Spreadsheet for querying and rendering of the results.",
            thumbnail: "http://vidcaster-media.s3.amazonaws.com/sites/145/videos/67656/freeze/thumbs/120x6816U7J.jpg",
            src: "http://video.neo4j.org/player/U4Yq"
        },
        production_secrets: {
            title: "Production Secrets",
            type: "video",
            thumbnail: asset("img/still/secrets.png"),
            introText: "Maybe a day or two before you get featured on Techcrunch, make sure your application is fully production-ready.",
            src: "http://player.vimeo.com/video/49485027"
        },
        why_graphs: {
            title: "Why Graphs",
            type: "video",
            thumbnail: "http://b.vimeocdn.com/ts/390/134/390134611_640.jpg",
            introText: "Emil Eifrem explains how graph databases can make a difference in harvesting more value in your data by looking at its relationships.",
            src: "http://player.vimeo.com/video/56040747#t=0m14s"
        },
        ha: {
            title: "High Availability",
            type: "video",
            thumbnail: asset("img/still/ha_video.gif"),
            introText: "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
            src: "http://player.vimeo.com/video/51906007"
        },
        ha_new_fosdem: {
            title: "The new Neo4j High Availability Auto Cluster",
            type: "video",
            thumbnail: "http://image.slidesharecdn.com/haautocluster-130206043426-phpapp01/95/slide-1-638.jpg?1360146953",
            src: "http://www.youtube.com/embed/vLg18Yv0SVE",
            introText: " <a href='http://de.slideshare.net/jexp/new-neo4j-auto-ha-cluster'>slides for the presentation</a>"
        },
        good_relationships: {
            title: "Introduction to Spring Data Neo4j",
            type: "video",
            thumbnail: asset("img/still/sdn-intro.png"),
            introText: "Michael Hunger introduces Spring Data Neo4j the Neo4j integration for the Springframework - Spring Data project.",
            src: "http://www.youtube.com/embed/heC-8Pq2exQ"
        },
        cypher: {
            title: "Query with Cypher",
            type: "video",
            thumbnail: asset("img/still/cypher.png"),
            introText: "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
            src: "http://player.vimeo.com/video/50389825"
        },
        cypher_console: {
            title: "Introduction to the Cypher Console",
            type: "video",
            author: "peterneubauer",
            thumbnail: asset("img/still/cypher_console_in_5_mins.gif"),
            introText: "A five minute introduction to the versatile <a href='http://console.neo4j.org' target='_blank'>console.neo4j.org</a> cypher console which can be used for exploration, sharing, testing, bug reporting and much more.",
            src: "http://player.vimeo.com/video/56097037"
        },
        cypher_sublime: {
            title: "Installing Sublime Text support for Cypher and Neo4j",
            type: "video",
            thumbnail: asset("img/still/cypher.png"),
            introText: "This is a small walkthrough to install 2 very useful Sublime Text 2 plugins by <a href='http://twitter.com/kollhof'>@kollhof</a> and <a href='http://twitter.com/sqlcook'>@sqlcook</a> when working with Neo4j.",
            src: "http://player.vimeo.com/video/64886333",
            author: "peterneubauer"
        },
        cypher_advanced: {
            title: "Advanced Cypher Webinar",
            type: "video",
            thumbnail: "http://b.vimeocdn.com/ts/347/239/347239632_640.jpg",
            introText: "An introduction to cypher with some advanced queries sprinkled in between.",
            src: "http://player.vimeo.com/video/50389825",
            author: "mesirii"
        },
        cypher_vs_sql: {
            title: "Cypher for SQL professionals",
            type: "video",
            thumbnail: "http://b.vimeocdn.com/ts/418/834/418834053_640.jpg",
            introText: "If you come from an SQL background it takes a little time to get used to Cypher, but once you got it, there is no way back.",
            src: "http://player.vimeo.com/video/60292144",
            author: "mesirii"
        },
        james_ward_neo4j: {
            title: "James Ward on Neo4j",
            type: "video",
            author: "_JamesWard",
            thumbnail: asset("img/still/jamesward.jpg"),
            introText: "James Ward shows how to build and deploy a Neo4j based app on heroku.",
            src: "http://player.vimeo.com/video/53221343"
        },
        installing_neo4j: {
            title: "Installing Neo4j",
            type: "video",
            thumbnail: asset("img/still/install.gif"),
            introText: "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
            content: "\
            <p>If you downloaded the <strong>Windows Installer</strong> run it and then use the <strong>Neo4j Launcher</strong> to start and stop your server. It is also available in the system tray.</p>\
            <p>Otherwise unzip the downloaded distribution. \
            <strong>Please</strong> make sure to have the latest <a href='http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html'>Oracle JDK 7</a> installed, if not please follow the link.\
            Start the server with <code>bin/neo4j start</code> from a terminal.<br/>\
            Open <a href='http://localhost:7474'><code>http://localhost:7474</code></a> for the Web UI.</p>",
            src: "http://player.vimeo.com/video/53838744"
        },
        graphdb101: {
            key: "graphdb101",
            title: "Graph DB 101",
            type: "video",
            author: "akollegger",
            thumbnail: asset("img/still/graphdb-intro.png"),
            introText: "A pleasant stroll through general concepts, and Neo4j particulars.",
            src: "http://player.vimeo.com/video/50787208"
        },
        bunnies: {
            key: "bunnies",
            title: "Graph Databases for Bunnies",
            type: "video",
            author: "rvanbruggen",
            thumbnail: asset("img/still/bunnies.png"),
            introText: "Rik collected the <a href='http://blog.neo4j.org/2013/06/graphs-for-bunnies.html'>top ten questions about graph databases</a> and presents answers in this awesome slidecast.",
            src: "http://player.vimeo.com/video/68035671"
        },
        strata: {
            key : "strata",
            title: "Intro to Graph Databases, Emil Eifrem interviewed at Strata 2013",
            type: "video",
            author: "emileifrem",
            thumbnail: "/assets/img/still/emil_strata_2013.gif",
            introText: "Our CEO Emil Eifrem explains Graph Databases, Neo4j and the bigger NOSQL landscape",
            src: "http://www.youtube.com/embed/GVkTBNgRrfw"
        },
        importing_sample_data : {
            title: "Importing Sample Datasets",
            type: "video",
            author: "peterneubauer",
            thumbnail: asset("img/still/import_sample_data.gif"),
            introText: "Quick guide on how to set up an installed Neo4j server with prepared datasets",
            src: "http://player.vimeo.com/video/53867161"
        },
        neo4j_code_2012: {
            title: "Contributions to the Neo4j code base",
            type: "video",
            author: "systay",
            thumbnail: asset("img/still/neo4j_code_2012.gif"),
            introText: "A visualisation of Neo4j's code base during 2012",
            src: "http://www.youtube.com/embed/YJKK7ciYRhM"
        },
        ec2_setup: {
            title: "Install Neo4j on EC2",
            type: "video",
            author: "peterneubauer",
            thumbnail: asset("img/still/ec2_install.gif"),
            introText: "Peter Neubauer shows how to install Neo4j on EC2.",
            src: "http://player.vimeo.com/video/58019458"
        }
    },
    links: {
        graphenedb: {
            title: "Neo4j Hosting with GrapheneDB",
            introText: "GrapheneDB offers comprehensive hosting plans for Neo4j, taking care of the operational aspects of running a graph database.<br/>" +
                "<strong>GrapheneDB is also available as free <a href='https://addons.heroku.com/graphenedb'>Heroku Add-On</a> in Beta</strong><br/>"
            ,
            content: "The platform supports Neo4j Community Edition versions 1.8, 1.9 and 2.0. Sandbox databases are free of charge and with 512MB storage, support of the Neo4j API, including REST traversals and Gremlin.<br/> " +
                "Paid plans are dedicated instances running on Amazon with following features:<br/><ul>\
                <li>Hosting in any AWS region</li>\
                <li>Online, automated daily backups and manual snapshots</li>\
                <li>24x7 monitoring and alerts</li>\
                <li>Support for provided and custom plugins and extensions</li>\
                </ul>",
            actionText: "Check out GrapheneDB",
            thumbnail: "http://www.graphenedb.com/images/logo.png",
            img: asset("img/still/graphenedb.png"),
            author: "graphenedb",
            type: "link",
            url : "http://graphenedb.com"
        },
        jobs: {
            type: "link",
            key: "jobs",
            title: "Join us! We're hiring",
            thumbnail: "https://camo.githubusercontent.com/7f97429e763bd14e2e7b8306175d43c4b1c43650/687474703a2f2f696d6167652e73707265616473686972742e636f6d2f696d6167652d7365727665722f696d6167652f64657369676e2f333032323637342f747970652f706e672f77696474682f3238302f6865696768742f323830",
            introText: "As our team grows we're looking for passionate people around the world to join us. Become part of THE Neo4j-Graph.",
            path: "https://github.com/neo4j/neo4j/wiki/Jobs"
        },
        team: {
            type: "link",
            key: "team",
            title: "Value in Relationships - Our Team",
            thumbnail: asset("img/still/team.jpg"),
            introText: "Working at Neo Technology is one of the best things that can happen. See, who makes Neo4j the great product it is.",
            path: "http://www.neotechnology.com/staff"
        },
        seradio_neo4j: {
            type: "link",
            title: "Software Engineering Radio Podcast on Neo4j and Graph Databases",
            thumbnail: "https://si0.twimg.com/profile_images/61815563/se_bigger.JPG",
            introText: "Robert Blumen interviews Michael Hunger about the graph data model, graph databases and Neo4j",
            path: "http://www.se-radio.net/2013/05/episode-194-michael-hunger/"
        },
        use_cases: {
            type: "link",
            key: "use-cases",
            title: "Neo4j Customers & Use-Cases",
            thumbnail: "http://www.neotechnology.com/wp-content/uploads/2013/01/WP-NetMgmt_sm.png",
            introText: "Principal uses of Neo4j include social, recommendations, bioinformatics, fraud detection, network management, authorization and access control, content management, and parcel routing, with new ones being added regularly.",
            path: "http://www.neotechnology.com/neo4j-use-cases/"
        },
        customers: {
            title: "Customers",
            thumbnail: "http://www.neotechnology.com/wp-content/uploads/2012/11/neo4j_customers.png",
            introText: "From the Fortune 500 to cutting edge startups, our customers depend on Neo4j for insanely high performance queries on massive amounts of connected data. Graphs Are Everywhere!",
            path: "http://www.neotechnology.com/customers/"
        },
        graphgist: {
            type:"video",
            github: "https://github.com/neo4j-contrib/graphgist",
            title: "Neo4j Graph Gists",
            author:["nawroth","peterneubauer","mesirii"],
            introText: "Use literate programming with simple ASCII-doc files with prose and Cypher queries to render interactive, incremental domain model examples with lots of value added features." +
                "The quick screencast shows how to create them.",
            path: "http://gist.neo4j.org",
            src: "http://player.vimeo.com/video/74279113?badge=0&byline=0&portrait=0&title=0",
            actionText: "Create & Share"
        },
        dbpedia_clojure: {
            type: "link",
            path: "http://blog.opal.io/archive/loading-dbpedia-into-neo4j-with-clojure.html",
            title: "Loading DBPedia into Neo4j with Clojure",
            introText: "This article describes how to load over 82 million relationships from the DBPedia datasets into Neo4j with Clojure.",
            author: "opal_io"
        },
        course_neo4j_in_60: {
            type: "link",
            path: "http://www.gyaanexchange.com/online/neo4j-in-under-60-minutes/",
            title: "Online Course: Neo4j in under 60 minutes",
            author: ["luannem","rhetonik"],
            introText: "In this class <a href='http://twitter.com/luannem'>Luanne Misquitta</a> and <a href='http://twitter.com/rhetonik'>Nikhil Lanjewar</a> introduce you to the basics of Neo4j and how you can quickly get started using NOSQL on your projects.",
            thumbnail: asset("img/logo/gyaanexchange.png")
        },
        online_intro_training: {
            key: "online_intro_training",
            type: "link",
            path: "/learn/online_course",
            title: "Online Training: Getting Started with Neo4j",
//            src: "https://player.vimeo.com/video/77866447",
//            author: ["mesirii","akollegger"],
            introText: "Learn Neo4j at your own pace and time with our free online training course.  Get introduced to graph databases, learn the core functionality of Neo4j, and practice Cypher with this engaging and interactive course.",
            img: asset("img/still/online_training.jpg"),
            thumbnail: asset("img/still/online_training_small.jpg"),
            actionText: "Get started today"
        },
        python_safari: {
            type: "link",
            author: "technige",
            title: "Using Neo4j from Python",
            path: "http://blog.safaribooksonline.com/2013/07/23/using-neo4j-from-python/",
            introText: "This article shows how the Py2neo library can be used to build a simple application with Neo4j.",
            thumbnail: asset("img/logo/safari-logo.png")
        },
        python_unique_safari: {
            type: "link",
            author: "technige",
            title: "Managing Neo4j Uniqueness with Py2neo",
            path: "http://blog.safaribooksonline.com/2013/08/07/managing-uniqueness-with-py2neo/",
            introText: "In the context of Neo4j, it may be necessary to ensure that individual nodes are unique within a particular context; or there may be more complex uniqueness requirements across paths or subgraphs.",
            thumbnail: asset("img/logo/safari-logo.png")
        },
        neo4j_koans_skillsmatter: {
            type: "link",
            path: "http://skillsmatter.com/course/nosql/neo4j-tutorial",
            title: "Neo4j-Koans at Skillsmatter",
            author: ["iansrobinson","jimwebber"],
            introText: "This intensive, highly practical 2-day Neo4j course will provide you with the skills required to become effective with graphs and productive with Neo4j. Join this course to learn Neo4j's excellent APIs and Cypher query language and how you can use the world's leading graph database to manage and query sophisticated connected data.",
            thumbnail: asset("img/logo/skillsmatter.gif"),
            github: "https://github.com/jimwebber/neo4j-tutorial"
        },
        centrum_training: {
            type: "link",
            path: "http://www.centrumsystems.com.au/what-we-do/training/neo4j-developer-training/",
            title: "Neo4j Developer Training by Centrum (AU)",
            author: ["Centrum Systems"],
            introText: "Centrum Systems is a Neo Technology Business Partner and provides initial developer training on the leading NoSQL product, Neo4j, for customers in Australia and New Zealand. The training is normally delivered over a two week period and can include assistance in determining architecture and establishing a PoC.",
            thumbnail: "http://www.centrumsystems.com.au/wp-content/themes/thesis_18/images/logo.jpg"
        },
        neo4j_koans: {
            type: "link",
            path: "https://github.com/jimwebber/neo4j-tutorial#neo4j-koans",
            title: "Neo4j-Koans with Dr. Who",
            author: ["iansrobinson","jimwebber"],
            introText: "This set of Koans provides a hands-on tutorial for learning the Neo4j open source graph database. It's part of a more comprehensive tutorial often presented by the authors and others.",
            thumbnail: asset("img/still/koans_drwho.gif"),
            img: asset("img/still/koans_drwho.png"),
            github: "https://github.com/jimwebber/neo4j-tutorial"
        },
        gatling: {
            type: "link",
            thumbnail: "http://maxdemarzidotcom.files.wordpress.com/2013/02/neo4j_loves_gatling.gif?w=200",
            img: "http://maxdemarzidotcom.files.wordpress.com/2013/02/neo4j_loves_gatling.gif?w=580",
            path: "http://maxdemarzi.com/2013/02/14/neo4j-and-gatling-sitting-in-a-tree-performance-t-e-s-t-ing/",
            title: "Neo4j and Gatling sitting in a tree, performance testing",
            author: "maxdemarzi",
            introText: "Max De Marzi explains how to use the Scala based load testing tool Gatling to test a Neo4j Server."

        },
        spring_heroku_james_ward: {
            type: "link",
            title: "Graphs in the Cloud: Spring + Neo4j on Heroku",
            introText: "I began by deploying a copy of the Spring MVC + Hibernate template app. Then I made a few modifications to the app to switch the persistence from JPA to Spring Data Neo4j.",
            author: {name: "James Ward", twitter: "_JamesWard"},
            github: "https://github.com/jamesward/hello-java-spring-neo4j",
            path: "http://www.jamesward.com/2012/05/14/graphs-in-the-cloud-spring-neo4j-on-heroku",
            src: "http://video.neo4j.org/player/DNgFF"
        },
        start_with_neo4j_neo4jclient: {
            type: "link",
            title: "Beginning with Neo4j and Neo4jClient",
            introText: "I will try my best to include everything necessary to get started with Neo4j, Windows and c# using Neo4jClient.",
            author: "CameronJTinker",
            path: "http://www.cameronjtinker.com/post/2013/01/04/Beginning-with-Neo4j-and-Neo4jClient.aspx"
        },
        install_windows: {
            type: "link",
            title: "How to Install Neo4j on Windows - Avoiding the Pitfalls",
            introText: "Installing Neo4j on Windows is pretty straightforward, but the Neo4j installation instructions for Windows are lacking. So Jon wrote an improved how-to.",
            author: "jongallant",
            path: "http://blog.jongallant.com/2013/03/install-neo4j-windows.html"
        },
        azure_vs2012: {
            type: "link",
            title: "How to deploy Neo4j to Azure with Visual Studio 2012 - A step-by-step guide.",
            introText: "There were a lot of time consuming hurdles, so I thought I’d save you some time and do a very detailed post to help you get from nothing to a fully functioning Neo4j deployment on Azure. ",
            author: "jongallant",
            path: "http://blog.jongallant.com/2013/03/neo4j-azure-vs2012.html"
        },
        azure_openstack: {
            type: "link",
            title: "Azure AWS Open Stack – Neo4j Setup Tutorials on Ubuntu",
            introText: "In this neo4j tutorial, we shall provide easy steps to install a simple neo4j community edition on azure without using neo4j Enterprise high availability features which we shall cover in a different post.",
            author: "CognoSys",
            thumbnail: "http://www.cogno-sys.com/wp-content/themes/cogno-sys/images/logo.png",
            path: "http://www.cogno-sys.com/cloud-azure-amazon-open-stack/neo4j-azure-installation-graph-database-tutorials/"
        },
        azure_nuget_worker_host: {
            type: "link",
            title: "NuGet: Neo4j.Server.AzureWorkerHost ",
            introText: "Makes it super easy to host Neo4j in an Azure worker role",
            author: "tathamoddie",
            thumbnail: "http://nuget.org/Content/Images/packageDefaultIcon.png",
            path: "http://nuget.org/packages/Neo4j.Server.AzureWorkerHost/"
        },
        azure: {
            type: "link",
            title: "Neo4j on Azure",
            introText: "In this blog post we will show that it is no problem at all to host a sophisticated and complex server product such as the Neo4j graph database server on Window Azure. Since Neo4j has a remote API over HTTP you can easily connect to the server from your applications.",
            path: "http://blog.neo4j.org/2011/02/announcing-neo4j-on-windows-azure.html"
        },
        azure_vmdepot: {
            type: "link",
            title: "Step by Step Installation of Neo4j on Azure",
            author: {name:"Yuri Bukhan",twitter:"ybukhan"},
            introText: "Yuri Bukhan our Director of Business development, built a VMDepot Neo4j image and put together these step by step instructions on how to install it.",
            path: "http://de.slideshare.net/neo4j/neo4j-on-azure-step-by-step-22598695"
        },
        azure_one_click: {
            type: "link",
            title: "Point-Click Deployment of Neo4J to Windows Azure",
            author: "dynamicdeploy",
            introText: "In this article, I will show you how to deploy Neo4J into Azure VMs in minutes. No coding, no Visual Studio, just point-click deployment for free.",
            path: "http://www.opensourceazure.com/blog/2013/05/22/point-click-deployment-of-neo4j-to-windows-azure/"
        },
        mapdb_index: {
            type: "link",
            path: "http://jexp.de/blog/2013/05/on-creating-a-mapdb-schema-index-provider-for-neo4j-2-0/",
            title: "Creating a MapDB Schema Index Provider for Neo4j 2.0",
            author: ["mesirii"],
            introText: "Neo4j 2.0 introduced the concept of real automatic indexes with a new underlying indexing subsystem SPI. So I thought it would be really helpful to try it out and provide a faster indexing implementation than the default lucene one. I chose <a href='http://www.mapdb.org/'>MapDB</a> for it and the results are <a href='https://github.com/jexp/neo4j-mapdb-index'>here on github</a>."
        },
        wes_cypher: {
            type: "link",
            title: "Wes Freeman's Cypher Tutorials and Commentary",
            author: "wefreema",
            url: "http://wes.skeweredrook.com/cypher/",
            introText: "Wes' Cypher page with introductory articles, links to resources and the 'Ask Wes' section."
        },
        mark_cypher: {
            type: "link",
            title: "Mark Needhams collection of using Cypher for real world problems",
            author: "markhneedham",
            url: "http://www.markhneedham.com/blog/tag/cypher/",
            introText: "Mark uses use-cases from mapping colleagues and projects to football games and stadiums to explain different aspects of Cypher in a very descriptive manner."
        },
        ec2_aws_tools: {
            type: "link",
            title: "Getting Started Guide on Amazon EC2",
            url: "http://docs.amazonwebservices.com/AWSEC2/latest/GettingStartedGuide/Welcome.html"
        },
        stack_overflow: {
            key: "stack_overflow",
            title: "Stack Overflow",
            path: "http://stackoverflow.com/questions/tagged/neo4j",
            thumbnail: asset("img/logo/stackoverflow.png"),
            introText: "For getting answers to concrete questions about API usage, Neo4j configuration, cypher syntax etc. please post to Stack Overflow.",
            actionText: "Ask Neo4j questions"
        },
        mailing_list: {
            key: "mailing_list",
            title: "Neo4j Google Group",
            path: "http://groups.google.com/group/neo4j",
            thumbnail: asset("img/logo/googlegroups.png"),
            introText: "Share your experiences and expertise with fellow graphistas. " +
                "Visit these groups for <a href='http://groups.google.com/group/neo4jfr' target='_blank'>French</a> " +
                "and <a href='http://groups.google.com/group/neo4jes' target='_blank'>Spanish</a> postings.",
            actionText: "Join now"
        },
        github_neo4j: {
            key: "github_neo4j",
            title: "GitHub Issues",
            path: "http://github.com/neo4j/neo4j/issues",
            thumbnail: asset("img/logo/github.png"),
            introText: "Encountered an issue with Neo4j? Submit it here.",
            actionText: "Report issue"
        },
        graphconnect: {
            type: "link",
//            title: "GraphConnect the Graph Conference",
            title: "GraphConnect",
            introText: "GraphConnect is the graph conference to meet developers, users and visionaries present and talk about graph databases and their applications.<br/> \
                Upcoming conferences in \
                <a href='http://www.graphconnect.com/new-york/' target='_blank'>New York</a> and <a href='http://www.graphconnect.com/london' target='_blank'>London</a>.<br/>\
                Videos and slides from <a href='http://www.graphconnect.com/san-francisco/' target='_blank'>San Francisco</a>, <a href='http://www.graphconnect.com/boston/' target='_blank'>Boston</a> and <a href='http://www.graphconnect.com/chicago' target='_blank'>Chicago</a> are online now.",
            thumbnail: asset("img/logo/graphconnect.png"),
            img: asset("img/events/GC_n4jsite_ad.jpg"),
            actionText: "Register Now!",
            url: "http://graphconnect.com"
        },
        trainings: {
            type: "link",
            title: "Neo4j full day trainings",
            introText: "Get to know Neo4j at this introductory, full day training covering, graph-databases, use-cases and cypher.",
            thumbnail: asset("img/events/training.png"),
            img: "http://www.neotechnology.com/wp-content/uploads/2013/03/tutorials_0305313.png",
            url: "http://www.neotechnology.com/2013/01/neo4j-tutorials-going-global/"
        },
        partners_graph: {
            type: "link",
            title: "Partners Graph",
            thumbnail: asset("img/logo/neotechnology_small.png"),
            introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
            path: "http://www.neotechnology.com/partners/"
        },
        neotech_services: {
            type: "link",
            title: "Consulting Services",
            thumbnail: asset("img/logo/neotechnology_small.png"),
            introText: "We offer a variety of consulting services around Neo4j through our network of professional partners. Services range from setup and operations support, data modeling consulting, performance tuning to proof of concept development",
            path: "http://www.neotechnology.com/neo4j-professional-services/"
        },
        neo4j_ref_card: {
            type: "external",
            title: "Neo4j Reference Card",
            introText: "Visualize the concepts of the graph as a graph, how much more meta can you go?",
            thumbnail: asset('img/neo4j/visually_refcard_small.gif'),
            path: "http://visual.ly/whats-graph-database"
        },
        javadoc: {
            title: "API JavaDoc",
            path: "http://api.neo4j.org/current/",
            thumbnail: asset("img/languages/java.jpg"),
            introText: "Check out the Java API of the current milestone.",
            actionText: "Browse JavaDoc"
        },
        manual: {
            title: "The Neo4j Manual",
            path: "http://docs.neo4j.org/chunked/milestone",
            thumbnail: asset("img/events/training.png"),
            introText: "The Neo4j Manual is the comprehensive resource for detailed information about Neo4j. You will find everything, from tutorials to extensive reference documentation on every aspect of the database.",
            actionText: "Go to the manual"
        },
        slides: {
            title: "Neo4j Presentation slides",
            path: "http://slideshare.net/neo4j",
            thumbnail: "http://help.slideshare.com/system/logos/2029/3220/logo.png",
            introText: "Slides from Neo4j conference, webinar and meetup presentations. These talks were delivered by a variety of customer, company and community speakers. Also check out our <a href='/learn/videos'>recorded videos</a>.",
            actionText: "Enjoy the presentations"
        },
        scale: {
            title: "Neo4j at Scale",
            path: "http://www.neotechnology.com/neo4j-scales-for-the-enterprise/",
            thumbnail: asset("img/still/hacluster_small.jpg"),
            introText: "Learn more about how Neo4j scales, with some real-world examples",
            actionText: "Learn More"
        },
        manual_java: {
            title: "Manual: the Java Tutorial",
            path: "http://docs.neo4j.org/chunked/milestone/tutorials-java-embedded.html",
            thumbnail: asset("img/languages/java.jpg"),
            introText: "In the tutorial you will find everything needed — from setting up the environment to doing something useful with your data.",
            actionText: "Go to the manual"
        },
        manual_server: {
            title: "Neo4j Server manual",
            path: "http://docs.neo4j.org/chunked/milestone/server.html",
            thumbnail: asset("img/languages/java.jpg"),
            introText: "Neo4j server manual sections",
            actionText: "Browse the manual"
        },
        manual_cypher: {
            title: "Cypher Reference",
            path: "http://docs.neo4j.org/chunked/milestone/cypher-query-lang.html",
            introText: "Cypher is a declarative graph query language that allows for expressive and efficient querying and updating of the graph store without having to write traversals through the graph structure in code.",
            thumbnail: asset("img/logo/cypher_small.gif"),
            actionText: "Cypher Manual"
        },
        cypher_cheat_sheet: {
            title: "Cypher Cheat Sheet (PDF)",
            path: "/resources/cypher",
            thumbnail: asset("img/still/cypher_refcard.gif"),
            introText: "Download the Cypher Cheat Sheet as PDF",
            actionText: "Download PDF"
        },
        eclipse_maven_neo4j_setup: {
            title: "Setting up a Neo4j maven project in Eclipse",
            path: "http://blog.neo4j.org/2012/03/how-to-set-up-maven-project-with-neo4j.html",
            introText: "A blog post on how to set up a new project with Neo4j in Java using Eclipse",
            actionText: "Read the blog",
            thumbnail: asset("img/logo/eclipse.jpg")
        },

        d3: {
            title: "JavaScript D3.js",
            introText: "<p>D3 is the most powerful javascript visualization library which supports a large number of visualizations, many of them are usable for graphs as well, <a href='http://maxdemarzi.com/tag/visualization-2/' target='_blank'>Max De Marzi</a> covered several of the visualizations on his blog.</p>",
            thumbnail: asset("img/still/d3_network.png"),
            src: asset("img/still/d3_network.png"),
            path: "http://d3js.org/"
        },
        linkurious: {
            title: "Linkurio.us Neo4j Graph Visualization",
            introText: "Neo4j Partner Linkurious helps you make sense of your graph data through a simple web-based interface based on an open-source back-end that connects to your Neo4j Database.",
            content: "\
            <h3>Connect</h3><p>Our Open Source backend indexes your graph so you can connect with it on Linkurious and get started in minutes. When it is done, launch the web application of Linkurious.</p>\
            <h3>Search</h3><p>Typing any keyword in the search bar brings up all the related data in one step. We provide a console for advanced queries so you can be as broad or as specific as you want.</p>\
            <h3>Explore</h3><p>By focusing on the items related to your search, visualizing and exploring your graph has never been easier. Dig further in any direction using the connected nodes and make sense of your data.</p>\
            ",
            thumbnail: "http://linkurio.us/wp-content/uploads/2012/11/linkurious-239x60-tr.png",
            img: "http://linkurio.us/wp-content/uploads/2012/11/linkurious-screenshot-22-halo.jpg",
            path: "http://linkurio.us/"
        },
        keylines: {
            title: "Keylines Neo4j Graph Visualization",
            introText: "KeyLines is a JavaScript toolkit for visualizing networks. It works in all major browsers, and on all platforms, including the iPad. It uses HTML5 but also works on old versions of Internet Explorer.",
            content: "\
            <h3>How does it work?</h3><p>KeyLines will integrate into existing web applications easily and with very little effort.<br/>How and where you get the data is up to you. KeyLines does the job of rendering it and responding to user interactions like clicking, touching, moving nodes, etc. You bind to these events to customize what happens.<br/>Your data stays under your control at all times: KeyLines is self-contained and needs no external connections.</p>\
            <h3>What kind of data?</h3><p>KeyLines can work on any kind of network - all you need is data with nodes and links.</p>\
            \
            ",
            thumbnail: "http://www.neotechnology.com/wp-content/uploads/2013/02/Keylines-logo-tex-tagline-medium-300x89.png",
            img: "http://keylines.com/im/product/KeyLinesNeo4j.png",
            path: "http://keylines.com/neo4j"
        },
        gephi: {
            title: "Gephi",
            type: "video",
            introText: "A JPA Compliant mapping solution for NoSQL Datastores with support for Neo4j",
            thumbnail: asset("img/still/gephi_neo4j_plugin.png"),
            src: "http://player.vimeo.com/video/31823202?badge=0&byline=0&portrait=0&title=0"
        },
        kundera: {
            title: "Kundera",
            introText: "<p>The well known Graph visualization tool Gephi has a <a href='http://gephi.org/tag/neo4j/' target='_blank'>plugin for importing Neo4j</a> Databases which can then be visualized and rendered with the full power of Gephi's engines.</p>",
            thumbnail: "https://github.com/impetus-opensource/Kundera/wiki/images/imdb_polyglot.jpg",
            path: "https://github.com/impetus-opensource/Kundera/wiki/Graph-Database-Support"
        }

    },
    scientific: {
        wordnet_using_graphdbs: {
            type: "article",
            title: "A New Representation of WordNet® using Graph Databases",
            url: "http://www.thinkmind.org/index.php?view=article&articleid=dbkda_2013_1_10_30004",
            author: "Khaled Nagi",
            img: "http://www.thinkmind.org/images/top_left.gif",
            introText: "A WordNet® query/import performance analysis using Neo4j and Apache Derby.",
            actionText: "Read more"
        },
        the_graph_traversal_pattern: {
            type: "article",
            title: "The Graph Traversal Pattern",
            path: "http://arxiv.org/abs/1004.1001",
            author: "Marko Rodriguez, Peter Neubauer",
//            img: "",
            introText: " This article discusses the graph traversal pattern and its use in computing.",
            actionText: "Read more"
        }
    },
    example_data: {
        dr_who: {
            type: "link",
            title: "DrWho (0.05MB)",
            url: "http://github.com/jimwebber/neo4j-tutorial",
            author: "jimwebber",
            img: "http://www.neotechnology.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-13-at-12.57.35-PM.png",
            introText: "The Dr.Who universe of doctors, actors, enemies and props from the Neo4j Koans Tutorial. <a href='http://example-data.neo4j.org/files/drwho.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Check it out"
        },
        fec_2012: {
            type: "link",
            title: "Federal Election Commission Campaign Data - (63.91MB)",
            url: "http://blog.neo4j.org/2012/10/follow-data-fec-campaign-data-challenge.html",
			github: "https://github.com/akollegger/FEC_GRAPH",
            author: "akollegger",
            img: "http://2.bp.blogspot.com/-yz4sG2of89Y/UG4TQ5QsgDI/AAAAAAAAAV8/apaI68-NH5U/s1600/ftd-banner.png",
            introText: "The 2012 presidential campaign data from our Federal Election Committee Campaign Data Workshop. <a href='http://example-data.neo4j.org/files/fec_data_presidential_2012.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Follow the Data"
        },
        heroku_waza_2013: {
            type: "link",
            title: "Twitter Connections Heroku Waza 2013 (0.5MB)",
            url: "https://waza.neo4j.org/#twitter",
            author: "mesirii",
			github: "https://github.com/maxdemarzi/neowaza",
            img: "http://waza.neo4j.org/images/twitter.png",
            introText: "Inferred Connection Graph from Tweets during Heroku Waza 2013. <a href='http://example-data.neo4j.org/files/heroku_waza_2013.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
//            introText: "People tweet all the time. There is the obvious social graph that consists of twitter followers. But much more interesting is the implict graph hidden in between the tweets. Mentions, Retweets and shared Hashtags form interesting relationships between people even if they don't follow each other.",
            actionText: "Discover connections"
        },
        cineasts_small: {
            type: "link",
            title: "Small Cineasts Movies & Actors (0.14MB)",
            url: "http://spring.neo4j.org/tutorial",
            github: "https://github.com/SpringSource/spring-data-neo4j/tree/master/spring-data-neo4j-examples/cineasts",
            author: "mesirii",
            img: asset("img/spring/cineasts.png"),
            introText: "small dataset of the Spring Data Neo4j Cineasts.net tutorial. <a href='http://example-data.neo4j.org/files/cineasts_39_movies_446_actors.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Like a Movie"
        },
        cineasts_large: {
            type: "link",
            title: "Cineasts Movies & Actors (12.3MB)",
            url: "http://spring.neo4j.org/tutorial",
            github: "https://github.com/SpringSource/spring-data-neo4j/tree/master/spring-data-neo4j-examples/cineasts",
            author: "mesirii",
            img: asset("img/spring/cineasts.png"),
            introText: "Full dataset (12k movies, 50k actors) of the Spring Data Neo4j Cineasts.net tutorial. <a href='http://example-data.neo4j.org/files/cineasts_12k_movies_50k_actors.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Like a Movie"
        },
        musicbrainz_large: {
            type: "link",
            title: "The Musicbrainz main entities - large (5.4GB)",
            url: "http://blog.neo4j.org/2013/11/musicbrainz-in-neo4j-part-1.html",
            github: "https://github.com/SpringSource/spring-data-neo4j/tree/master/spring-data-neo4j-examples/cineasts",
            author: "peterneubauer",
            img: "http://2.bp.blogspot.com/--ghj75EWkyc/UnjtpNV657I/AAAAAAAALiU/UYua5dc4fPk/s1600/Screenshot_11_5_13_2_07_PM.png",
            introText: "Most of the interesting entities (800,000 Artists, 12,000,000 Tracks, 1,200,000 Releases, 75,000 Record Labels) from the <a href='http://musicbrainz.org'>Musicbrainz</a> dataset. <a href='http://example-data.neo4j.org/files/musicbrainz_neo_20.tar.bz2'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Explore music now"
        },
        snapplr: {
            type: "link",
            title: "OpenStreetMap import for Malmö, Sweden (14.7MB)",
            url: "https://snapplr.herokuapp.com",
            github: "https://github.com/neo4j/spatial",
            author: "peterneubauer",
            img: asset("img/still/snapplr.png"),
            introText: "An import of the Open Streetmap data for the Malmö area, used in the Snapplr example application. <a href='http://example-data.neo4j.org/files/malmo.db.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Test now"
        },
        hubway: {
            type: "link",
            title: "Hubway Data Challenge (50MB)",
            url: "http://blog.neo4j.org/2012/10/using-spring-data-neo4j-for-hubway-data.html",
			github: "https://github.com/jexp/hubway-sdn",
            author: "mesirii",
            img: "http://hubwaydatachallenge.org/static/img/hubway-logo.png",
            introText: "Hubway is a bike sharing service. The challenge data consists 95 Boston stations and 500k bike rides. <a href='http://example-data.neo4j.org/files/hubway_data_challenge_boston.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Ride a bike"
        },
        conceptnet: {
            type: "link",
            title: "ConceptNet 5 (243MB)",
            url: "http://maxdemarzi.com/2013/05/13/knowledge-bases-in-neo4j/",
			github: "https://github.com/maxdemarzi/neo_concept",
            author: "maxdemarzi",
            img: "http://maxdemarzidotcom.files.wordpress.com/2013/05/cnet5promo.png?w=128&h=421",
            introText: "ConceptNet is a semantic network built from nodes representing concepts, and labeled relationships between them. <a href='https://dl.dropboxusercontent.com/u/57740873/conceptnet.graph.db.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Know the world"
        },
        neo_love: {
            type: "link",
            title: "Neo Love (1.6MB)",
            url: "http://maxdemarzi.com/2013/04/19/match-making-with-neo4j/",
			github: "https://github.com/maxdemarzi/neo_love",
            author: "maxdemarzi",
            img: "http://maxdemarzidotcom.files.wordpress.com/2013/01/groucho_marx.jpg?w=128&h=128",
            introText: "Neo4j brings the love with a sample dating site. <a href='https://dl.dropboxusercontent.com/u/57740873/neo_love.graph.db.zip'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Bring the Love"
        },
        neo_permissions: {
            type: "link",
            title: "Neo Permissions (560MB)",
            url: "http://maxdemarzi.com/?s=PERMISSION+RESOLUTION",
			github: "https://github.com/maxdemarzi/neo_permissions/blob/master/performance/src/test/resources/simulations/RandomPermissions.scala",
            author: "maxdemarzi",
            img: "http://maxdemarzidotcom.files.wordpress.com/2013/03/i_can_haz_permissions.jpg?w=128&h=128",
            introText: "Check permissions from files and folders to users and groups in this ACL example. <a href='https://dl.dropboxusercontent.com/u/57740873/datasets/neo_permissions.tar.gz'><span class='icon-download-alt'>&nbsp;</span></a>",
            actionText: "Check Permissions"
        }
    },
    articles: {

        graphgist_syntax: {
            type: "track",
            title:"GraphGist Syntax",
            url:"http://gist.neo4j.org/?github-neo4j-contrib%2Fgraphgist%2F%2Fgists%2Fsyntax.adoc",
            author:"nawroth",
            content: function (params) {
                return render.render(
                    "<blockquote class='external markdown'>\
                                <%-: content.graphgist_syntax | asciidoc %>\
                            </blockquote>\
                ", params)
            }
        },
        jdbc: {
            type: "type",
            title: "Neo4j JDBC tools integration",
            thumbnail: "https://s3-eu-west-1.amazonaws.com/tiq-solutions/tumblr/pics/QVScriptNeo4j_Search_All_Roles_Spock.png",
            introText: "With the Cypher JDBC driver, a lot of tools can be easily integrated with Neo4j.",
            path: "http://blog.neo4j.org/2012/07/cypher-jdbc-tools-testing-results.html"
        },
        neo4j_on_heroku: {
            type: "article",
            title: "Hosted Neo4j on Heroku (GrapheneDB)",
            thumbnail: "",
            src: asset("img/still/graphenedb.png"),
            introText: "<p>As a platform-as-a-service (PAAS) provider, <a href='http://heroku.com'>Heroku</a> offers a quick way from your locally developed app to a\
                                     managed deployment in the cloud. The ability of adding different hosted services is crucial for the daily needs of a modern day web-application.\
                                     To run a Neo4j graph powered app on Heroku you can easily add the <a href='https://devcenter.heroku.com/articles/graphenedb'>GrapheneDB Neo4j Add-on</a>.\
                                  </p>",
            content: "<h3>Add Neo4j to your Heroku Application</h3>\
                        <p>After installing the <a href='https://toolbelt.heroku.com' target='_blank'>Heroku toolbelt</a>, it is as easy as:\
            <ol>\
                <li>Create an application: <code>heroku apps:create your-app-name</code></li>\
                <li>Add the Database Add-on: <code>heroku addons:add graphenedb</code></li>\
                <li>Open the Add-On Administration page: <code>heroku addons:open graphenedb</code></li>\
                <li>Show the your app's environment variables: <code>heroku config</code></li>\
                <li>Use <code>ENV[\"GRAPHENEDB_URL\"]</code> or <code>System.getenv(\"GRAPHENEDB_URL\")</code> to access the Neo4j Server with one of the <a href=''/develop/drivers'>language drivers</a></li>\
            </ol>\
          </p>"
        },
        licensing_guide: {
            type: "article",
            title: "Pragmatic licensing guide",
            introText: "Understand which license you need and how Neo Technology can help you.<br/>Free community and " +
                "personal editions, affordable startup package and comprehensive offerings for medium businesses and large enterprises alike.",
            src: asset("img/still/neo4j_bundles.png"),
            url: "http://www.neotechnology.com/price-list/",
            path: "http://www.neotechnology.com/price-list/",
            actionText: "Neo4j Editions",
            content: "<p>Neo4j has been powering large-scale mission-critical production applications since 2003. Today it powers a wide diversity of applications: from small startups to global mission-critical systems.</p>\
    <p>Neo4j is licensed under a dual-license arrangement: with a Community Edition licensed under the GPL, and an Enterprise Edition optimized for closed-source development. \
            Enterprise Edition is licensed on a subscription basis for commercial use, or under the AGPL for open source projects contributing to the open source commons. \
            In addition to a commercial license, commercial subscriptions also include professional support, certified releases, access to the Neo4j partner network, and \
            of course <a href='http://www.neotechnology.com/price-list/'>Enterprise features</a>.</p>\
    <p>There are two main editions of Neo4j:</p>\
    <ul>\
    <li><b>Neo4j Community</b>, an Open-Source High Performance, fully ACID transactional graph database\
    <li><b>Neo4j Enterprise</b> adds production capabilities - High Performance Cache, Horizontal scalability with Neo4j Clustering, High-availability Clustering and online backups, Cache based sharding, and Advanced Monitoring\
    </ul>\
    <p>Commercial Licenses include the permission to integrate the enterprise edition in closed-source or production level software products, service and support by Neo Technology.<br/>\
       The Enterprise edition is available in different <a href='http://www.neotechnology.com/price-list/'>bundles tailored to your needs</a>. From a free personal bundle for individual usage, a startup and small business package to a comprehensive offering for medium and large enterprises.\
       </p>"
        },
        enterprise_features : {
            type: "article",
            title: "Enterprise Features",
            introText: "Neo4j Enterprise Edition comes with features that allow for deployment in your mission critical business applications.",
            src: asset("img/logo/neotechnology_small.png"),
            path: "http://www.neotechnology.com/price-list/",
            content: "<ol>\
                <li><strong>High-Performance Cache</strong>. Queries can run up to 10x faster than the Community Edition under high query workloads and with large graphs</li>\
                <li><strong>Horizontal scalability with Neo4j Clustering</strong> provides <a href='http://www.neotechnology.com/neo4j-scales-for-the-enterprise/'>predictable scalability</a>, by guaranteeing that every query runs in-instance, with maximum performance</li>\
                <li><strong>High-availability and online backups</strong> safeguard your data so that your business can keep running under a wide range of scenarios</li>\
                <li><strong>Cache-based sharding</strong> is a technique made possible by Neo4j’s clustering technology, which lets you shard your graph in memory without sharding your data on disk</li>\
                <li><strong>Advanced monitoring</strong> provides operational metrics not available in the Community Edition, making it easier to operate your system and keep it running healthy</li>\
                </ol>"
        },
        licensing_guide_which: {
            type: "article",
            title: "Which license is right for you?",
            introText: "That depends on how you're using Neo4j.",
            src: asset("img/logo/neotechnology_small.png"),
            path: "http://www.neotechnology.com/price-list/",
            actionText: "Neo4j Editions",
            content: "\
            <h4>The main intention for usage of Neo4j</h4>\
            \
            <p>You are free to use the community version of Neo4j in any situation where you would, for example, use MySQL. \
            If you are using Neo4j in a commercial, production setting, then our intention is that you will contact Neo Technology to discuss licensing.</p>\
            \
            <h4>You build Closed Source, Business-Essential Online Applications</h4>\
            \
            <p>If you're using Neo4j to build closed-source online applications that are central to your business, \
            then we want you to talk to us about commercial licensing of the <a href='http://www.neotechnology.com/price-list/'>Neo4j Enterprise edition</a>. \
            It offers the performance, monitoring, backup and high-availability features you need to be successful - \
            not to mention access to full support from our top engineering team.</p>\
            \
            <h4>You want to embed Neo4j as an OEM component in your Closed Source software</h4>\
            \
            <p>Neo4j is a great choice when you need to include a graph database service in your packaged software product. \
            We can make Neo4j available to use in these situations under our commercial OEM licensing - <a href='http://neotechnology.com/contactus/'>contact us</a> for details.</p>\
            \
            <h4>You are Testing or Evaluating Neo4j</h4>\
            \
            <p>All editions of Neo4j are available for <a href='/download'>download</a> and can be used under permissive licenses - \
            perfect for testing and evaluating Neo4j before you've released your code or made your new online service available to your customers.\
            If you want to evaluate Neo4j for a real use-case, the <strong>personal bundle</strong> is the way to go.\
            </p>\
            \
            <h4>You are developing Open Source Software</h4>\
            \
            <p>We love open source development, so you are free to use all Neo4j components for your open source, \
            public domain project under either the GPL (for Community edition) or the AGPL (Enterprise edition, <a href='http://neotechnology.com/contactus/'>contact us</a>).</p>\
            "
        },

        partner_graph: {
            title: "Neo4j Partners Graph",
            introText: "The Neo4j Partner Graph provides market differentiation and sustainable revenue opportunities for its members.",
            type: "article",
            src: asset("img/logo/neotechnology_small.png"),
            path: "http://www.neotechnology.com/partners/",
            content: "Program Benefits\
                <ul>\
    <li>Access to Neo4j, the world’s leading graph database and its global community of experts\
    <li>Effective field engagement with access to Neo engineering resources\
    <li>Access to partner program resources to help develop and expand business\
    Sales, training, and marketing enablement to expand existing and drive new partner business and revenue\
    <li>Recognition as an innovator and thought leader in the NoSQL space\
    </ul>"
        },
        gc2012: {
            type: "article",
            title: "GraphConnect 2012",
            introText: "(TODO) Introtext GraphConnect 2012",
            content: "TODO: Content for GraphConnect page"
        },
        graphdb: {
            graph: {
                type: "article",
                title: "A Graph contains Nodes and Relationships",
                introText: "A Graph –[:RECORDS_DATA_IN]–> Nodes –[:WHICH_HAVE]–> Properties.",
                src: asset("img/propertygraph/graphdb-gve.png"),
                content: "The simplest possible graph is a single Node, a record that has named values referred to as Properties. A Node could start with a single Property and grow to a few million, though that can get a little awkward. At some point it makes sense to distribute the data into multiple nodes, organized with explicit Relationships."
            },
            graphdb_traversal: {
                type: "article",
                title: "Query a Graph with a Traversal",
                introText: "A Traversal –navigates–> a Graph; it –identifies–> Paths –which order–> Nodes.",
                src: asset("img/propertygraph/graphdb-traverse.png"),
                content: "A Traversal is how you query a Graph, navigating from starting Nodes to related Nodes according to an algorithm, finding answers to questions like \“what music do my friends like that I don’t yet own,\” or \“if this power supply goes down, what web services are affected?\”"
            },
            graphdb_indexes: {
                type: "article",
                title: "Indexes Look-up Nodes or Relationships",
                introText: "An Index –maps from–> Properties –to either–> Nodes or Relationships. It –is a special–> Traversal.",
                src: asset("img/propertygraph/graphdb-index.png"),
                content: "Often, you want to find a specific Node or Relationship according to a Property it has. This special case of Traversal is so common that it is optimized into an Index look-up, for questions like \“find the Account for username master-of-graphs.\”"
            }
        },
        nosql: {
            nosql: {
                type: "article",
                title: "(Neo4j) –[:IS_A]–> (NoSQL Database)",
                src: asset("img/propertygraph/nosql-space.png"),
                content: "<p><strong>N</strong>ot <strong>o</strong>nly <strong>SQL</strong>, but modern choices which excel at answering different kinds of questions.</p>\
            <ul>\
                <li>Average income? Ask an RDBMS\
                <li>Shopping cart? Use a Key-Value Store\
                <li>How did you get here? Ask a graph\
            </ul>"
            },
            rdbms: {
                type: "article",
                title: "(A Graph Database) –[:TRANSFORMS_A]–> (RDBMS)",
                content: "\
                <div><img src=" + asset('img/propertygraph/vs-rdbms.png') + " alt='' title='vs-rdbms' width='270' height='141' />\
                <img src=" + asset('img/propertygraph/as-rdbms.png') + " alt='' title='as-rdbms' width='254' height='289' /></div>\
                <p>Topple the stacks of records in a <strong>Relational Database</strong> while keeping all the relationships, and you’ll see a graph. Where an RDBMS is optimized for aggregated data, Neo4j is optimized for highly connected data.</p>"
            },
            keyvalue: {
                type: "article",
                title: "(A Graph Database) –[:RELATES_A]–> (Key-Value Store)",
                content: "\
                    <div><img src=" + asset('img/propertygraph/vs-key-value.png') + " alt='' title='vs-key-value' width='245' height='76' /><img src=" + asset('img/propertygraph/as-key-value.png') + " alt='' title='as-key-value' width='159' height='241' /></div>\
                    <p>A <strong>Key-Value model</strong> is great for lookups of simple or even complex values. When the values are themselves interconnected, you’ve got a graph. Neo4j lets you traverse quickly among all the connected values.</p>\
                    "
            },
            document: {
                type: "article",
                title: "(A Graph Database) –[:NAVIGATES_A]–> (Document Store)",
                content: "\
                    <div><img src=" + asset('img/propertygraph/vs-document.png') + " alt='' title='vs-document' width='159' height='241' /><img src=" + asset('img/propertygraph/as-document.png') + " alt='' title='as-document' width='267' height='232' /></div>\
                    <p>The container hierarchy of a <strong>Document Database</strong> accommodates nice, schema-free data that can easily be represented as a tree. Which is of course a graph. Refer to other documents (or document elements) within that tree and you have a more expressive representation of the same data that you can easily navigate with Neo4j.</p>"
            }
        },
        learn: {
            title: "What is Neo4j?",
            type: "article",
            content: "Neo4j is an open-source <a href='/learn/graphdatabase'>graph database</a> supported by <a  href='http://neotechnology.com/'>Neo Technology</a>.</p>\
        <p>Neo4j stores data in nodes connected by directed, typed relationships with properties on both, also known as a <a href='/learn/graphdatabase'>Property Graph</a>.</p>\
        <h3>Main features</h3>\
         <ul id='features'>\
            <li><em>intuitive</em>, using a graph model for data representation</li>\
            <li><em>reliable</em>, with full ACID transactions</li>\
            <li><em>durable and fast</em>, using a custom disk-based, native storage engine</li>\
            <li><em>massively scalable</em>, up to several billion nodes/relationships/properties</li>\
            <li><em>highly-available</em>, when distributed across multiple machines</li>\
            <li><em>expressive</em>, with a powerful, human readable <a href='/learn/cypher'>graph query language</a></li>\
            <li><em>fast</em>, with a powerful traversal framework for high-speed graph queries</li>\
            <li><em>embeddable</em>, with a few small jars</li>\
            <li><em>simple</em>, accessible by a convenient <a href='http://docs.neo4j.org/chunked/milestone/rest-api.html'>REST interface</a> or\
                an object-oriented Java <a href='http://api.neo4j.org/1.8.1'>API</a></li>\
                </ul>",
            src: asset('img/neo4j/visually_refcard.gif')
        }

    },
    tracks: {
        java_intro: {
            type: "track",
            title: "Neo4j for Java developers - Intro",
            introText: "As the \"4j\" indicates, Neo4j is a paradise for JVM developers. Welcome to the journey.",
            content: "<p>Welcome to Neo4j. For a Java or JVM-language developer, Neo4j offers a rich set of integration possibilities. Make sure to have looked at our information on <a href='/learn/graphdatabase'>graph databases</a> and Neo4j in general. You should also check out our graph query language Cypher which makes it very easy to get going regardless of the development platform.</p>\
    <p>Neo4j comes in two flavors. The standalone Neo4j-Server can be installed on any machine and then accessed via its REST API. You can then use whatever REST-library you choose for any JVM language. The dedicated Neo4j drivers go beyond that by offering comprehensive APIs for integrating with graph based applications.</p>\
    <p>But you can also run Neo4j embedded in your JVM process, much like HSQL or Derby. This is great for unit testing, but also for high performance / no-network setups. If you use Neo4j embedded you can use the Neo4j Core-API directly. Besides an object oriented approach to the graph database, working with Nodes, Relationships and Paths, it also offers highly customizable high-speed traversal- and graph-algorithm implementations. You can also choose from any useful wrapping drivers that exist either for specific programming languages or that add interesting functionality.</p>\
    <p>One example is Spring Data Neo4j which integrates tightly with the SpringFramework and offers Object-Graph mapping on top of Neo4j. Just to tease your interest - there are hundreds of open source Neo4j-related ecosystem projects, example applications and tutorials that can spark new ideas and possibilities.</p>\
    <p>As a JVM developer you are also on the bright side when it comes to pouring large amounts of data into Neo4j. With its non-transactional batch-insertion facilities it can ingest millions of nodes and relationships in just seconds.</p>"
        },
        jvm_projects: {
            type: "track",
            content: "<ul><!-- todo replace with tiles -->\
                <li>Neo4j Spatial offering geospatial functionality on top of the graph</li>\
                <li>Structr a Java based custom Neo4j backend and CMS frontend</li>\
                <li>Neoclipse an Eclipse RCP based Neo4j workbench</li> \
                <li>Graph Collections a set of in-graph representations of typical data structures, like lists, trees etc.</li>\
                <li>Java Rest Binding which offers a Java API for the Neo4j-Server, built on jersey-client</li>\
                <li>The Neo4j JDBC driver which allows to run Cypher statements via JDBC and integrates so with all JDBC libraries and tools</li>\
                <li><a href='https://github.com/alexsmirnov/neo4j-connector'>Neo4j JCA connector</a></li>\
             </ul>"
        },
        java_basics: {
            type: "track",
            content: "<p>The Neo4j Java API is very easy to use. You can interact with the GraphDatabase, Nodes and Relationships directly.\
                To run more interesting queries or complex operations you can also execute <a href=\"/java/java_cypher\">Cypher</a> from your program.</p>\
        <p>After including Neo4j in your project and <a href=\"/java/ide\">setting up your IDE</a>. See the Hello-World example below for getting started.</p>\
        <h3>Adding the Neo4j dependencies to your project</h3>\
        <% include ../download/_embedded_dependency %><div class=\"markdown\">\
        <%- content.java_hello_world %></div>"
        },
        tracks_server_plugins: {
            type: "track",
            content: "Server plugins are a way of extending the Neo4j Server REST API to provide your own functionality. The process of developing a Server plugin " +
                "is described in the <a href='http://docs.neo4j.org/chunked/milestone/server-plugins.html' target='_blank'>Neo4j Manual Server Plugin Section</a>." +
                "Please refer to that guide in order to provide your own plugin. " +
                "<pre>" +
                "{<br/>" +
                "\"node\" : \"http://localhost:7474/db/data/node\",            <br/>" +
                "\"node_index\" : \"http://localhost:7474/db/data/index/node\",<br/>" +
                "\"relationship_index\" : \"http://localhost:7474/db/data/index/relationship\",<br/>" +
                "\"reference_node\" : \"http://localhost:7474/db/data/node/0\",                  <br/>" +
                "\"extensions_info\" : \"http://localhost:7474/db/data/ext\",                      <br/>" +
                "\"extensions\" : {                                                                  <br/>" +
                "    \"GetAll\" : {                                                                    <br/>" +
                "        \"get_all_nodes\" : \"http://localhost:7474/db/data/ext/GetAll/graphdb/get_all_nodes\",<br/>" +
                "        \"get_all_relationships\" : \"http://localhost:7474/db/data/ext/GetAll/graphdb/getAllRelationships\"<br/>" +
                "    }" +
                "}</pre>"
        },

        cypher_tutorial_1: {
            type: "track",
            introText: "Cypher Tutorial #1",
            content: +
                "<ul>" +
                "<li>Our example graph consists of <code>movies</code> with an <code>id</code>, <code>year</code> and <code>title</code> and <code>actors</code> with a <code>name</code>.    " +
                "Actors have an <code>:ACTS_IN</code> relationship to movies, which represents the <code>role</code> they played, the role relationship has also a <code>role</code> attribute.   " +
                "</li>" +
                "<li> We encourage you to enter the Cypher statements in the interactive console manually, but you can also click on the code snippets." +
                "<br/>      Like   this one" +
                "    < pre > START n = node(*) RETURN \"Hello Graph with \" + count(*) + \" Nodes!\" as welcome; </pre> </li>" +
                "<li>return a single node, by id (The Matrix) <br/><pre>START movie=node(0) RETURN movie;</pre></li>" +
                "<img src = \"" + asset("img/still/cineasts.gif") + "\" height=\"100\"/>" +
                "</ul>"

        },
        cypher_tutorial_2: {
            type: "track",
            introText: "Cypher Tutorial #2",
            content: "content"

        }

    },
    books: {
        graphdatabases: {
            key: "graphdatabases",
            type: "book",
            url: "http://graphdatabases.com",
            name: "Graph Databases",
            author: "Ian Robinson, Jim Webber",
            price: "Free Ebook, Print $29.99",
            logo: asset("img/books/graphdatabases_cover.gif"),
            thumbnail: asset("img/books/graphdatabases_thumb.gif"),
            introText: '<a href="http://graphdatabases.com">First Edition Now Available!</a>  Get the definitive book on graph databases</em>, published by O&#39;Reilly Media.<br />',
            text: "Graph Databases, published by O’Reilly Media, discusses the problems that are well aligned with graph databases, " +
                "with examples drawn from practical, real-world use cases. This book also looks at the ecosystem of complementary technologies, " +
                "highlighting what differentiates graph databases from other database technologies, both relational and NOSQL. Graph Databases " +
                "is written by Ian Robinson, Jim Webber, and Emil Eifrém, graph experts and enthusiasts at Neo Technology, creators of Neo4j.",
            actionText: 'Get your free e-book'
        },
        neo4j20_de: {
            key: "neo4j20_de",
            type: "book",
            url: "http://bit.ly/das-buch",
            name: "Neo4j 2.0 - Eine Graphdatenbank für alle",
            author: "Michael Hunger",
            price: "PDF frei, E-Book: 9,99 EUR; Taschenbuch EUR 12.90",
            logo: asset("img/books/neo4j20_de.jpg"),
            thumbnail: asset("img/books/neo4j20_de_small.jpg"),
            introText: 'Das einzige deutsche Buch zu Neo4j, umfassend und aktuell für Version 2.0. Gratis E-Book zum Download',
            text: "Der Mehrwert von Informationen steckt nicht notwendigerweise in der reinen Menge von Daten, sondern vor allem in den Beziehungen zwischen Elementen. " +
                "Bisher war es nicht so einfach, die interessanten, vernetzten Domänen verlustlos in einer Datenbank zu speichern und effizient abzufragen. " +
                "Neo4j, besonders die neue Version 2.0, erlaubt es, komplexe Datenmodelle direkt zu modellieren und herausfordernde Anwendungsfälle performant umzusetzen. " +
                "In diesem Buch gibt Michael Hunger, langjähriger Mitarbeiter von Neo Technology, an praktischen Beispielen einen Überblick zur Anwendung der quelloffenen " +
                "Graphdatenbank.",
            actionText: 'Jetzt reinschauen'
        },
        springdata: {
            url: "http://shop.oreilly.com/product/0636920024767.do",
            type: "book",
            name: "Spring Data",
            author: "Jon Brisbin, Oliver Gierke, Thomas Risberg, Mark Pollack, Michael Hunger",
            price: "Ebook $23.99, Print $29.99",
            logo: asset("img/books/spring_data.png"),
            introText: 'This book shows you how Spring’s data access framework can help you connect to either non-relational or relational databases, or a combination of the two.'
        },
        goodrelationships: {
            url: "http://www.lulu.com/shop/michael-hunger-and-david-montag-and-andreas-kollegger/good-relationships-the-spring-data-neo4j-guide-book/paperback/product-20201195.html",
            type: "book",
            name: "Good Relationships",
            title: "Good Relationships",
            author: "Michael Hunger with Andreas Kolleger and David Montag",
            price: "$9.95",
            logo: asset("img/books/good_relationships.png"),
            introText: 'This guide introduces you to Spring Data Neo4j, the integration library for Neo4j and Spring.',
            text: 'With Spring Data, the ever popular Spring Framework has cultivated a new patch of ground, bringing Big Data and NOSQL technology like Neo4j to enterprise developers. This guide introduces you to Spring Data Neo4j, using the fast, powerful and scalable graph database Neo4j to enjoy the benefits of having good relationships in your data.'
        },
        nosqldistilled: {
            url: "http://www.amazon.com/gp/product/0321826620/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321826620&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "NoSQL Distilled",
            author: "Pramod J. Sadalage and Martin Fowler",
            introText: "A Brief Guide to the Emerging World of Polyglot Persistence",
            price: "List Price: $39.99",
            logo: asset("img/books/nosql_distilled.png"),
            text: 'Together, Fowler and ThoughtWorks principal consultant Pramod Sadalage thoroughly explain how NoSQL databases work, and why they may often be a superior alternative for Big Data, high-traffic web sites, heavy-duty streaming media delivery, and other demanding environments.'
        },
        sevendatabases: {
            url: "http://www.amazon.com/gp/product/1934356921/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1934356921&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Seven Databases in Seven Weeks",
            author: "Eric Redmond and Jim R. Wilson",
            price: "List Price: $35.00",
            logo: asset("img/books/seven_databases.png"),
            introText: 'Seven Databases explained in week long whirlwind tours with deep dives and good examples.',
            text: 'Seven Databases in Seven Weeks takes you on a tour of some of the hottest open source databases today. In the tradition of Bruce A. Tate\'s Seven Languages in Seven Weeks, this book goes beyond your basic tutorial to explore the essential concepts at the core each technology.'
        },
        neo4jinaction: {
            url: "http://www.manning.com/partner/",
            type: "book",
            name: "Neo4j in Action",
            author: "Jonas Partner and Aleksa Vukotic",
            price: "Ebook - $35.99, Print - $44.99",
            logo: asset("img/books/neo4j_in_action.png"),
            introText: 'Neo4j in Action is a comprehensive guide to Neo4j, aimed mainly at application developers and software architects.',
            text: 'Neo4j in Action is a comprehensive guide to Neo4j, aimed mainly at application developers and software architects. This exciting new book by Jonas Partner and Aleksa Vukotic is the first full length book on Neo4j, covering an introduction to Neo4j, application development with Neo4j, and Neo4j in production.'
        },
        visualcomplexity: {
            url: "http://www.amazon.com/gp/product/1568989369/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1568989369&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Visual Complexity",
            author: "Manuel Lima",
            price: "List Price: $50.00",
            introText: "Mapping Patterns of Information",
            logo: asset("img/books/visual_complexity.png"),
            text: 'From representing networks of friends on Facebook to depicting interactions among proteins in a human cell, Visual Complexity presents one hundred of the most interesting examples of information-visualization by the field\'s leading practitioners.'
        },
        connected: {
            url: "http://www.amazon.com/gp/product/0316036137/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316036137&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Connected",
            introText: "The Surprising Power of Our Social Networks and How They Shape Our Lives — How Your Friends\' Friends\' Friends Affect Everything You Feel, Think, and Do",
            author: "Nicholas A. Christakis and James H. Fowler",
            price: "List Price: $15.99",
            logo: asset("img/books/connected.png"),
            text: 'Renowned scientists Christakis and Fowler present compelling evidence for our profound influence on one another\'s tastes, health, wealth, happiness, beliefs, even weight, as they explain how social networks form and how they operate.'
        }
    },
    apps: {
        flavorwocky: {
            type: "app",
            author: "@luannem",
            url: "http://www.flavorwocky.com",
            name: "Flavorwocky",
            logo: asset("img/apps/flavorwocky.png"),
            text: "A whimsical look at food pairing, graph-style.",
            source: "",
            docs: "",
            site: ""
        },
        route_planner: {
            type: "app",
            author: {"twitter": "@hasCode", "name": "Micha Kops"},
            url: "http://www.hascode.com/2012/01/neo4j-graph-database-tutorial-how-to-build-a-route-planner-and-other-examples/",
            name: "How to build a Route Planner",
            logo: asset("img/apps/flavorwocky.png"),
            text: "Often in the life of developer’s life there is a scenario where using a relational database tends to get complicated or sometimes even slow – especially when there are fragments with multiple relationships or multiple connections present. " +
                " A possible solution might be to switch from a relational database to a graph database – and – neo4j is our tool of choice here. In the following tutorial we’re going to implement several examples to demonstrate the strengths of a graph database .. from a route planner to a social graph.",
            source: "https://bitbucket.org/hascode/neo4j-tutorial",
            docs: "",
            site: ""
        },
        neosocial: {
            type: "app",
            author: "@maxdemarzi",
            url: "http://maxdemarzi.com/2012/08/17/neosocial-connecting-to-facebook-with-neo4j/",
            name: "Neosocial",
            text: "Neosocial: Connecting to Facebook with Neo4j",
            logo: asset("img/apps/neosocial.png")
        },
        typology: {
            type: "app",
            author: "@renepickhardt",
            url: "http://typology.de/",
            logo: asset("img/apps/typology.png"),
            text: "Word typing predictions, based on Neo4j and Google N-Gram data.",
            name: "Typology"
        },
        transportdublin: {
            type: "app",
            author: "@paddydub",
            url: "https://github.com/WhichWay/TransportDublin",
            logo: asset("img/apps/TransportDublin.png"),
            name: "Transport Dublin",
            text: "A Neo4j & Google Maps based Public Transport Route Planner"
        },
        structr: {
            type: "app",
            author: "@amorgner",
            url: "http://structr.org/home",
            logo: asset("img/apps/structr.gif"),
            text: "A Content Management System, build on Neo4j. And a fast and powerful REST backend server to be used on its own.",
            name: "Structr"
        },
        polymap: {
            type: "app",
            author: "Falko Bräutigam",
            url: "http://polymap.org/polymap3/wiki/Screenshots",
            logo: asset("img/apps/polymap.png"),
            text: "A web based GIS system running on top of OpenStreetMap and other datasources, integrating with Neo4j Spatial.",
            name: "Polymap"
        },
        assim_mon: {
            type: "app",
            author: "Alan Robertson",
            url: "http://assimmon.org/",
            logo: asset("img/logo/assimmon.gif"),
            text: "An open source project that discovers your infrastructure and creates a graph around it - and keeps it continually up to date without setting off any network security alarms",
            name: "Assimilation Monitoring"
        },
        sylvadb: {
            type: "app",
            author: "Javier de la Rosa",
            name: "Sylva DB Modeling Workbench",
            url: "http://sylvadb.org",
            logo: "http://beta.sylvadb.com/static/img/sylva_logo_header.png",
            text: "Sylva is a free, easy-to-use, flexible, and scalable database management system that helps you collect, collaborate, visualize and query large data sets."
        },
        frostymug: {
            type: "app",
            author: "@josh_adell",
            url: "http://frostymug.herokuapp.com",
            logo: asset("img/apps/frostymug.png"),
            text: "A proof-of-concept beer recommendation engine, built by Josh Adell",
            name: "Frosty Mug"
        }
    },
    projects: {
        neoclipse: {
            type: "app",
            author: "@nawroth",
            url: "https://github.com/neo4j-contrib/neoclipse",
            logo: asset("img/apps/neoclipse.png"),
            text: "An Eclipse-RCP based visualization and query tool for Neo4j",
            name: "Neoclipse"
        },
        neo4j_org: {
            type: "app",
            author: "@mesirii",
            url: "https://github.com/neo4j-contrib/neo4j-org",
            logo: asset("img/logo/forkme.png"),
            introText: "The source code of this neo4j.org website on Github. Feel free to chip in and provide corrections, new shiny stuff and improvements!",
            name: "Neo4j-org",
            actionText: "Fork and Contribute"
        },
        graph_collections: {
            type: "app",
            author: "@peterneubauer",
            url: "https://github.com/neo4j/graph-collections",
//            logo: asset("img/apps/spatial.png"),
            text: "Graph Collections a set of in-graph representations of typical data structures, like lists, trees etc.",
            name: "Neo4j Graph-Collections"
        },
        java_rest_binding: {
            type: "app",
            author: "@mesirii",
            url: "https://github.com/neo4j/java-rest-binding",
//            logo: asset("img/apps/spatial.png"),
            text: "Java Rest Binding which offers a Java API for the Neo4j-Server, built on jersey-client",
            name: "Neo4j Java-REST-binding"
        },
        jdbc: {
            type: "link",
            author: ["rickardoberg", "mesirii"],
            src: "https://github.com/neo4j-contrib/neo4j-jdbc",
            thumbnail: "http://rickardoberg.files.wordpress.com/2011/12/screen-shot-2011-12-19-at-5-31-52-pm.png",
            introText: "The Neo4j JDBC driver allows to access Neo4j server, embedded and in-memory databases via the JDBC API using Cypher. It also supports the <a href='http://docs.neo4j.org/chunked/milestone/rest-api-transactional.html'>transactional HTTP endpoint of Neo4j 2.0</a>. " +
                "It was initially created by <a href='http://rickardoberg.wordpress.com/2011/12/19/creating-a-jdbc-driver-for-neo4j/'>Rickard Öberg</a> and then continued to be developed by the Neo4j Community. " +
                "The driver is available on <a href='https://github.com/neo4j-contrib/neo4j-jdbc#neo4j-jdbc-driver'>GitHub</a>.",
            title: "Neo4j JDBC driver project",
            github: "https://github.com/neo4j-contrib/neo4j-jdbc"
        },
        jpa: {
            type: "link",
            author: "@alexsmirnov",
            url: "https://github.com/alexsmirnov/neo4j-connector",
            thumbnail: asset("img/languages/java.jpg"),
            introText: "Standard JCA 1.6 connector, that can be installed on any Java EE 6 compatible server.",
            title: "Neo4j JPA driver"
        },
        gremlin_plugin: {
            type: "app",
            author: "@peterneubauer",
            url: "https://github.com/neo4j-contrib/gremlin-plugin",
            logo: "https://github.com/tinkerpop/gremlin/raw/master/doc/images/gremlin-logo.png",
            text: "A Neo4j Server plugin to execute Gremlin queries against the Neo4j REST API.",
            name: "Neo4j Server Gremlin plugin"
        }


    },
    drivers: {
        cyphernet: {
            type: "driver",
            name: "CypherNet",
            authors: ["@mtranter"],
            source: "https://github.com/mtranter/CypherNet",
            docs: "https://github.com/mtranter/CypherNet#cyphernet",
            url: "http://mtranter.com/2013/09/21/cypher-net-a-neo4j-cypher-api/",
            site: "http://mtranter.com/2013/09/21/cypher-net-a-neo4j-cypher-api/",
            logo: asset("img/languages/dotnet.png"),
            text: "A .Net API for the Neo4j HTTP Transactional Endpoint. (v2.0.0) Exposes strongly typed Graph Query API based on the Neo4j Cypher Query Language.",
            tags: ["dotnet", "rest", "cypher","transactional"]
        },
        anorm_cypher: {
            type: "driver",
            name: "AnormCypher",
            authors: ["@wefreema"],
            source: "https://github.com/AnormCypher/AnormCypher",
            docs: "https://github.com/AnormCypher/AnormCypher/blob/master/readme.md#anormcypher",
            url: "http://anormcypher.org",
            site: "http://anormcypher.org",
            logo: asset("img/languages/scala.png"),
            text: "A Cypher-oriented Scala library modeled after the Play! framework's Anorm library.",
            tags: ["scala", "rest", "cypher"]
        },
        gremlin: {
            type: "driver",
            name: "Gremlin",
            authors: ["@tinkerpop"],
            source: "https://github.com/tinkerpop/gremlin",
            docs: "https://github.com/tinkerpop/gremlin/wiki",
            url: "https://github.com/tinkerpop/gremlin",
            site: "http://www.tinkerpop.com",
            logo: "http://www.tinkerpop.com/images/gremlin-character.png",
            text: "Gremlin is a Groovy DSL by the Tinkerpop community for expressing graph traversals using the underlying <a href='https://github.com/tinkerpop/pipes'>pipes framework</a> that sits on top of <a href='https://github.com/tinkerpop/blueprints/tree/master/blueprints-neo4j-graph'>blueprints-neo4j</a>",
            tags: ["groovy", "rest", "gremlin"]
        },
        neo4j_rest: {
            type: "driver",
            url: "http://docs.neo4j.org/chunked/milestone/rest-api.html",
            authors: ["@neo4j"],
            tags: ["java", "rest"],
            logo: asset("img/languages/neo4jrest.png"),
            name: "Neo4j REST API",
            text: "Discoverable, language-neutral data access from anything that can send HTTP requests. You could write a whole application with just bash scripts and curl."
        },
        spring_data_neo4j: {
            type: "driver",
            tags: ["java", "jvm", "rest", "spring", "ogm"],
            authors: ["@neo4j"],
            url: "/develop/spring",
            logo: asset("img/languages/sdn.png"),
            name: "Spring Data Neo4j",
            text: "Familiar POJO-based development, enabling object-to-graph mapping using annotations. Amazingly simple, with full graph power just a traversal query away."
        },
        neo4j_java: {
            type: "driver",
            tags: ["jvm", "java"],
            authors: ["@neo4j"],
            url: "http://docs.neo4j.org/chunked/stable/tutorials-java-embedded.html",
            logo: asset("img/languages/embedded.png"),
            name: "Java API",
            text: "For intimate access, talk directly to Neo4j&#39;s graph engine directly in your JVM based application. Full feature parity with Neo4j Server, including HA clustering."
        },
        neo4j_rb: {
            type: "driver",
            tags: ["ruby", "jvm", "ogm"],
            authors: ["@ronge"],
            url: "https://github.com/andreasronge/neo4j",
            logo: asset("img/languages/rails.png"),
            name: "neo4j.rb",
            text: "Ruby on Rails? Try coasting along graph paths with Neo4j. Everything you know and love, wrapped with graph glory."
        },
        pacer: {
            type: "driver",
            tags: ["ruby", "jvm", "dsl"],
            authors: [{name:"Darrick Wiebe",twiter:"darrickwiebe"}],
            url: "https://github.com/pangloss/pacer",
            logo: asset("img/languages/jruby-logo.png"),
            name: "Pacer",
            text: "Express yourself clearly and model your application in terms you understand with Pacer - a JRuby gem for building embedded Neo4j applications."
        },
        neo4j_core: {
            type: "driver",
            tags: ["ruby", "jvm"],
            authors: ["@ronge"],
            url: "https://github.com/andreasronge/neo4j-core",
            logo: asset("img/languages/ruby.png"),
            name: "neo4j-core",
            text: "For a fast and simple JRuby binding to the embedded Neo4j Java API. This gem is used by neo4j.rb"
        },
        neography: {
            type: "driver",
            tags: ["ruby", "rest"],
            authors: ["@maxdemarzi"],
            url: "https://github.com/maxdemarzi/neography/",
            logo: asset("img/languages/ruby.png"),
            name: "Neography",
            text: "For native Ruby access to Neo4j, Neography provides a thin, elegant wrapper around the REST API. "
        },
        neo4jphp: {
            type: "driver",
            tags: ["php", "rest"],
            url: "https://github.com/jadell/neo4jphp/wiki/Introduction",
            authors: ["@josh_adell"],
            logo: asset("img/languages/php.png"),
            name: "Neo4jPHP",
            text: "Neo4jPHP provides an API that is both intuitive and flexible, and it takes advantage of 'under-the -hood' performance enhancements, such as caching and lazy-loading. "
        },
        neo4jclient: {
            type: "driver",
            tags: ["dotnet", "rest"],
            authors: ["@tathamoddie", "@romikoderbynew"],
            url: "http://nuget.org/packages/Neo4jClient",
            source: "https://github.com/Readify/Neo4jClient",
            docs: "https://github.com/Readify/Neo4jClient/wiki",
            logo: asset("img/languages/dotnet.png"),
            name: "Neo4jClient",
            text: "A .NET client for Neo4j, which makes it easy to write Cypher queries in C# with IntelliSense. Also supports basic CRUD, legacy indexing and Gremlin."
        },
        py2neo: {
            type: "driver",
            tags: ["python", "rest"],
            url: "http://py2neo.org/",
            site: "http://py2neo.org/",
            authors: ["@technige"],
            logo: asset("img/languages/py2neo.png"),
            name: "py2neo",
            text: "Py2neo is a simple and pragmatic Python library that provides access to the popular graph database Neo4j via its RESTful web service interface.",
            source: "https://github.com/nigelsmall/py2neo"
        },
        neomodel: {
            type: "driver",
            tags: ["python", "rest", "ogm"],
            url: "https://github.com/robinedwards/neomodel",
            site: "http://skillsmatter.com/podcast/nosql/case-study-how-sharehoods-created-neomodel-along-the-way",
            authors: ["@robsmoniker"],
            logo: "https://raw.github.com/robinedwards/neomodel/master/art/neomodel-148.png",
            name: "neomodel",
            text: "An Object Graph Mapper (OGM) for the neo4j graph database built on top of py2neo",
            source: "https://github.com/robinedwards/neomodel",
            docs: "https://github.com/robinedwards/neomodel/blob/master/README.rst"
        },
        neo4j_python: {
            type: "driver",
            tags: ["python", "jvm"],
            authors: ["@neo4j"],
            url: "http://pypi.python.org/pypi/neo4j-embedded",
            docs: "http://docs.neo4j.org/drivers/python-embedded/snapshot/",
            logo: asset("img/languages/python.png"),
            name: "Neo4j Python",
            text: "The JVM based Python integration for Neo4j uses JPype. More details in the <a href='http://docs.neo4j.org/drivers/python-embedded/snapshot/'>Neo4j manual.</a>"
        },
        grails: {
            type: "driver",
            tags: ["groovy", "grails", "jvm", "ogm"],
            authors: ["@darthvader42"],
            url: "http://www.grails.org/plugin/neo4j",
            site: "http://www.grails.org/plugin/neo4j",
            docs: "http://springsource.github.com/grails-data-mapping/neo4j/manual/index.html",
            source: "https://github.com/grails/grails-data-mapping/tree/master/grails-datastore-gorm-neo4j",
            logo: asset("img/languages/grails.png"),
            name: "Neo4j Grails Plugin",
            text: "A plugin that integrates the Neo4j graph database into Grails, providing a GORM API onto it"
        },
        node_neo4j: {
            type: "driver",
            tags: ["js", "rest", "nodejs"],
            authors: ["@aseemk", "@gasi"],
            url: "https://github.com/thingdom/node-neo4j",
            docs: "http://coffeedoc.info/github/thingdom/node-neo4j/",
            source: "https://github.com/thingdom/node-neo4j",
            logo: asset("img/languages/nodejs.png"),
            name: "node-neo4j",
            text: "Node.js driver for Neo4j. Cleverly asynchronous, and blazingly fast. "
        },
        node_neo4j_embedded: {
            type: "driver",
            tags: ["js", "jvm", "nodejs"],
            authors: {twitter:"@whitefrog_de",name:"Jochen Weis"},
            url: "http://joewhite86.wordpress.com/2013/07/08/introducing-neo4j-embedded-a-neo4j-driver-for-node-js/",
            docs: "http://docs.whitefrog.de/neo4j-embedded/",
            source: "https://github.com/joewhite86/node-neo4j-embedded",
            logo: asset("img/languages/nodejs.png"),
            name: "node-neo4j-embedded",
            text: "Node.js driver for the embedded Neo4j Database. Supports HA Setups, API is built to be as close to the Java API as possible."
        },
        neo4js: {
            type: "driver",
            tags: ["js", "rest", "nodejs"],
            authors: ["@neo4j"],
            url: "https://github.com/neo4j/neo4js",
            logo: asset("img/languages/js.gif"),
            name: "Neo4js",
            text: "Neo4j REST client for JavaScript, used in Neo4j Web-UI, makes use of promises to handle deferred responses. Needs jQuery to run."
        },
        neocons: {
            type: "driver",
            tags: ["clojure", "rest", "jvm"],
            authors: ["@michaelklishin"],
            url: "http://clojureneo4j.info/",
            docs: "http://clojureneo4j.info/articles/getting_started.html",
            source: "https://github.com/michaelklishin/neocons",
            forum: "https://groups.google.com/forum/#!forum/clojure-neo4j",
            logo: asset("img/languages/clojure.png"),
            name: "Neocons",
            text: "An idiomatic, feature rich Clojure client which supports (almost) all Neo4J REST API features and is constantly tested against bleeding edge server changes, like the Cypher language improvements. " },
        borneo: {
            type: "driver",
            tags: ["clojure", "jvm"],
            authors: ["@wagjo"],
            url: "https://github.com/wagjo",
            docs: "http://wagjo.github.io/borneo/",
            source: "https://github.com/wagjo",
            logo: asset("img/languages/clojure.png"),
            name: "Borneo",
            text: "Clojure wrapper for Neo4j, a graph database, in embedded JVM mode." },
        bulbflow: {
            type: "driver",
            tags: ["python", "rest", "ogm"],
            authors: ["@espeed"],
            url: "http://bulbflow.com/overview/",
            logo: asset("img/languages/bulbflow.png"),
            name: "Bulbflow",
            text: "Bulbs is an open-source Python persistence framework for graph databases and the first piece of a larger Web-development toolkit. It’s like an ORM for graphs. "
        },
        keymaker: {
            type: "driver",
            tags: ["ruby", "rest"],
            authors: ["@therubymug"],
            url: "http://github.com/therubymug/keymaker",
            logo: asset("img/languages/ruby.png"),
            name: "Keymaker",
            text: "A multi-layer REST API Ruby wrapper for the Neo4j graph database built on top of Faraday." },
        neoid: {
            type: "driver",
            authors: ["@elado"],
            tags: ["ruby", "rest", "ogm"],
            url: "https://github.com/elado/neoid",
            logo: asset("img/languages/rails.png"),
            name: "Neoid",
            text: "Make your ActiveRecords stored and searchable on Neo4j graph database. With Neoid, queries that would make MySQL crawl become super fast. You get the benefits of Neo4j speed while keeping your schema on your plain old RDBMS. "
        },
        neo4django: {
            type: "driver",
            tags: ["python", "rest", "django", "ogm"],
            authors: ["@mhluongo"],
            url: "https://github.com/scholrly/neo4django",
            logo: asset("img/languages/django.png"),
            name: "neo4django",
            text: "neo4django is an Object Graph Mapper (OGM) for Django. Use familiar Django models and queries against Neo4j."
        },
        neo4j_rest_client: {
            type: "driver",
            tags: ["python", "rest"],
            authors: ["@versae"],
            url: "http://readthedocs.org/docs/neo4j-rest-client/en/latest/",
            logo: asset("img/languages/python.png"),
            source: "https://github.com/versae/neo4j-rest-client",
            name: "Neo4j Rest Client",
            text: "Object-oriented Python library to interact with Neo4j standalone REST server"
        },
        neo4p: {
            type: "driver",
            tags: ["perl", "rest"],
            authors: ["@thinkinator"],
            url: "https://metacpan.org/release/REST-Neo4p",
            logo: asset("img/languages/perl.png"),
            name: "REST::Neo4p",
            text: "Works with the Neo4j's REST by using Perl5 objects in a Perl person's favorite way."
        },
        scala: {
            type: "driver",
            tags: ["scala", "jvm"],
            authors: ["@fakod"],
            url: "https://github.com/FaKod/neo4j-scala/",
            logo: asset("img/languages/scala.png"),
            name: "Neo4j Scala",
            text: "A Scala wrapper for Neo4j which introduces an intuitive DSL for graph operations."
        },
        haskell: {
            type: "driver",
            tags: ["haskell", "rest"],
            authors: ["@bogiebro"],
            url: "http://hackage.haskell.org/package/cypher-0.8",
            logo: asset("img/languages/haskell.png"),
            name: "Haskell Cypher",
            text: "Haskell Cypher makes it easy to send cypher commands to neo4j servers over the REST API. Additionally, it allows users to parse haskell datatypes from cypher queries."
        },
        datanucleus: {
            type: "driver",
            tags: ["java", "jvm", "jpa", "ogm"],
            authors: ["@datanucleus"],
            url: "http://www.datanucleus.org/plugins/store.neo4j.html",
            logo: asset("img/languages/datanucleus.png"),
            name: "DataNucleus Neo4j Plugin",
            text: "datanucleus-neo4j provides persistence of Java objects to Neo4j. It builds on top of the basic persistence provided by datanucleus-core."
        },
        neoism: {
             type: "driver",
             url: "https://github.com/jmcvetta/neoism",
             logo: asset("img/languages/neoism.png"),
             authors: ["Jason McVetta"],
             tags: ["go", "rest"],
             name: "Neoism",
             text: "Neoism is a Go client library providing access to the Neo4j graph database via its REST API."
        },
        neo4j_go: {
            type: "driver",
            url: "https://github.com/davemeehan/Neo4j-GO",
            logo: asset("img/languages/go.png"),
            authors: ["@packetdrop"],
            tags: ["go", "rest"],
            name: "Neo4j GO",
            text: "A Neo4j REST client in the GO language."
        },
        kundera: {
            type: "driver",
            url: "https://github.com/impetus-opensource/Kundera",
            forum: "http://groups.google.com/group/kundera-discuss",
            source: "https://github.com/impetus-opensource/Kundera",
            docs: "https://github.com/impetus-opensource/Kundera/wiki/Graph-Database-Support",
            examples: "http://github.com/impetus-opensource/Kundera-Examples",
            logo: "http://mail.varindia.com/images/Impetus_Logo.gif",
            authors: ["Amresh Amry"],
            tags: ["jvm", "jpa", "ogm"],
            name: "Kundera",
            text: "Kundera is a JPA 2.0 compliant, object-datastore mapping library for NoSQL datastores."
        },
        neo4j_js: {
            type: "driver",
            url: "https://github.com/bretcope/neo4j-js",
            forum: "https://github.com/bretcope/neo4j-js/issues",
            source: "https://github.com/bretcope/neo4j-js",
            docs: "https://github.com/bretcope/neo4j-js/blob/master/docs/Documentation.md",
            examples: "https://github.com/bretcope/neo4j-js#usage",
            logo: asset("img/languages/js.gif"),
            authors: ["Bret Copeland"],
            tags: ["rest", "javascript"],
            name: "Neo4j-js",
            text: "A Node.js (pure JavaScript) client library for accessing neo4j databases with batch support."
        }
    },
    asciidoc: {
        simple_asciidoc: {
            type: "asciidoc",
            url: "https://api.github.com/gists/ca811daa580aee95bd07"
        }
    },
    graphgists: {}
};
exports.video = function(id) { 
    return function() {
        // console.log("video",id,exports.content.videos[id.toString()]);
        return exports.content.videos[id.toString()];
    }
};
exports.graphgist = function(id) {
    return function() {
        // console.log("video",id,exports.content.videos[id.toString()]);
        return exports.content.graphgists[id.toString()];
    }
};
exports.findItem = function (key) {

};
exports.lookup = function (id,type) {
    return function () {
        console.log("lookup/findItem",type,id,findItem(id),"type");
        return findItem(id,type);
    }
};
