import './display.css'
import { useState } from 'react';
const Display = ({value}) => {
    const [color, setColor] = useState("white")
    // if(value == "WRONG INPUT") {
    //     setColor("red")
    //     setTimeout(() => { setColor("white")}, 400)
    // }
    return <input  type="text" className="display" value={value}/>
}
export default Display;