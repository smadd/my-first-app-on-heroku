// Install Express Server
const express = require('express');
const path = require('path');
const app = express();

// Server only are static files from the dist directory
app.use(express.static('./dist/my-first-app-on-heroku'));

app.get('/*', (req, res) =>
res.sendFile('index.html', {root: 'dist/my-first-app-on-heroku'}),
);

// Tell the app how to start on Heroku
app.listen(process.env.PORT || 8080);




// From Lee during class code block:
     // Install express server
// const express = require('express');
// const path = require('path');
// const app = express();
    // Server only are stactic files from the dist directory
// app.use(express.static('./dist/angular-app-heroku'));
// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
// );
// // Tell the app how to start on Heroku
// app.listen(process.env.PORT || 8080);
