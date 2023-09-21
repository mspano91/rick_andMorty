const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true }); //el force true dropea la base de datos, cuando la db esta ok, la pongo en false

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
