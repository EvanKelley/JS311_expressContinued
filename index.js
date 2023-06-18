const express = require("express");
const bodyParser = require("body-parser");


const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const app = express();
const port = process.env.PORT || 4001;

let counter = 1;

app.use(express.static("public"));
app.use(bodyParser.json());

// app.get()
// app.get()
// app.get()
// app.get()


app.get("/contacts/:id", function (req, res) {
  let id = req.params.id;
  let found = contacts.find(function (element) {
    if (element._id == id) {
      return true;
    } else {
      return false;
    }
  });

  if (found) {
    res.json(found);
  } else {
    res.sentStatus(404);
  }
});

app.get("/vehicles/:id", function (req, res) {
  let id = req.params.id;
  let found = vehicles.find(function (element) {
    if (element._id == id) {
      return true;
    } else {
      return false;
    }
  });

  if (found) {
    res.json(found);
  } else {
    res.sentStatus(404);
  }
});

app.get("/comments/:id", function (req, res) {
  let id = req.params.id;
  let found = comments.find(function (element) {
    if (element._id == id) {
      return true;
    } else {
      return false;
    }
  });

  if (found) {
    res.json(found);
  } else {
    res.sentStatus(404);
  }
});

app.get("/products/:id", function (req, res) {
  let id = req.params.id;
  let found = products.find(function (element) {
    if (element._id == id) {
      return true;
    } else {
      return false;
    }
  });

  if (found) {
    res.json(found);
  } else {
    res.sentStatus(404);
  }
});


app.post("/comments", function (req, res) {
  let newEntry = {
    _id: comments.length+1,
    body: req.body.body,
    postId: 1,
  };

  comments.push(newEntry);
  res.json(newEntry);
});

app.post("/contacts", function (req, res) {
  let newEntry = {
    _id: contacts.length+1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar,
  };

  contacts.push(newEntry);
  res.json(newEntry);
});

app.post("/products", function (req, res) {
  let newEntry = {
    _id: products.length+1,
    name: req.body.name,
    description: req.body.description,
  };

  products.push(newEntry);
  res.json(newEntry);
});

app.post("/vehicles", function (req, res) {
  let newEntry = {
    _id: vehicles.length+1,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
  };

  vehicles.push(newEntry);
  res.json(newEntry);
});

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
