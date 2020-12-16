// David Liao
// Server page
// 2 Dec 2020
//taken from lab 13, 14 proccess login js. and Professor Kazman. 

var data = require('./public/product_data.js'); //load products.js file and set to variable 'data'
var products_array = data.products; //set variable 'products_array' to the products array in the products.js file
var queryString = require('query-string'); //read variable 'queryString' as the loaded query-string module
var express = require('express'); //load and cache express module
var app = express(); //set module to variable 'app'
var myParser = require("body-parser"); //load and cache body parser module
var fs = require('fs'); //Load file system
var filename = "user_data.json";
var raw_data = fs.readFileSync(filename, 'utf-8');
var user_data = JSON.parse(raw_data);
var LogError = [];

// added code from processlogin2 js
var current_username;                        // Variable to store username on server
var login_err = { username: '', password: '' };  // object to capture login error info

var pwd_errors = [];                         // Array of password error messagess
var password_errors = "";                    // String to hold password error messages
var user_logged_in_name = "" ; // Global variable to save user name

// Taken from lab 12 and example 1 assignment 1 from professor port
// ues function ot check if the string is a non-negative integer
function isNonNegInt(q, return_errors = false) {
    errors = []; // assume no errors at first
    if (q == '') q = 0; // handle blank inputs as if they are 0
    if (Number(q) != q) errors.push('<font color="red">Not a number!</font>'); // Check if string is a number value
    if (q < 0) errors.push('<font color="red">Negative value!</font>'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('<font color="red">Not an integer!</font>'); // Check that it is an integer
    return return_errors ? errors : (errors.length == 0);
}

app.use(myParser.urlencoded({ extended: true })); //get data in the body

function checkPassword(passwordIn) {
  errors = [];
  if (passwordIn.length < 6)
      errors.push("Password too short");
  if (passwordIn.length > 10)
      errors.push("Password too long");
      console.log(LogError);

  return errors;
}

app.all('*', function (request, response, next) { //for all request methods...
    console.log(request.method + ' to ' + request.path); //write in the console the request method and its path
    next(); //move on
});


if (fs.existsSync(filename)) {
  data = fs.readFileSync(filename, 'utf-8');
  //console.log("Success! We got: " + data);

  user_data = JSON.parse(data);
  console.log("User_data=", user_data);
} else {
  console.log("Sorry can't read file " + filename);
  exit();
}

// Borrowed code from Alyssa Mencel
//processing a users's login through a post on the server 
app.post("/process_login", function (req, res) {
  console.log(req.query);
the_username = req.body.username.toLowerCase(); //putting the users, username as all lowercase
    if (typeof user_data[the_username] != 'undefined') { //ask the object if it has matching username or leaving it as undefined
        if (user_data[the_username].password == req.body.password) {
            req.query.username = the_username; 
            console.log(user_data[req.query.username].name);
            req.query.name = user_data[req.query.username].name
            res.redirect('/invoice.html');
            return; //this will redirect them to the invoice if username and password are entered correctly 
        } else { //if password is not entered correctly tells the user invalid password 
            LogError.push = ('Invalid Password');
            console.log(LogError);
            req.query.username= the_username;
            req.query.name= user_data[the_username].name;
            req.query.LogError=LogError.join(';');
        }
        } else { //if username is incorrect push to the user invalid username 
            LogError.push = ('Invalid Username');
            console.log(LogError);
            req.query.username= the_username;
            req.query.LogError=LogError.join(';');
        }
    res.redirect('./login.html');
});


app.get("/login", function (request, response) {
  // Give a simple login form
  str = '';
  if (typeof current_username != 'undefined') {
    str = `Currently logged in: ${current_username}<br>`;
  }
  
  // Give a simple login form
  str += `
<body>
<form action="/login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username"><br/>
<input type="password" name="password" size="40" placeholder="enter password"><br/>
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
});




// taken from process login 2 js

app.post("/process_register", function (request, response) {
  // process a simple register form
  POST = request.body;
  if (POST["username"] != undefined && POST["password"] != undefined) {
      pwd_errors = checkPassword(POST["password"]);

      if (pwd_errors.length != 0) {
          password_errors = pwd_errors.join();
          console.log("Pwd errors=" + password_errors);
          response.redirect("register");
      } else {
          username = POST["username"];
          user_data[username] = {};
          user_data[username].name = username;
          user_data[username].password = POST["password"];
          user_data[username].email = POST["email"];

          data = JSON.stringify(user_data);
          fs.writeFileSync(filename, data, "utf-8");

          response.send("User " + username + " added");
      }
  }
});

app.post("/process_invoice", function (request, response, next) {
  let POST = request.body;
  if(typeof POST['purchase_submit'] == 'undefined') {
      console.log('No purchase form data');
      next();
  } 

  console.log(Date.now() + ': Purchase made from ip ' + request.ip + ' data: ' + JSON.stringify(POST));

  var contents = fs.readFileSync('./views/invoice.template', 'utf8');
  response.send(eval('`' + contents + '`')); // render template string

  function display_invoice_table_rows() {
      subtotal = 0;
      str = '';
      for (i = 0; i < products.length; i++) {
          a_qty = 0;
          if(typeof POST[`quantity${i}`] != 'undefined') {
              a_qty = POST[`quantity${i}`];
          }
          if (a_qty > 0) {
              // product row
              extended_price =a_qty * products[i].price
              subtotal += extended_price;
              str += (`
    <tr>
      <td width="43%">${products[i].item}</td>
      <td align="center" width="11%">${a_qty}</td>
      <td width="13%">\$${products[i].price}</td>
      <td width="54%">\$${extended_price}</td>
    </tr>
    `);
          }
      }
      // Compute tax
      tax_rate = 0.0575;
      tax = tax_rate * subtotal;

      // Compute shipping
      if (subtotal <= 50) {
          shipping = 2;
      }
      else if (subtotal <= 100) {
          shipping = 5;
      }
      else {
          shipping = 0.05 * subtotal; // 5% of subtotal
      }

      // Compute grand total
      total = subtotal + tax + shipping;
      
      return str;
  }

});

app.get("/store", function (request, response) {
  var contents = fs.readFileSync('./views/display_products.template', 'utf8');
  response.send(eval('`' + contents + '`')); // render template string

  function display_products() {
      str = '';
      for (i = 0; i < products.length; i++) {
          str += `
              <section class="item">
                  <h2>${products[i].product}</h2>
                  <p>$${products[i].price}</p>
                  <label id="quantity${i}_label"}">Quantity</label>
                  <input type="text" placeholder="0" name="quantity${i}" 
                  onkeyup="checkQuantityTextbox(this);">
                  <img src="${products[i].image}">
              </section>
          `;
      }
      return str;
  }
});

app.use(express.static('./public'));

var listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });