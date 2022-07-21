const express=require('express')
const Router1=express.Router()
Router1.get('',async(req,res)=>{
const temp=[
{
   "id": "1",
"name":"slide1"
 },
 {
   "id": "2",
  "name":"slide2"
 },
 {
   "id": "3",
"name":"slide3"
 },
 {
   "id": "4",
"name":"slide4"
 }

]

res.json(temp)
})

module.exports=Router1;
