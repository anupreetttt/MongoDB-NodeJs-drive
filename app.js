//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
      {
        name: "Mango",
        rating: 10,
        review: "Sweet and juicy"
      },
      {
        name: "Stawberry",
        rating: 8,
        review: "Sometimes sweet, but delicious"
      },

      {
        name: "Apple",
        rating: 10,
        review: "Apples a day keep the doctor away!"
      },
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }