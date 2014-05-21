neo4j.org
=========

Served with express.js, mostly static pages with javascript. 

Running local
-------------

With [nodes.js](http://nodejs.org) installed, first install dependencies like so:

    npm install

Then run the server:

    node app

Which should report something like:

    "Express server listening on port 3000"

Which means you can now open a browser to [http://localhost:3000](http://localhost:3000)

Ongoing Development
-------------------

Publish images or assets to s3 bucket (which is backing a cloudfront CDN)

Install [s3tools](http://s3tools.org/s3cmd) and configure with AWS credentials:

    s3cmd --configure
    s3cmd ls s3://assets.neo4j.org/

    // -P means public acl and -cf-invalidate does cloudfront invalidation
    s3cmd -P --cf-invalidate public/assets/path/file s3://assets.neo4j.org/path/

    will be available as http://assets.neo4j.org/path/file

Get the latest changes:

    git pull

Submit your local changes:

    git commit -am "beautification and verbal eloquence"
    git push origin master
    
Publish assets like images to S3

     s3cmd --configure
     s3cmd ls s3://assets.neo4j.org/
     s3cmd put --acl-public  public/assets/path/file s3://assets.neo4j.org/path/

Publish
-------

For staging content, push to:

    git remote add staging git@heroku.com:neo4j-org-staging.git
    git push staging master

Then view the website like so:

    heroku open --remote staging

Or go directly here: [http://obscure-wildwood-7384.herokuapp.com](http://obscure-wildwood-7384.herokuapp.com)


For production, push to the default remote:

    git remote add live git@heroku.com:neo4j-org-live.git
    git push live master

Viewable by:

    heroku open --remote live

Or go directly here: [http://neo4j-org.herokuapp.com/](http://neo4j-org.herokuapp.com/)

References
----------

* [express.js](http://expressjs.com)
