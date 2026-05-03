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
const app = express();

app.use(express.json()); // allows JSON data

app.get("/", (req, res) => {
    res.send("VendorLink API running");
});

app.post("/add-product", (req, res) => {
    const product = req.body;
    console.log(product);
    res.send("Product received");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});