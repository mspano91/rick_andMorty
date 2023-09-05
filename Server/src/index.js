const http = require("http");
const data = require("./utils/data");

http
  .createServer((require, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (require.url.includes("/rickandmorty/character")) {
      const id = require.url.split("/").at(-1);
      console.log(id);
      const characterFound = data.find((character) => character.id === +id);

      response
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(characterFound));
      console.log(characterFound);
    }
  })
  .listen(3001, console.log("localhost"));
