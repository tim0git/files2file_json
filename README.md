# files2file_json
quick function that creates a JSON file from a folder or JSON Files.

Install
$ npm install files2file_json
Usage
const filesToFileJSON = require("files2file_json");

filesToFileJSON("folder directory containing files");
node index.js // run in terminal
//=> "F2F JSON FILE.json


// example file directory
➜  owners ls
o1.json o2.json o3.json o5.json o9.json

// example out put below;
/*
  {
    "o1.json": {
      "id": "o1",
      "name": "Steve",
      "age": 28
    }
  },
  {
    "o2.json": {
      "id": "o2",
      "name": "Lucy",
      "age": 19
    }
  },
  {
    "o3.json": {
      "id": "o3",
      "name": "Gavin",
      "age": 33
    }
  },
  {
    "o5.json": {
      "id": "o5",
      "name": "Ronald",
      "age": 57
    }
  },
  {
    "o9.json": {
      "id": "o9",
      "name": "DAE",
      "age": 28
    }
  }
]*/

