// console.log("Hello world")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is rohan das');
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo selectors & more designing</title>
    <style>
        .container{
            border: 2px solid red;
            background-color: rgb(223, 245, 201);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
            /* color: rgb(68, 3, 3); */
            // background-color: rgb(248, 232, 2);
            background-color:transparent
        }
        a:visited{
            background-color: blueviolet;
        }
      a:active{
        background-color: aqua;
      }
        .btn{
            background-color: red;
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;


        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quasi eligendi error, labore ab nisi!</p>
        <a href="https://google.com" class="btn">Read more</a>
        <button class="btn">contact us</button>
    </div>
</body>
</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});