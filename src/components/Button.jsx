import { useState } from 'react'
import './button.css'

const Button = ({btnUpdate}) => {
    const btns = [
        'c', '+/-', '%', "÷",
        '7', '8', '9', "*",
        '4', '5', '6', "-",
        '1', '2', '3', "+",
        '0', '.', "=",
    ]
    const operations = ["+","-","*","%","÷","*"]
    const [value, updateValue] = useState(0)
    const [inputs, handelInputs] = useState([])
    const [color, updateColor] = useState("null") 
    let error = false;
    function clickHendel (e) {
        const val =e.target.id
        if([...operations, "=", "+/-", ].includes(val) && inputs.length == 0)  {
            updateColor("red")
            setTimeout(() => {
                updateColor("white")
            }, 400)
            return btnUpdate('WRONG INPUT')
        }
        else if([...operations, "=", "+/-", ].includes(val) && [...operations, "=", "+/-", ].includes(inputs[inputs.length-1])) {
            btnUpdate('WRONG INPUT')
            setTimeout(() => {
                btnUpdate(inputs.join(""))
            }, 400)
            return
        }
        
        // console.log("sssssssssssss",val)
        if(val == "=" || val == "+/-"){

           let f_val = 0, i = 0;
           while(i < inputs.length) {
            let el = inputs[i];
            console.log("....................",el);
            switch(el) {
                case "+" :{
                    i++
                    // i = (inputs[i+1] ? i++ : i)
                    // console.log('val --------------', inputs[i])


                    f_val +=parseFloat( inputs[i])
                    break
                }
                case "-" :{
                     i++
                     f_val -= parseFloat( inputs[i])
                     break
                    }
                case "*" :{
                    i++
                    f_val *= parseFloat( inputs[i])
                    break;
                }
                case "÷" :{
                        i++
                        f_val /= parseFloat( inputs[i])
                        break;
                    }
                case "%" :{
                        i++
                        f_val %= parseFloat( inputs[i])
                        break;
                    }
                default : {
                    f_val += parseFloat(el)
                    break;
                }
            }
            i++;
           }
           if(val == '+/-') f_val = -f_val
           console.log(f_val)

           handelInputs([f_val])
            updateValue(f_val)
            btnUpdate(f_val)

           
           console.log("+++++++++++++",value, inputs)

        }
        else if (val == "c") { 
            handelInputs([])
            updateValue(10)
            btnUpdate("0")
        }
        else{

            handelInputs((pre) => {
                if(!operations.includes(pre[pre.length-1]) && !operations.includes(val)) {
                    if(pre.length == 0) return [val]
                    let retarr = [...pre]
                    retarr[retarr.length-1] += val
                    return retarr
                }
                else return [...pre, val]
            })

            console.log("=============",typeof inputs)
            btnUpdate(inputs.join(""))
        }
        e.preventDefault();
        console.log("----------------------",value, inputs);
    }

    return <div className='btn-container'>

        { btns.map((el) => { 
            return <button 
                style={{background:color}}
                className = {el == "0" ? 'btn, btn-zero' : 'btn'} 
                id = {el}
                onClick={clickHendel}
                > 
                {el} 
                </button> 
            }) 
        }


    </div>
}


export default Button