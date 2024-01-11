import "./App.css"
import Display from "./components/Displlay";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [placeholder, update] = useState("0")
  function btnUpdate(val)  {
    update(val)
  }
  return (

    <div className="container">
      <Display value = {placeholder}/>
      <Button btnUpdate = {btnUpdate}/>
      <Footer/>

    </div>
   
  );
}


export default App;
