var mongoose = require('mongoose');

module.exports = {

    /**
     * Connect to mongo
     *
     * @param {string} url the url of the database
     * @param {function} cb callback function on successful/failed connection
     */
    connect: function(url, cb) {
        mongoose.connect(url, function(err) {
            cb(err);
        });
    },

    /**
     * Output basic database information
     */
    getDatabaseInfo: function() {
        mongoose.connection.db.listCollections().toArray(function(err, collections) {
            console.log('Connected to: ' + mongoose.connection.name);
            console.log('Number of collections: ' + collections.length);
        });
    },

    // Test data insertion
    initDummyData: function() {
        this.initUsers();
    },

    initUsers: function() {
        var me = this,
            users = require('./data/users.json'),
            userModel = require('./models/user.js');

        userModel.find().then(function(records) {
            if (records.length === 0) {
                console.log('creating users ', users);
                userModel.create(users).then(function() {
                    console.log('done');
                    me.initPosts();
                }, function(err) {
                    console.error(err);
                });
            }
        }, function(err) {
            console.error('Error retrieving intial user records');
        });
    },

    initPosts: function() {
        var me = this,
            posts = require('./data/posts.json'),
            postModel = require('./models/post.js'),
            userModel = require('./models/user.js');

        postModel.find().then(function(records) {
            if (records.length === 0) {

                userModel.find().then(function(records) {
                    var user1, user2, user3, user4;
                    // Give each user 3 posts from the initial data
                    if (records && records.length === 4) {
                        user1 = records[0]._id;
                        user2 = records[1]._id;
                        user3 = records[2]._id;
                        user4 = records[3]._id;
                    }

                    posts[0].userId = user1;
                    posts[1].userId = user1;
                    posts[2].userId = user1;
                    posts[3].userId = user2;
                    posts[4].userId = user2;
                    posts[5].userId = user2;
                    posts[6].userId = user3;
                    posts[7].userId = user3;
                    posts[8].userId = user3;
                    posts[9].userId = user4;
                    posts[10].userId = user4;
                    posts[11].userId = user4;

                    postModel.create(posts).then(function() {
                        console.log('created posts');
                        me.initComments();
                    }, function(err) {
                        console.error(err);
                    });

                }, function(err) {
                    console.error('Error retrieving intial user records');
                });
            }
        }, function(err) {
            console.error('Error retrieving intial post records');
        });
    },

    initComments: function() {
        var postModel = require('./models/post.js'),
            commentsModel = require('./models/comment.js');

        commentsModel.find().then(function(records) {
            if (records.length === 0) {

                postModel.find().then(function(records) {
                    var i = 0,
                        postsLength = records.length,
                        comments = [];

                    for (; i < postsLength; i++) {
                        comments.push({
                            postId: records[i]._id,
                            message: 'Test ' + i
                        });

                        comments.push({
                            postId: records[i]._id,
                            message: 'A second post for this user. Test ' + i
                        });
                    }

                    commentsModel.create(comments).then(function() {
                        console.log('created comments');
                    }, function(err) {
                        console.error(err);
                    });

                }, function(err) {
                    console.error('Error retrieving intial post records');
                });
            }
        }, function(err) {
            console.error('Error retrieving intial comment records');
        });
    }
};