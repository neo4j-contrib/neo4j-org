exports.content = {
    content_video_ha: {
        title: "High Availability",
        type: "video",
        thumbnail: "/assets/img/still/ha_video.gif",
        introText: "See how to setup a 3-member cluster for the <strong>new Neo4j HA 1.5</strong> running on a single machine.",
        src: "http://player.vimeo.com/video/51906007"
    },
    content_video_good_relationships: {
        title: "Good Relationships",
        type: "video",
        thumbnail: "/assets/img/still/sdn-intro.png",
        introText: "Michael Hunger introduces <a target='_blank' href='http://www.infoq.com/minibooks/good-relationships-spring-data'>Good Relationships</a>, the SDN book.",
        src: "http://www.youtube.com/embed/heC-8Pq2exQ"
    },
    content_video_cypher: {
        title: "Query with Cypher",
        type: "video",
        thumbnail: "/assets/img/still/cypher.png",
        introText: "Cypher is a graph query language. Easy on the eyes, while expressive and powerful.",
        src: "http://player.vimeo.com/video/50389825"
    },
    content_video_installing_neo4j: {
        title: "Installing Neo4j",
        type: "video",
        thumbnail: "/assets/img/still/install.gif",
        introText: "Peter Neubauer guides through the first steps of downloading and running Neo4j.",
        src: "http://player.vimeo.com/video/53838744"
    },
    content_video_graphdb101: {
        title: "Graph DB 101",
        type: "video",
        author: "akollegger",
        thumbnail: "/assets/img/still/graphdb-intro.png",
        introText: "A pleasant stroll through general concepts, and Neo4j particulars.",
        src: "http://player.vimeo.com/video/46886385"
    },
    content_video_james_ward_neo4j: {
        title: "James Ward on Neo4j",
        type: "video",
        author: "_JamesWard",
        thumbnail: "/assets/img/still/jamesward.jpg",
        introText: "James Ward shows how to build and deploy a Neo4j based app on heroku.",
        src: "http://player.vimeo.com/video/53221343"
    },
    content_image_neo4j_ref_card: {
        type: "external",
        title: "Neo4j Reference Card",
        introText: "Visualize the concepts of the graph as a graph, how much more meta can you go?",
        thumbnail: "http://thumbnails.visually.netdna-cdn.com/whats-a-graph-database_502918e97645c_w1051.png",
        path: "http://visual.ly/whats-graph-database"
    },
    content_article_gc2012: {
        type: "article",
        title: "GraphConnect 2012",
        introText: "(TODO) Introtext GraphConnect 2012",
        content: "TODO: Content for GraphConnect page"
    },
    content_graphdb_graph : {
        type: "article",
        title: "A Graph contains Nodes and Relationships",
        src: "/assets/img/propertygraph/graphdb-gve.png",
        content: "<p>A Graph –[:RECORDS_DATA_IN]–> Nodes –[:WHICH_HAVE]–> Properties.</p>The simplest possible graph is a single Node, a record that has named values referred to as Properties. A Node could start with a single Property and grow to a few million, though that can get a little awkward. At some point it makes sense to distribute the data into multiple nodes, organized with explicit Relationships."
    },
    content_graphdb_traversal : {
        type: "article",
        title: "Query a Graph with a Traversal",
        introText: "A Traversal –navigates–> a Graph; it –identifies–> Paths –which order–> Nodes.",
        src: "/assets/img/propertygraph/graphdb-traverse.png",
        content: "A Traversal is how you query a Graph, navigating from starting Nodes to related Nodes according to an algorithm, finding answers to questions like \“what music do my friends like that I don’t yet own,\” or \“if this power supply goes down, what web services are affected?\”"
    },
    content_graphdb_indexes : {
        type: "article",
        title: "Indexes Look-up Nodes or Relationships",
        introText: "An Index –maps from–> Properties –to either–> Nodes or Relationships. It –is a special–> Traversal.",
        src: "/assets/img/propertygraph/graphdb-index.png",
        content: "Often, you want to find a specific Node or Relationship according to a Property it has. This special case of Traversal is so common that it is optimized into an Index look-up, for questions like \“find the Account for username master-of-graphs.\”"
    }
}