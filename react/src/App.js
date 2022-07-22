import React from 'react';
import $ from 'jquery'
import './App.css'
export default class App extends React.Component {
  constructor(){
        super();
        this.state={
       items:[]
     }
}
pre(){
  $("h2").addClass('try1')
if($(".slide:nth-child(1)").css('display')==='block'){
  $(".slide:nth-child(4)").css('display','block');

    $(".slide:nth-child(1)").css('display','none')
}
else if($(".slide:nth-child(4)").css('display')==='block'){
  $(".slide:nth-child(3)").css('display','block');

    $(".slide:nth-child(4)").css('display','none')
}
else if($(".slide:nth-child(3)").css('display')==='block'){
  $(".slide:nth-child(2)").css('display','block');

    $(".slide:nth-child(3)").css('display','none')
}
else if($(".slide:nth-child(2)").css('display')==='block'){
  $(".slide:nth-child(1)").css('display','block');

    $(".slide:nth-child(2)").css('display','none')
}
$("h2").removeClass('try')
}

next(){
    $("h2").addClass('try')
if($(".slide:nth-child(1)").css('display')==='block'){
  $(".slide:nth-child(2)").css('display','block');
    $(".slide:nth-child(1)").css('display','none')
}
else if($(".slide:nth-child(2)").css('display')==='block'){
  $(".slide:nth-child(3)").css('display','block');
    $(".slide:nth-child(2)").css('display','none')
}
else if($(".slide:nth-child(3)").css('display')==='block'){
  $(".slide:nth-child(4)").css('display','block');
    $(".slide:nth-child(3)").css('display','none')
}
else if($(".slide:nth-child(4)").css('display')==='block'){
  $(".slide:nth-child(1)").css('display','block');
    $(".slide:nth-child(4)").css('display','none')
}
$("h2").removeClass('try1')
}
componentDidMount(){
fetch('page1')
.then(res=>res.json())
.then(items=>this.setState({items},()=>console.log('customes fetched',items)))
}
render(){

  return(
    <div className='slide-container'>
  {this.state.items.map(x=>
<div key={x.id} className='slide'>
<small>{x.id}/4</small>
<h2 id='h2'>{x.name} </h2>
</div>
  )}
  <section className='button'>
  <button onClick={this.pre}>Pre</button>
  <button onClick={this.next}>Next</button>
  </section>
    </div>
  )
}
}
