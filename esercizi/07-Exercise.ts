import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const express = require('express')

const app= express();

app.use((req,res,next)=>{
    res.header(
       { Headers:"Qui la mia header"}
    );
    next();
})

app.get('/',async (req,res)=>{
    const data = await prisma.exercise06.findMany();
    res.send(data)
})

app.listen(process.env.PORT,()=>{console.log("[SERVER]: Server is running on http://localhost:3000")})

export default app;