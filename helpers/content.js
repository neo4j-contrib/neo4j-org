exports.content = {
    videos: {

        neo4j_webui: {
            title: "Neo4j Server Web Interface",
            type: "video",
            introText: "<p>The Data Browser Tab offers a handy visualization of your graph. You can select the nodes to be shown by id,  index lookup or <a href='/learn/cypher'>cypher query</a>. A style editor will adapt the visualization to your needs.</p>\
                                <p>The Neo4j Server Web Interface was written using arbor.js and canvas.</p>",
            thumbnail: "/assets/img/still/server_visualization.jpg",
            src: "https://player.vimeo.com/video/58016492"
        },
        graphviz: {
            title: "GraphViz",
            type: "video",
            introText: "<p>Using the GraphViz Exporter it is possible to generate <code>.dot</code> files which can then be rendered as images using graphviz' dot toolchain.\
              See this <a href='http://blog.neo4j.org/2012/05/graph-this-rendering-your-graph-with.html' target='_blank'>blog post</a> for details.</p>",
            thumbnail: "/assets/img/still/server_visualization.jpg"
        },
        neo4j_heroku_gdocs: {
            type: "video",
            title: "Screencast: Integrate Neo4j, Heroku and Google Docs",
            introText: "A screencast about deploying an application using the Neo4j add-on on Heroku to expose a readonly Cypher endpoint. Then integrating with a Google Spreadsheet for querying and rendering of the results. For step by step instructions, code and sample data see here: http://blog.neo4j.org/2011/12/neo4j-labs-heroku-neo4j-and-google.html",
            thumbnail: "http://vidcaster-media.s3.amazonaws.com/sites/145/videos/67656/freeze/thumbs/120x6816U7J.jpg",
            src: "http://video.neo4j.org/player/U4Yq"
        },
        production_secrets: {
            title: "Production Secrets",
            type: "video",
            thumbnail: "/assets/img/still/secrets.png",
            introText: "Maybe a day or two before you get featured on Techcrunch, make sure your application is fully production-ready.",
            src: "http://player.vimeo.com/video/49485027"
        },
        why_graphs: {
            title: "Why Graphs",
            type: "video",
            thumbnail: "/assets/img/still/emil-explains.jpg",
            introText: "Emil Eifrem explains the secret behind websites like Twitter, Yelp and Facebook.",
            src: "http://player.vimeo.com/video/56040747"
        },
        ha: {
            title: "High Availability",
            type: "video",
            thumbnail: "/assets/img/still/ha_video.gif",
            introText: "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
            src: "http://player.vimeo.com/video/51906007"
        },
        good_relationships: {
            title: "Good Relationships",
            type: "video",
            thumbnail: "/assets/img/still/sdn-intro.png",
            introText: "Michael Hunger introduces <a target='_blank' href='http://www.infoq.com/minibooks/good-relationships-spring-data'>Good Relationships</a>, the SDN book.",
            src: "http://www.youtube.com/embed/heC-8Pq2exQ"
        },
        cypher: {
            title: "Query with Cypher",
            type: "video",
            thumbnail: "/assets/img/still/cypher.png",
            introText: "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
            src: "http://player.vimeo.com/video/50389825"
        },
        james_ward_neo4j: {
            title: "James Ward on Neo4j",
            type: "video",
            author: "_JamesWard",
            thumbnail: "/assets/img/still/jamesward.jpg",
            introText: "James Ward shows how to build and deploy a Neo4j based app on heroku.",
            src: "http://player.vimeo.com/video/53221343"
        },
        installing_neo4j: {
            title: "Installing Neo4j",
            type: "video",
            thumbnail: "/assets/img/still/install.gif",
            introText: "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
            src: "http://player.vimeo.com/video/53838744"
        },
        graphdb101: {
            title: "Graph DB 101",
            type: "video",
            author: "akollegger",
            thumbnail: "/assets/img/still/graphdb-intro.png",
            introText: "A pleasant stroll through general concepts, and Neo4j particulars.",
            src: "http://player.vimeo.com/video/46886385"
        }
    },
    links: {
        stack_overflow: {
            title: "Stack Overflow",
            path: "http://stackoverflow.com/questions/tagged/neo4j",
            thumbnail: "/assets/img/logo/stackoverflow.png",
            introText: "Find answers or reach to fellow developers with questions.",
            actionText: "Ask Neo4j questions"
        },
        mailing_list: {
            title: "Neo4j Google Group",
            path: "http://groups.google.com/group/neo4j",
            thumbnail: "/assets/img/logo/googlegroups.png",
            introText: "Share your experiences and expertise with fellow graphistas.",
            actionText: "Join now"
        },
        github_neo4j: {
            title: "GitHub Issues",
            path: "http://stackoverflow.com/questions/tagged/neo4j",
            thumbnail: "/assets/img/logo/github.png",
            introText: "Encountered an issue with Neo4j? Submit it here.",
            actionText: "Report issue"
        },
        partners_graph: {
            title: "Partners Graph",
            introText: "Neo Technology works with a large, worldwide partner network which provide local consulting and training services.",
            path: "http://www.neotechnology.com/partners/"
        },
        neo4j_ref_card: {
            type: "external",
            title: "Neo4j Reference Card",
            introText: "Visualize the concepts of the graph as a graph, how much more meta can you go?",
            thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
            path: "http://visual.ly/whats-graph-database"
        },
        javadoc: {
            title: "API JavaDoc",
            path: "http://api.neo4j.org/current/",
            thumbnail: "/assets/img/languages/java.jpg",
            introText: "Check out the Java API of the current milestone.",
            actionText: "Browse JavaDoc"
        },
        manual: {
            title: "Manual: the Java Tutorial",
            path: "http://docs.neo4j.org/chunked/snapshot/tutorials-java-embedded.html",
            thumbnail: "/assets/img/languages/java.jpg",
            introText: "In the tutorial you will find everything needed — from setting up the environment to doing something useful with your data.",
            actionText: "Go to the manual"
        },
        manual_server: {
            title: "Neo4j Server manual",
            path: "http://docs.neo4j.org/chunked/milestone/server.html",
            thumbnail: "/assets/img/languages/java.jpg",
            introText: "Neo4j server manual sections",
            actionText: "Browse the neo4j server manual"
        },
        manual_cypher: {
            title: "Cypher Reference",
            path: "http://docs.neo4j.org/chunked/milestone/cypher-query-lang.html",
            introText: "Cypher is a declarative graph query language that allows for expressive and efficient querying and updating of the graph store without having to write traversals through the graph structure in code.",
            actionText: "Cypher Manual"
        },
        cypher_cheat_sheet: {
            title: "Cypher Cheat Sheet (PDF)",
            path: "/resources/cypher",
            introText: "Download the Cypher Cheat Sheet as PDF",
            actionText: "Download PDF"
        },

        d3: {
            title: "JavaScript D3.js",
            type: "image",
            introText: "<p>D3 is the most powerful javascript visualization library which supports a large number of visualizations, many of them are usable for graphs as well, <a href='http://maxdemarzi.com/tag/visualization-2/' target='_blank'>Max De Marzi</a> covered several of the visualizations on his blog.</p>",
            thumbnail: "/assets/img/still/d3_network.png",
            src: "/assets/img/still/server_visualization.jpg"
        },
        gephi: {
            title: "Gephi",
            type: "image",
            introText: "<p>The well known Graph visualization tool Gephi has a <a href='http://gephi.org/tag/neo4j/' target='_blank'>plugin for importing Neo4j</a> Databases which can then be visualized and rendered with the full power of Gephi's engines.</p>",
            thumbnail: "/assets/img/still/server_visualization.jpg",
            src: "http://player.vimeo.com/video/31823202?badge=0&byline=0&portrait=0&title=0"
        }

    },
    articles: {
        meetups: {
            type: "article",
            title: "",
            introText: "(TODO) Introtext meetups",
            content: "TODO: Content for meetup page"
        },
        neo4j_on_heroku: {
            type: "article",
            title: "Neo4j on Heroku",
            introText: "Neo4j on Heroku",
            content: "<p>As a platform-as-a-service (PAAS) provider, Heroku offers a quick way from your locally developed app to a managed deployment in the cloud.</p>\
                <p>The ability of adding different hosted services is crucial for the daily needs of a modern day web-application.</p>\
                <p>To run a Neo4j graph powered app on Heroku you can easily add the Neo4j Add-on.</p>"
        },
        licensing_guide: {
            title: "Pragmatic licensing guide",
            introText: "Understand which license you need and how Neo Technology can help you.",
            type: "article",
            content: "<p>Neo4j is commercial software. Proven in production since 2003, powering applications from global collaborative websites to in-house experiments, Neo4j is used in diverse environments.</p>\
    <p><a href='http://neotechnology.com'>Neo Technology</a> makes Neo4j available under a dual-license arrangement that is business friendly and open-source transparent: the Neo Technology Commercial License (NTCL), or the (A)GPLv3. Neo Technology also takes care of Neo4j customer support, (OEM) license agreements, the Partner Network, and more.</p>\
    <p>There are 3 editions of Neo4j:</p>\
    <ul>\
    <li><b>Neo4j Community</b>, a High Performance, fully ACID transactional graph database\
    <li><b>Neo4j Advanced</b> includes Advanced Monitoring\
    <li><b>Neo4j Enterprise</b> includes Online Backup, High Availability Clustering, and Advanced Monitoring\
    </ul>\
    <p>Commercial Licenses include the permission to integrate the enterprise editions in closed-source software products, service and support by Neo Technology.</p>"
        },

        partner_graph: {
            title: "Neo4j Partners Graph",
            introText: "The Neo4j Partner Graph provides market differentiation and sustainable revenue opportunities for its members.",
            type: "article",
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
        graph: {
            type: "article",
            title: "A Graph contains Nodes and Relationships",
            src: "/assets/img/propertygraph/graphdb-gve.png",
            content: "<p>A Graph –[:RECORDS_DATA_IN]–> Nodes –[:WHICH_HAVE]–> Properties.</p>The simplest possible graph is a single Node, a record that has named values referred to as Properties. A Node could start with a single Property and grow to a few million, though that can get a little awkward. At some point it makes sense to distribute the data into multiple nodes, organized with explicit Relationships."
        },
        graphdb_traversal: {
            type: "article",
            title: "Query a Graph with a Traversal",
            introText: "A Traversal –navigates–> a Graph; it –identifies–> Paths –which order–> Nodes.",
            src: "/assets/img/propertygraph/graphdb-traverse.png",
            content: "A Traversal is how you query a Graph, navigating from starting Nodes to related Nodes according to an algorithm, finding answers to questions like \“what music do my friends like that I don’t yet own,\” or \“if this power supply goes down, what web services are affected?\”"
        }, graphdb_indexes: {
            type: "article",
            title: "Indexes Look-up Nodes or Relationships",
            introText: "An Index –maps from–> Properties –to either–> Nodes or Relationships. It –is a special–> Traversal.",
            src: "/assets/img/propertygraph/graphdb-index.png",
            content: "Often, you want to find a specific Node or Relationship according to a Property it has. This special case of Traversal is so common that it is optimized into an Index look-up, for questions like \“find the Account for username master-of-graphs.\”"
        },
        learn: {
            type: "article",
            content: "Neo4j is an open-source <a href='/learn/graphdatabase'>graph database</a> supported by <a onclick=\"javascript:pageTracker._trackPageview(\'/outgoing/neotechnology.com/');\" href='http://neotechnology.com/''>Neo Technology</a>.</p>\
        <p>Neo4j stores data in nodes connected by directed, typed relationships with properties on both, also known as a <a href='/learn/graphdatabase'>Property Graph</a>.</p>\
        <h3>Neo4j is</h3>\
         <ul id='features'>\
            <li><em>intuitive</em>, using a graph model for data representation</li>\
            <li><em>reliable</em>, with full ACID transactions</li>\
            <li><em>durable and fast</em>, using a custom disk-based, native storage engine</li>\
            <li><em>massively scalable</em>, up to several billion nodes/relationships/properties</li>\
            <li><em>highly-available</em>, when distributed across multiple machines</li>\
            <li><em>expressive</em>, with a powerful, human readable <a href='/learn/cypher'>graph query language</a></li>\
            <li><em>fast</em>, with a powerful traversal framework for high-speed graph queries</li>\
            <li><em>embeddable</em>, with a few small jars</li>\
            <li><em>simple</em>, accessible by a convenient <a onclick=\"javascript:pageTracker._trackPageview('/outgoing/docs.neo4j.org/chunked/stable/rest-api.html');\" href='http://docs.neo4j.org/chunked/1.8.1/rest-api.html'>REST interface</a> or\
                an object-oriented Java <a onclick=\"javascript:pageTracker._trackPageview('/outgoing/api.neo4j.org/');\" href='http://api.neo4j.org/1.8.1'>API</a>"
        }

    },
    tracks: {
        java: {
            type: "track",
            title: "Java Intro",
            introText: "As the 4j indicates, Neo4j is a paradise for JVM developers. Welcome to the journey.",
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
        nosql: {
            type: "track",
            introText: "(Neo4j) –[:IS_A]–> (NoSQL Database)",
            content: "<p><strong>N</strong>ot <strong>o</strong>nly <strong>SQL</strong>, but modern choices which excel at answering different kinds of questions.</p>\
        <ul>\
            <li>Average income? Ask an RDBMS\
            <li>Shopping cart? Use a Key-Value Store\
            <li>How did you get here? Ask a graph\
        </ul>"
        }

    },
    books: {
        graphdatabases: {
            type: "book",
            url: "http://graphdatabases.com",
            name: "Graph Databases",
            author: "Jim Webber, Ian Robinson",
            price: "Early Release Ebook, free",
            logo: "/assets/img/books/graphdatabases_thumb.png",
            text: '<a href="http://graphdatabases.com">Exclusive early access</a>  to the definitive book on graph databases</em>, published by O&quot;Reilly Media.<br />'
        },
        springdata: {
            url: "http://shop.oreilly.com/product/0636920024767.do",
            type: "book",
            name: "Spring Data",
            author: "Jon Brisbin, Oliver Gierke, Thomas Risberg, Mark Pollack, Michael Hunger",
            price: "Early Release Ebook $23.99",
            logo: "/assets/img/books/spring_data.png",
            text: 'This book shows you how Spring’s data access framework can help you connect to either non-relational or relational databases, or a combination of the two.'
        },
        goodrelationships: {
            url: "http://www.lulu.com/shop/michael-hunger-and-david-montag-and-andreas-kollegger/good-relationships-the-spring-data-neo4j-guide-book/paperback/product-20201195.html",
            type: "book",
            name: "Good Relationships",
            author: "Michael Hunger with Andreas Kolleger and David Montag",
            price: "$9.95",
            logo: "/assets/img/books/good_relationships.png",
            text: 'With Spring Data, the ever popular Spring Framework has cultivated a new patch of ground, bringing Big Data and NOSQL technology like Neo4j to enterprise developers. This guide introduces you to Spring Data Neo4j, using the fast, powerful and scalable graph database Neo4j to enjoy the benefits of having good relationships in your data.'
        },
        nosqldistilled: {
            url: "http://www.amazon.com/gp/product/0321826620/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321826620&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "NoSQL Distilled",
            author: "Pramod J. Sadalage and Martin Fowler",
            introText: "A Brief Guide to the Emerging World of Polyglot Persistence",
            price: "List Price: $39.99",
            logo: "/assets/img/books/nosql_distilled.png",
            text: 'Together, Fowler and ThoughtWorks principal consultant Pramod Sadalage thoroughly explain how NoSQL databases work, and why they may often be a superior alternative for Big Data, high-traffic web sites, heavy-duty streaming media delivery, and other demanding environments.'
        },
        sevendatabases: {
            url: "http://www.amazon.com/gp/product/1934356921/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1934356921&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Seven Databases in Seven Weeks",
            author: "Eric Redmond and Jim R. Wilson",
            price: "List Price: $35.00",
            logo: "/assets/img/books/seven_databases.png",
            text: 'Seven Databases in Seven Weeks takes you on a tour of some of the hottest open source databases today. In the tradition of Bruce A. Tate\'s Seven Languages in Seven Weeks, this book goes beyond your basic tutorial to explore the essential concepts at the core each technology.'
        },
        neo4jinaction: {
            url: "http://www.manning.com/partner/",
            type: "book",
            name: "Neo4j in Action",
            author: "Jonas Partner and Aleksa Vukotic",
            price: "Ebook - $35.99, Print - $44.99",
            logo: "/assets/img/books/neo4j_in_action.png",
            text: 'Neo4j in Action is a comprehensive guide to Neo4j, aimed mainly at application developers and software architects. This exciting new book by Jonas Partner and Aleksa Vukotic is the first full length book on Neo4j, covering an introduction to Neo4j, application development with Neo4j, and Neo4j in production.'
        },
        visualcomplexity: {
            url: "http://www.amazon.com/gp/product/1568989369/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1568989369&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Visual Complexity",
            author: "Manuel Lima",
            price: "List Price: $50.00",
            introText: "Mapping Patterns of Information",
            logo: "/assets/img/books/visual_complexity.png",
            text: 'From representing networks of friends on Facebook to depicting interactions among proteins in a human cell, Visual Complexity presents one hundred of the most interesting examples of information-visualization by the field\'s leading practitioners.'
        },
        connected: {
            url: "http://www.amazon.com/gp/product/0316036137/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316036137&linkCode=as2&tag=neotech05-20",
            type: "book",
            name: "Connected",
            introText: "The Surprising Power of Our Social Networks and How They Shape Our Lives — How Your Friends\' Friends\' Friends Affect Everything You Feel, Think, and Do",
            author: "Nicholas A. Christakis and James H. Fowler",
            price: "List Price: $15.99",
            logo: "/assets/img/books/connected.png",
            text: 'Renowned scientists Christakis and Fowler present compelling evidence for our profound influence on one another\'s tastes, health, wealth, happiness, beliefs, even weight, as they explain how social networks form and how they operate.'
        }
    },
    apps: {
        flavorwocky: {
            type: "app",
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
            type: "app",
            author: "@maxdemarzi",
            docs: "http://maxdemarzi.com/2012/08/17/neosocial-connecting-to-facebook-with-neo4j/",
            name: "Neosocial",
            text: "Neosocial: Connecting to Facebook with Neo4j",
            logo: "/assets/img/apps/neosocial.png"
        },
        typology: {
            type: "app",
            author: "@renepickhardt",
            url: "http://typology.de/",
            logo: "/assets/img/apps/typology.png",
            text: "Word typing predictions, based on Neo4j and Google N-Gram data.",
            name: "Typology"
        },
        transportdublin: {
            type: "app",
            author: "@paddydub",
            url: "https://github.com/WhichWay/TransportDublin",
            logo: "/assets/img/apps/TransportDublin.png",
            name: "Transport Dublin",
            text: "A Neo4j & Google Maps based Public Transport Route Planner"
        },
        structr: {
            type: "app",
            author: "@amorgner",
            url: "http://structr.org/home",
            logo: "/assets/img/apps/structr.gif",
            text: "A Content Management System, build on Neo4j.",
            name: "Structr"
        },
        polymap: {
            type: "app",
            author: "Falko Bräutigam",
            url: "http://polymap.org/polymap3/wiki/Screenshots",
            logo: "/assets/img/apps/polymap.png",
            text: "A web based GIS system running on top of OpenStreetMap and other datasources, integrating with Neo4j Spatial.",
            name: "Polymap"
        },
        frostymug: {
            type: "app",
            author: "@josh_adell",
            url: "http://frostymug.herokuapp.com",
            logo: "/assets/img/apps/frostymug.png",
            text: "A proof-of-concept beer recommendation engine, built by Josh Adell",
            name: "Frosty Mug"
        }
    },
    drivers: {
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
    }
}