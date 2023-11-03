const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4:uuid } = require("uuid");

const app = express();

app.get("/outfit", (req, res) => {
    const tops = ["Black", "Gray", "Yellow", "Purple"];
    const jeans = ["Gray", "White", "Black","Anil"];
    const shoes = ["Black", "White", "Red", "Gray"];

    res.json({
        top:_.sample(tops),
        jeans:_.sample(jeans),
        shoes:_.sample(shoes)
    });
});

app.listen(3000, () => console.log("API Server is running..."))
