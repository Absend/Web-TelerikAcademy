'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionString = 'mongodb://localhost:27017/db-name';
const collections = ['users-collection', 'articles-collection'];

const db = mongojs(connectionString, collections);

// EXPRESS config
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();

// set static folder
const staticFolderName = 'client';
app.use('/', express.static(path.join(__dirname, staticFolderName)));

// body-parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const apiRouter = new express.Router();

app.use('/api', apiRouter);

apiRouter.get('/hi', (req, res, next) => { res.send('Hi, baby!') });

apiRouter.get('/users', (req, res, next) => {
        db['users-collection'].find({
        }, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        })
    });

apiRouter.post('/users', (req, res, next) => {
        const user = req.body;
        db['users-collection'].save(user, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    });

// connection on port
const port = 3003
app.listen(port);
console.log(`Server running on port:${port}`);
