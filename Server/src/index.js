import data from "./utils/data";
const http = require("http");

http
  .createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (request.url === "/rickandmorty/character") {
      return response.end(JSON.stringify(id));
    }
  })
  .listen(3001, "localhost");
