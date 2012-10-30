neo4j.org
=========

Served with express.js, mostly static pages with javascript. 

Running local
-------------

With [nodes.js](http://nodejs.org) installed, fist install dependencies like so:

    npm install

Then run the server:

    node app

Which should report something like:

    "Express server listening on port 3000"

Which means you can now open a browser to [http://localhost:3000](http://localhost:3000)

Ongoing Development
-------------------

Get the latest changes:

    git pull

Submit your local changes:

    git commit -am "beautification and verbal eloquence"
    git push origin master

Publish
-------

For staging content, push to:

    git push staging master


For production, push to the default remote:

    git push heroku master

References
----------

* [express.js](http://expressjs.com)
