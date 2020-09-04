import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const hero =["Mather Teresa", "Hazi Muhammad Mohsin"]
  const friends=[{name:"Shiyan Ahmed", age:11},
 {name:"Pikash", age:12},
 {name:"Walid Hassan",age:13}
]
  const product =[{name:"Potato", price:"20 Tk"},
{name:"Rice", price:"50 Tk"},
{name:"Ata", price:"30 Tk"}
]

  return (
    <div className="App">
      <Counter></Counter>
      <ShowName></ShowName>
      {
        product.map(product => <Product product ={product} ></Product>)
      }
      {
        friends.map(friend => <Friend data = {friend} ></Friend>)
      }
      {
        hero.map(hero => <Person name={hero}></Person>)
      }
      {
        hero.map(hero => <li>{hero}</li>)
      }
        <Product product={product[0]}></Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>
        <Person name={hero[0]} job="Web Developer"></Person>
        <Person name="Monirul Islam" job="Programmer"></Person>
        <Person name="Riad Hassan" job="Student"></Person>
        <Person name="Shopna" job="House wife"></Person>
    </div>
  );
}

function Person(props){
  const amirul={
    border:"2px solid red",
    backgroundColor:"gray",
    margin:"10px",
    width:"400px",
    margin:" 0 auto",
    marginBottom:"20px"
    
  }
  console.log(props);
  return(

    <div  style={amirul} >
      <h2>Name: {props.name}</h2>
      <h4>Profession: {props.job}</h4>
    </div>
  );
}
function Friend(props){
  const {name, age} = props.data;

  const friendStyle={
    border:"2px solid red",
    backgroundColor:"gray",
    margin:"10px",
    width:"400px",
    margin:" 0 auto",
    marginBottom:"20px"
    
  }
  return(
    <div style={friendStyle}>
      <h1>Name:{name}</h1>
      <h3>Age:{age}</h3>
    </div>
  )
}
function Product(props){
  const productStyle ={
    border:"2px solid gray",
    backgroundColor:"tomato",
    borderRadius:"7px",
    width:"400px",
    height:"200px",
    paddingTop:"20px",
    margin:"20px auto"
  }
  const {price, name}=props.product;
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5>Price {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const[count, setCount] = useState(19)
  const handleIncreaseState =()=> setCount(count + 1);
  
  const handleDecreaseState =()=> setCount(count - 1);
  
  return(
    <div>
      <h4>Count:{count}</h4>
      <button onClick={()=> setCount(count + 1)}  >Increase</button>
      <button onClick={()=> setCount(count - 1)} >Decrease</button>
    </div>
  )
}

function ShowName(){
  const [users, setUser] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUser(data))
  },[])
  return(
    <div style={{ alignContent:"center"}}>
      <h5>Name:{users.length}</h5>
      
      <ul>
        {
          users.map(user => <li style={{textAlign:"center"}}>{user.email}</li>)
        }
      </ul>

    </div>
  )
}
export default App;
