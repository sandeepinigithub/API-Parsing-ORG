const express = require("express");
const parseJson = require('parse-json');
var request = require('request');
const app = express();

const json = '{"name": "Sandeep","rollno": "1729010140","section": "3cs-c"}';

var d = JSON.parse(json);


//API Hitting

var options = {
  url: 'https://api.github.com/users/sandeepinigithub',
  headers: {
    'User-Agent': 'request',
  },
};

function callback(error, response, body) {
  var api_data =JSON.parse(response.body);
  var username = api_data.login;
  var name = api_data.name;
  var rollno = d.rollno;
  console.log(api_data);
  console.log("---------------------------------------------------------------------------------------");
  console.log("******************** NOW PARSING DATA FROM JSON FILE RECEIVED ********************");
  console.log("---------------------------------------------------------------------------------------");
  console.log("Name of user : "+name);
  console.log("Username : "+username);
  console.log("Roll Number : "+rollno);
  console.log("---------------------------------------------------------------------------------------");
  console.log("******************** DATA HAS BEEN PARSED ********************");
  console.log("---------------------------------------------------------------------------------------");


}

request(options, callback);




//This shows that server is running
// app.listen(3000, function(req, res) {
//   console.log("Server is running on port 3000");
// });
