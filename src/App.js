import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const name=['Saif','Rakib','Raju','Tamim','Sabit','Aadnan','Nobi']  
  const products=[
    {name:'Photoshop' ,price:'$90.99'},
    {name:'Illustrator' ,price:'$60.99'},
    {name:'PDF Reader' ,price:'$6.99'}
  ]
  
    return (
      <div className="App">
        <header className="App-header">
          <Users></Users>
         <Counter></Counter> 
        <ul>{
        name.map(name=><li>{name}</li>) 
        }
        </ul>
  
        <ul>
        {
          products.map(product =><li>{product.name}</li>)
        }  
        </ul>
  
  
  
         {
          products.map(product=><Product product={product}></Product>)
         }
    
         <Person name="Amit Saha" job="Banker "></Person> 
         <Person name ="Joy Bonik" job="Web Devloper"></Person>
        </header>
      </div>
    );
  }
  
  
  function Users(){
   const[users,setUsers]= useState([]);
  
  
   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data));
   }, [])
  
  
  
   return(
     <div>
       <h3>Dynamic User : {users.length}</h3>
      <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }
       </ul>
     </div>
   )
  }
  
  
  
  function Counter(){
  const [count, setcount] = useState(10)
    return(
   <div>
     <h1>Count :{count}</h1>
     <button onClick={()=>setcount(count-1)}>Decrease</button>
     <button onClick={()=>setcount(count+1)}>Increase</button>
   </div>
    )
  }
  
  
  function Product(props){
    const productStyle = {
      border:'1px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      float:'left'
    }
    const {name,price}=props.product;
    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
  
  }
  
  
  
  function Person(props){
  
    const personStyle={
      border:'2px solid yellow',
      margin:'15px',
      padding:'15px',
    }
    return(
      <div style={personStyle}>
        <h1>Name : {props.name}</h1>
        <h3>Profession :{props.job} </h3>
      </div>
     
    )
  }
  

export default App;
