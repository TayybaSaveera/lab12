const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');





test("It should response the POST method", () => {
const response = request(app).post("http://localhost:8000/User/add"
).send ({
"Name": "Tayyba",
"Email": "tayyba@gmail.com",

"Age": 21,
"Contact": 123
})
expect(response.statusCode).toBe(200);
})

test("it should delete the post method",()=>{
    const response=request(app).delete("http://localhost:8000/User/:id"
).send({
    "Id" : "65558421108ujk896"
})
expect(response.statusCode).toBe(200);
})

test("It should response the POST method with username only", () => {
    const response = request(app).post("http://localhost:8000/User/add"
    ).send ({
    "Name": "Tayyba",
    })
    expect(response.statusCode).toBe(200);
    })


                                                                 