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

CONTENT
- node js installation



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

- You can use dynamic routing to dynamically route different usernames,
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