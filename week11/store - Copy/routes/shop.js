const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin")

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../views/shop.html'));
  // res.sendFile(path.join(rootDir, 'views' , 'shop.html'));
  const product = admin
  res.render("shop.html", {
    title: "Shop",
  });
});

module.exports = router;
