/**
 * Created by Mortoni on 12/12/13.
 */
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var mongoClient = new MongoClient(new Server('hemdatiod340', 27017));
mongoClient.open(function(err, mongoClient) {
    db = mongoClient.db("bncs");
    db.collection('status', {strict:true}, function(err, collection) {
        if (err) {
            console.log("The 'status' collection doesn't exist...");
    //        populateDB();
        }
    });
});

exports.findById = function(req, res) {
    console.log(req.params);
    var id = req.params.id;
    console.log('findById: ' + id);
    db.collection('status', function(err, collection) {
        collection.findOne({'WorkstationId': id}, function(err, item) {
            console.log(item);
            res.jsonp(item);
        });
    });
};

exports.findAll = function(req, res) {
    var name = req.query["name"];
    db.collection('status', function(err, collection) {
        if (name) {
            collection.find({"fullName": new RegExp(name, "i")}).toArray(function(err, items) {
                res.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                res.jsonp(items);
            });
        }
    });
};