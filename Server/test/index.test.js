const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/15645".expect(500));
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");

      const propiedades = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];

      //opcion larga pero mas entendible
      // const keys = object.keys(body);
      // propiedades.forEach((prop) => {
      //   expect(keys).toContain(prop);

      //opcion b corta
      propiedades.forEach((prop) => {
        expect(body).toHaveProperty(prop);
      });
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("login is sucess", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=1&password=1"
      );
      expect(body.access).toEqual(true);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    //CREAMOS DOS PERSONAJES DE PRUEBA
    const testCharA = { id: 1, name: "TEST A" };
    const testCharB = { id: 2, name: "TEST B" };
    it("devuelve un array con la info enviada", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(testCharA);
      expect(body).toContainEqual(testCharA);
      //toContainEqual busca en profundidad y evalua cada propiedad de testCharA
    });

    it("devuelve un array con la info enviada", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(testCharB);
      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB); //toContainEqual busca en profundidad y evalua cada propiedad de testCharA
    });
  });

  describe("DELETE /rickandmorty/fav/id:", () => {
    //CREAMOS DOS PERSONAJES DE PRUEBA
    const testCharA = { id: 1, name: "TEST A" };
    const testCharB = { id: 2, name: "TEST B" };

    it("si no se elimina ningun personaje devuelve mismo array", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3312");

      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB);
      //toContainEqual busca en profundidad y evalua cada propiedad de testCharA
    });

    it("si no se elimina ningun personaje devuelve mismo array", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");

      expect(body).toContainEqual(testCharB);
      //toContainEqual busca en profundidad y evalua cada propiedad de testCharA
    });
  });
});
