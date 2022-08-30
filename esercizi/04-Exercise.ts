const express = require('express')

const app = express()

app.use((req,res,next)=>{
  res.header(
    {Headers:"Server header"}
  );next();
})

app.get('/',(req,res)=>{
  res.status(200).send({json:"Json server file"})
})

app.listen(process.env.PORT,()=>{console.log("SERVER: Running on localhost:3000")})

export default app