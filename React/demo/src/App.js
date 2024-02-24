import React from 'react'
import { useDispatch} from 'react-redux'
import { increment,decrement} from './action'
import CountValue from './CountValue'
export default function App(){
    const dispatch=useDispatch()

    return(
        <div>
            <CountValue/>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}







// import React, { Component } from 'react'
// import StateExample from './StateExample'
// import Input from './Input'
// import ChildComponent from './ChildComponent'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// export default class App extends Component {
//     render() {
//         return (
//             //only a single div must be there inside the return statement in REACT 
//             <div>
//                 <div>
//                     <BrowserRouter>
//                         <Navbar />
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path="/about" element={<About />} />
//                             <Route path="/contact" element={<Contact />} />
//                         </Routes>
//                     </BrowserRouter>
//                 </div>



//                 <div>
//                     <Input />
//                     this app Component
//                     <div className='parent'>
//                         <ChildComponent studentname="codegnan" studentclass="10th class" studentage="20" />
//                         <ChildComponent studentname="sowmya" studentclass="btech " studentage="22" />
//                         <ChildComponent studentname="srinidhi" studentclass="btech" studentage="23" />
//                         <ChildComponent studentname="manisha" studentclass="postgraduate" studentage="20" />
//                         <ChildComponent studentname="vineeth" studentclass="Mtech" studentage="21" />
//                     </div>
//                     {/* <StateExample>*/}

//                 </div>
//             </div>

//         )
//     }
// }
