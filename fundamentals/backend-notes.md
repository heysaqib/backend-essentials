What is a backend developer?
- A backend developer is the one who knows how to program server and db.

Why backend?
- To make websites more usable and purposeful for the audience, to make websites dynamic.

Why not front-end alone?
- With front-end, websites are static and they are of not much use.

What all we need to learn in backend?
- nodejs
- mongodb
- mongoosejs
- expressjs

What is Node.js?
- Node.js is an open-source, cross-platform JavaScript runtime environment
- It is not a language, it is not a framework
- Capable of executing JavaScript code outside a browser
- It can execute not only the standard ECMAScript language but also new features that are made available through C++ bindings using the V8 engine
- It consists of C++ files which form the core features and JavaScript files which expose common utilities and some of the C++ features for easier consumption

What is ECMAScript?
- ECMA-262 is the language specification
- ECMAScript is the language that implements ECMA-262
- JavaScript is basically ECMAScript at its core but builds on top of that

JavaScript Engine
- JavaScript code we write cannot be understood by the computer
- A JavaScript engine is a program that converts javascript code that developers
- write into machine code that allows a computer to perform specific tasks
- JavaScript engines are typically developed by web browser vendors
- V8 - Open-source JavaScript Engine developed by Google for Chrome
- SpiderMonkey – The JavaScript Engine powering Mozilla Firefox
- JavaScriptCore - Open-source JavaScript Engine developed by Apple for
Safari
- Chakra - A JavaScript Engine for the original Microsoft Edge (The latest version of edge uses V8)

V8 JavaScript Engine
-V8 is Google's open source JavaScript engine.
-V8 implements ECMAScript as specified in ECMA-262.
-V8 is written in C++ and is used in Google Chrome, the open source browser from Google.
-V8 can run standalone, or can be embedded into any C++ application.
-V8 Project page: https://v8.dev/docs



How to import and export ?
- ./script.js file consists of this code
        let a = 12;
        module.exports = a; //used to export variable value of a
    
- ./script2.js file consistes of this code
        var data = require('./script.js'); // require function is used to fetch the required data from another file and stored in variable 'data'
        console.log(data); // printing the variable a that is defines in another file


Express ?
- express is a framework for node js
- express is installed as a npm package
- used for routing

Routing?
- The process of creating routes
- https://www.w3schools.com/nodejs/nodejs_intro.asp
- here, 'https://www.w3schools.com' is the base URL
- and, '/nodejs' and '/nodejs_intro.asp' are the routes
- In whole, every route displays a seperate page on the browser.

Why routes are used?
- GET POST are the two mainly known routes.
- PUT PATCH DELETE are the other routes (used in Restful API), but the above ones are mainly used


GEt route? 
- data will be visible on the URL

POST route?
- Sensitive data like email, password,etc will not be visible on the URL

Dynamic routing?
- To make any route dynamic you can use ':' at the place where you want to make it dynamic, and to access their values use req.params.username.
- Suppose you have routes like,
  /profile/harsh
  /profile/harshita
  /profile/harshvardhan
  /profile/hardik

- If you write seperate routes like this for each user,
        app.get('/profile/Harsh', function(req,res){
                res.send("Hello from Harsh");
        })

- Instead, You can use dynamic routing to dynamically route different usernames,
        app.get("/profile/:username", function(req,res){
                res.send(`Hello from ${req.params.username}`);
        })


Creating a server?
- create a response using the given code in npm package and listen it on port 3000
- Now, if you make any changes to your server(ex. you change the response from "Hello" to "Hi"), the server does not reflet the change
- You'll have to manually restart the server(press ctrl+c and then run the node command again and refresh the page view the changes).


How to overcome manual restarting of the server?
- We make us of another npm package called as nodemon
- We'll install nodemon globally unlike the other packages which are installed within their respective folders
- For that we use the command 'npm i nodemon -g', here -g stands for installing the package globally.
- Now, we use 'nodemon .\script.js' command instead of 'node .\script.js'
- if it gives error, use 'npx' infront of the command

Middleware?
- Middleware is a function that sits between the request and response cycle in an application, processing incoming requests before they reach the final route handler. 
- Middleware functions can modify request and response objects, execute code, end request-response cycles, or call the next middleware in the stack.

Can we use node js without express ?
- Yes, node js comes with a pre-built HTTP package which has the capability of creating a server
- But we don't use it as compared to express, we have to write lengthy codes for simple functionalities, the HTTP package has lesser features and isn't that much user-friendly for coding. 
- HTTP is difficult to use, express makes it easier to code.
- Just like we use Chrome/ Brave over the inbuilt Microdoft Edge browser.
- NOTE: express converts the server code to HTTP and uses HTTP package itself to run the code.

What is template engine?
- It converts a style of markup language into HTML code
- We make use of ejs because it is very much similar to HTML
- There are also handlebars, pug and jade, but their syntax imitates that of python language.

What is EJS ?
- eJs is HTML with some superpowers.[Advanced version of HTML]
- You can add dynamic values in ejs.
-  eJs install
        npm i ejs
- Configure ejs
        app.set("view engine", "ejs");
- Create a folder named 'views' and create ejs files in that folder
- use render in place of send => make sure you place path of ejs file from views folder only, and dont mention the file extension

What is express generator?
- It creates the whole folder architecture for creating a server using express andf ejs, including the installations and boiler codes as well.

How to use express generator?
- Install it globally,
        npm i express-generator -g
- create a new app anywhere,
        express appname --view=ejs
- cd appname
- npm i
- Setup is complete, now open it on vs code 


Modules
A module is an encapsulated and reusable chunk of code that has its own context
In Node.js, each file is treated as a separate module
Types of Modules
1. Local modules - Modules that we create in our application
2. Built-in modules - Modules that Node.js ships with out of the box
3. Third party modules - Modules written by other developers that we can use in our application






















Databases?
- Relational
- Non-relational

What is MongoDB ?
- MongoDB is a NoSQL(Non-relational) database that stores data in a flexible, JSON-like format called BSON. 
- Unlike relational databases (SQL), MongoDB does not use tables and rows but instead relies on collections (equivalent to tables) and documents (equivalent to rows).

Terminologies to remember in MongoDB?
- It represents a collection and defines operations on documents.=>[code side]
- A collection in MongoDB is similar to a table in SQL databases but without a fixed schema, It stores multiple documents.=>[DB side]
- A schema defines the structure of documents in a collection.=>[code side]
- A document is a single record stored in a collection.=>[DB side]

How to setup and use MongoDB?
- INSTALL MongoDB
- INSTALL Mongoosejs
- REQUIRE and SETUP connection
- make Schema
- create model and export