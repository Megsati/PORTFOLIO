const express = require ("express");
const app =express () ;
app .get ("/about", (request, response) =>{
    response.send("This is the new about us page");
})


app.listen(8500,()=> console.log ("i an listening on port 8500"))