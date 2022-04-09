import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  // const [theme,Settheme]=useState({
  //   bgColor:"red"
  // });
  const handeladd = () => {
    console.log("clicked");
    setCounter(counter + 1)

  }

  const handelsub = () => {
    if (counter <= 0) {
      return
    }
    setCounter(counter - 1)
  }

  const handeldbl = () => {
    setCounter(counter * 2)

  }
  // if(counter%2===0){
  //   Settheme("red")
  // }

  return (
   
    <div className="App">
     
      <div className={counter%2===0 ? 'red' : 'green'}></div>
      <h1>counter:{counter}</h1>
      <button className='add' onClick={handeladd} >Add</button>
      <button className='sub' onClick={handelsub}>Sub</button>
      <button className='dbl' onClick={handeldbl}>Double</button>
      {/* <div> Number is {counter % 2 === 0 ? 'Even' : 'odd' } </div> */}
      <h3 className={`${counter%2===0 ? "even" : "odd"}`}>Number is {counter % 2 === 0 ? 'Even' : 'odd' } </h3>

    </div>
  );
}

export default App;
