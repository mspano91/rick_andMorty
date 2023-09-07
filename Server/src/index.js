const http = require("http");
const { getCharById } = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer((require, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (require.url.includes("/rickandmorty/character")) {
      const id = require.url.split("/").at(-1);
      getCharById(response, +id);
    }
  })
  .listen(PORT, console.log("anda el servidor!"));
