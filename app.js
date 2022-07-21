const express=require('express')
const app=express();
const port=5000;
app.use(express.static('public')); 
app.get('/api/customers',(req,res)=>{
const customers=[{id:'1',name:'Rationalism'},{id:'2',name:'Equalism'},{id:'3',name:'Humanism'}];
res.json(customers)
})

//routres//
const Router1=require('./router/page1');
app.use('/page1',Router1)
app.listen(port,()=>console.log(`listeig port ${port}`))
