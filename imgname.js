const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const dbpool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "PickArt",
  password: "AdRootPass123",
});

const testFolder = "C:/Users/PC/Desktop/HW/Диплом/pickart-backend/public/ServerDisk";
fs.readdirSync(testFolder).forEach((file) => {
  // console.log(path.parse(file).name);
  // dbpool.query(
  //   `INSERT INTO art (title, fileName) VALUES('${path.parse(file).name}','${file}')`,
  //   function (err, results) {
  //     if (err) console.log(err);
  //     console.log(results);
  //   }
  // );
  console.log(path.parse(file).name);
  dbpool.query(
    `INSERT INTO artwork (Title, FileName,AuthorId) VALUES('${path.parse(file).name}','${file}',"1")`,
    function (err, results) {
      if (err) console.log(err);
      console.log(results);
    }
  );
});
