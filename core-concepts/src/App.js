import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayika = ['Shabana','Mousumi','Purnima']
  var person = {
name : "Fatima",
job : "Engineering"
  }
  var person2 = {
    name : "Noor",
    job : "Engineering"
      }

      var style = {

        color : 'red',
        backgroundColor: 'cyan'
      }
      

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first React App</p>
  <h1 className="" style={style}>  My Peofile Heading:{person.name + " "+ person.job}</h1>
  <h2>Title: {person2.name + " " + person2.job}</h2>
        <Person name= "Popy" nayok= "Jason Momoa"></Person>
        <Person name = "tripti" nayok = "Oronno"></Person>
        <Person name = {nayika[0]} nayok = " Unknown"></Person>

        <Counter></Counter>
      <Users></Users>
      </header>
    </div>

  );

  //Component
function Counter()
{
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>
count : {count}
      </h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {handleIncrease}> Increase </button>
    </div>
  )
}
function Users()

{
  const[ users ,  setUsers] = useState([]);
  useEffect(() =>{
fetch(' https://jsonplaceholder.typicode.com/users')
.then( res => res.json())
.then ( data => setUsers(data));

 },[])

return(
  <div>
    <h1> Jason : {users.length}</h1>
  <ul>
    { 
    users.map(user=> <li> {user.name}</li>)
     
     }
  </ul>
  </div>
)
}
  function Person(props){
    const personStyle = {
      border:'2px solid red' ,
      margin: '2px',
      width: '400px'
    }
   return( 
    <div style= {personStyle}>
   <h1> NAME:{props.name}</h1>
   <h3>Hero of {props.nayok}</h3>
</div>
   )
  }
}

export default App;
