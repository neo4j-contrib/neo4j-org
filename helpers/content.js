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

    }
}