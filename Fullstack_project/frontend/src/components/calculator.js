import { useState } from "react";

function Calculator(){
    const [Output,Out] = useState('')
    const GetData=(e)=>{
        if(e==='='){
            Out(eval(Output))
        }else if(e==='C'){
            Out('')
        }else{
            Out((prev)=> prev+e)
        }
    }
    return(
        <center>
            <table border={2} cellPadding={10} cellSpacing={15} style={{textAlign:'center'}}>
                <thead>
                    <tr className="trs">
                        <td id="td1" colSpan={4}>{Output}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="td" onClick={()=>GetData('9')}>9</td>
                        <td id="td" onClick={()=>GetData('8')}>8</td>
                        <td id="td" onClick={()=>GetData('7')}>7</td>
                        <td id="td" onClick={()=>GetData('/')}>/</td>
                    </tr>
                    <tr>
                        <td id="td" onClick={()=>GetData('6')}>6</td>
                        <td id="td" onClick={()=>GetData('5')}>5</td>
                        <td id="td" onClick={()=>GetData('4')}>4</td>
                        <td id="td" onClick={()=>GetData('*')}>*</td>
                    </tr>
                    <tr>
                        <td id="td" onClick={()=>GetData('3')}>3</td>
                        <td id="td" onClick={()=>GetData('2')}>2</td>
                        <td id="td" onClick={()=>GetData('1')}>1</td>
                        <td id="td" onClick={()=>GetData('-')}>-</td>
                    </tr>
                    <tr>
                        <td id="td" onClick={()=>GetData('.')}>.</td>
                        <td id="td" onClick={()=>GetData('0')}>0</td>
                        <td id="td" onClick={()=>GetData('=')}>=</td>
                        <td id="td" onClick={()=>GetData('+')}>+</td>
                    </tr>
                    <tr>
                        <td id="td" onClick={()=>GetData('%')}>%</td>
                        <td id="td" onClick={()=>GetData('(')}>(</td>
                        <td id="td" onClick={()=>GetData(')')}>)</td>
                        <td id="td" onClick={()=>GetData('C')}>C</td>
                    </tr>
                    <tr>
                        <td id="td" onClick={()=>GetData('**1/')}>Root</td>
                        <td id="td" onClick={()=>GetData('(')}>(</td>
                        <td id="td" onClick={()=>GetData(')')}>)</td>
                        <td id="td" onClick={()=>GetData('C')}>C</td>
                    </tr>
                </tbody>
            </table>
        </center>
    )
}

export default Calculator;
