import app from "./04-Exercise";

const supertest = require("supertest")
const request = test(app)

test("GET /",async()=>{
  const response = await request
  .get("/")
    .expect(200)
      .expect("Content-type", /application\/json/);
        expect(response.body).toEqual(
          {json:"Server test jeson"}
        );
})