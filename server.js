// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("VendorLink server running");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// new changes being made to the above code.........

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // allows JSON data

let products = [];

app.get("/", (req, res) => {
    res.send("VendorLink API running");
});

app.post("/add-product", (req, res) => {
    const product = req.body;
    products.push(product)
    console.log(product);
    res.send("Product added");
});

app.get("/products", (req, res) => {
    res.json(products);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});