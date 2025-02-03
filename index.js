const express=require("express")

const app=express()



const port= process.env.PORT || 8000


app.get('/', (req, res) => {
    res.status(200).send("this is deployment from github actions to azure-updated again")
    
  })

  app.listen(port,()=>
  {
    console.log("app is running")
  })
