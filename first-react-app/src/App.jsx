// import {useState} from 'react'

// const App = () => {
//   let [count,SetCount]=  useState(0)
//   function fun1(){
//     SetCount(count+1)
//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={fun1}>click </button>
//     </div>
//   )
// }

// export default App
//-------------------------------------------------------------------
// import React, {useState} from 'react'

// const App = () => {
//   let[color,SetColor]= useState("red")
//   function fun1(){
//     SetColor("green")
//   }
//   function fun2(){
//     SetColor("black")
//   }

//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button onClick={fun1}>green</button>
//         <button onClick={fun2}>black</button>
//     </div>
//   )
// }

// export default App
//---------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   return (
//     <div><Home/></div>
//   )
// }
// const Home =() =>{
//   return (
//     <div>Hellooooo</div>
//   )
// }
// export default App
//-----------------------------------------------------
// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>Home</div>
//   )
// }
// export default App
//------------------------------------------------------------

// import React from 'react'
// import New from './New'
// import {About} from './New'
// const App = () => {
//   return (
//     <div>
//       <h1>App</h1>
//       <New/>
//        <About /> 
//     </div>
//   )
// }

// export default App
//-----------------------------------------

// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let data="hello"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App
//===============================================

// import React, { useState } from 'react'
// import Home from './Home' 

// const App = () => {
//   // 1. State hook: count ki initial value 0 hai
//   let [count, SetCount] = useState(0)

//   // 2. Click handler function: har click par count 1 badhega
//   function fun1() {
//     SetCount(count + 1)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* 3. Button par click hone par fun1 trigger hoga */}
//       <button onClick={fun1}>click</button>
      
//       {/* 4. Home component me count variable ko prop ki tarah pass kiya */}
//       <Home count={count}/>
//     </div>
//   )
// }

// export default App
//------------------------------------------------
// import React, { useState } from 'react'
// import Home from './Home' 

// const App = () => {
  
//   let [count, SetCount] = useState(0)

//   function fun1() {
//     SetCount(count + 1)
//   }
//    function fun2() {
//     SetCount(count - 1)
//   }

//   function fun3() {
//     SetCount(0)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       {}
//       <button onClick={fun1}>++</button>
//        <button onClick={fun2}>--</button>
//        <button onClick={fun3}>Reset</button>
      
//       {}
//       <Home count={count}/>
//     </div>
//   )
// }

// export default App
//------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// function Stopwatch() {
//   // State for time
//   const [time, setTime] = useState(0);

//   // State for running status
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     // Start interval when stopwatch is running
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }

//     // Cleanup interval
//     return () => clearInterval(interval);

//   }, [isRunning]);

//   // Start function
//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   // Stop function
//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   // Reset function
//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Stopwatch</h1>

//       <h2>{time} sec</h2>

//       <button onClick={handleStart}>
//         Start
//       </button>

//       <button onClick={handleStop} style={{ marginLeft: "10px" }}>
//         Stop
//       </button>

//       <button onClick={handleReset} style={{ marginLeft: "10px" }}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Stopwatch;
//------------------------------------------------
// import React,{useState} from 'react'

// const App = () => {
//   let [input,SetInput]=  useState("")
//   let [data,SetData]=  useState("")
//   function fun1(e){
//  //    console.log(e.target.type);

//       SetData(e.target.value)
//   }
//   function done(){
//      SetInput(data)
//   }
//   return (
//     <div>
//       <h2>{input}</h2>
//       <input type='text' onChange={fun1}/>
//       <button onClick={done}>Click</button>
//       {}
//     </div>
//   )
// }
// export default App.

//--------------------------------------------------------------
// import React, { useState } from 'react'
// import './App.css'
// const App = () => {
//       let [input,SetInput]=      useState(
//         {name:"",email:"",passWord:""})


//     function fun1(e){
//        console.log(e.target);
//        let {name,value}=    e.target
//        SetInput({...input,[name]:value})
        
//         console.log(input);
        
        
//         // console.log(e.target.value);
        
        
//     }
//   return (
//     <div>
//         <form>
//             <input type='text' name='name' value={input.name}  onChange={fun1} placeholder='Enter your name'/>
//             <br></br>
//             <br></br>

//             <input type='email'   name='email' value={input.email}  onChange={fun1} placeholder='Enter your email'/>
//             <br></br>
//             <br></br>

//             <input type='password'  name='passWord' value={input.passWord}  onChange={fun1} placeholder='Enter your password'/>
//             <br></br>
//             <br></br>

            
//             <button>submit</button>



//         </form>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------------
// import { useEffect } from "react"
// import { useState } from "react"

// import React from 'react'
// import Home from "./Home"

// //main-> app-> A-> b-> C



// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App
//------------------------------------------------------------------

// import React,{useMemo} from 'react'
// import useCounter from './useCounter'

// const App = () => {
//   let{count, inc, dec, reset}= useCounter(0)
  // this is the problem for web site slow
  // function call(){
  //   let res=0
  //   for(let i=0;i<1000000000;i++){
  //     res+=i;
  //   }
  //   return res
  // }
  // let total= call()[]
//   let total = useMemo(()=>{  // this is the solution of the above problem
//     let res=0
//     for(let i=0;i<1000;i++){
//       res+=i
//     }
//     return res;
//   },[])





//   return (
//     <div>{count}
//     <button onClick={inc}>++</button>
//     <button onClick={dec}>--</button>
//     <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App
//-------------------------------------------

