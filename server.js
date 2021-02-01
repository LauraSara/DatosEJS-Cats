const express = require("express");
app = express();
port = 8000;


app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static("static"));

var gatos = [
  {
      name: "cuddles",
      url: "/cuddles",
      img: "static/gato1.jpg",
      age: 3,
      FFood: "Spaghetti",
      spots: [
          "Under the bed",
          "In a sunbeam",
      ]
  },
  {
      name: "tom",
      url: "/tom",
      img: "static/gato2.jpg",
      age: 10,
      FFood: "Lasaña",
      spots:[
          "Under the car",
          "In a window",
          "Under the bed",
      ]
  },
  {
      name: "sherekan",
      url: "/sherekan",
      img: "static/gato3.jpg",
      age: 9,
      FFood: "deers",
      spots:[
          "In the jungle",
          "In dubai"
      ]
  }
]

app.get('/cats', (reg, res) => {
    res.render('cats', {gatos: gatos});
});
app.get('/cuddles', (req, res) => {
    res.render('cat', {cat: gatos[0]});
});
app.get('/tom', (req, res) => {
    res.render('cat', {cat: gatos[1]});
});
app.get('/sherekan', (req, res) => {
    res.render('cat', {cat: gatos[2]});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})