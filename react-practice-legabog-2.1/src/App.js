import React from 'react';
import './App.css';
import Car from './Car/Car'

function App() {

  const divStyle = {
    textAlign: 'center'
  }

  return (
    <div style={divStyle}>
      <h1>Hello world!</h1>

      <Car name={'Ford'} year={2018}>
        <p style={{color: 'blue'}}>color</p>  
      </Car> 
      <Car name="Audi" year={2016}>
        <p style={{color: 'red'}}>color</p>
      </Car>
      <Car name={'Mazda'} year={2010}>
        <p style={{color: 'green'}}>color</p>  
      </Car> 
    </div>
  );
}

export default App;
