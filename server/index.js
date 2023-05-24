const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desc: String,
  imageURL: String,
});

const productModel = mongoose.model("Product", productSchema);


//POST

app.post('/api/product', async(req, res) => {
  const { name, price, desc, imageURL } = req.body;
  const newProduct = productModel({
    name: name,
    price: price,
    desc: desc,
    imageURL: imageURL,
  });
  await newProduct.save()
  res.status(201).send({
     message:"Product Post Succefully!",
     payload:newProduct
  })
});

//GET ALL

app.get('/api/product',async(req,res)=>{
     const{name} = req.query
     newgetProduct = await productModel.find()
     if(!name){
          res.status(200).send(newgetProduct)
     }
     else{
          const searchedProduct = await newgetProduct.filter((x)=>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          )
          res.status(200).send(searchedProduct)
     }
})

//Gett All by ID

app.get('/api/product/:id',async(req,res)=>{
     const {id} = req.params
     const productID = await productModel.findById(id)
     res.status(200).send(productID)
})

//Delete

app.delete('/api/product/:id',async(req,res)=>{
     const id = req.params.id
     const deleteProduct = await productModel.findByIdAndDelete(id)
     res.status(202).send({
          message:`${deleteProduct.name} successfully deleted!`
     })
})

//PUT

app.put('/api/product/:id',async(req,res)=>{
     const id = req.params.id
     const { name, price, desc, imageURL } = req.body;
     const updatedProduct = {
          name: name,
          price: price,
          desc: desc,
          imageURL: imageURL,
     }
     await productModel.findByIdAndUpdate(id,updatedProduct)
     res.status(200).send(updatedProduct)
})



DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  .then(() => console.log("MangoDB Connected!!!"));

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
