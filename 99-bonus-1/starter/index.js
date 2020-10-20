/*
 We are using node.js commands within our JavaScript file
 On a node.js server everything is a request the concept of files and folders do not exists
 This is a reason why the css styles are all in-line inside the html.
 
 For external css file:
 Step 1: Create a folder called css in the data folder.

 Step 2: Create a file called style.css in the css folder.

 Step 3. Remove the css code within the <scripts> tag in both templates and paste it int he newly created style.css file

 Step 4. Remove the duplicate code in the style.css file, such as the body, h1, container, tags. etc

 Step 5. Add this code to the if statement in index.js

    else if ((/\.(css)$/i).test(pathName)) {
      fs.readFile(`${__dirname}/data/${pathName}`, (err, data) => {
        res.writeHead(200, { 'Content-type': 'text/css'});
        res.end(data);
        if (err) console.log(err);
      });

Step 6. Refresh
*/

const fs = require('fs');                   // Require the file system
const http = require('http');               // Require http for our server
const url = require('url');                 // Acting upon the url in the server callback function

// Load a file, This only happens when you start your app, so we can use the sync read method
const json = fs.readFileSync(`${__dirname}\\data\\data.json`, 'utf-8');
const laptopData = JSON.parse(json);

// Create our web server,  this callback function get run each time someone accesses our server
const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;
    
    // When you check there are requests for the /products and all th missing jpg files normally rendered by the html
    // console.log(pathName);
    
    const id = url.parse(req.url, true).query.id;
    
    // console.log(url.parse(req.url,true));

    // When using routing with node most people use a framework such as Express to help in what can become
    // a complicated structure as you may have hundreds of routes.
    
    // PRODUCTS OVERVIEW
    if ( pathName === '/products' || pathName === '/') {
        
        res.writeHead(200, {'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
        let overviewOutput = data;
        
            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {
                const cardsOutput = laptopData.map( el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
                res.end(overviewOutput);
                if ( err ) console.log(err);
            });
        });
    
    
    }
    // LAPTOP DETAIL
    else if ( pathName === '/laptop' && id < laptopData.length) {
        res.writeHead(200, {'Content-type': 'text/html'});
        // Sync reads block all other users until completed whereas aSync reads do not as used below.
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data,  laptop);
            res.end(output);
            if ( err ) console.log(err);
        });
    }
    // IMAGES ROUTE,   Required to display the images, each image is a separate request
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        
        fs.readFile(`${__dirname}/data/img${pathName}`,(err, data) => {
            res.writeHead(200, {'Content-type': 'image/jpg'});
            // console.log(`${__dirname}/data/img${pathName}`);
            res.end(data);
            if ( err ) console.log(err);
        });
    }
    
    // URL NOT FOUND
    else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('URL was not found on the server!');
    }
    
});

// This will tell the server to listen on a certain port and IP address
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now!');
});

function replaceTemplate(originalHtml, laptop){
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}


