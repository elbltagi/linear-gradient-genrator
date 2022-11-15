import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [range1,setRange1] = useState(0);
  const [range2,setRange2] = useState(1);
  const [firstColor,setFirstColor] = useState("#fff");
  const [secColor,setSecColor] = useState("#000");
  return (
    <div className="App" style={{flexDirection:"column",gap:"20px",background:`linear-gradient(${range1}deg,${firstColor},${secColor})`}}>
      <div className='glass-effect'>
        <h1 style={{textAlign:"center"}}>Gradient genrator</h1>
        <h1 style={{color:"rgb(0,205,255)"}}>background: {`linear-gradient(${range1}deg,${firstColor},${secColor})`}; </h1>
      </div>
      <div style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"space-evenly",}}>
        <input type={"color"} color={firstColor} onChange={(e)=>setFirstColor(e.target.value)}/>
        <input type={"number"} value={range1} onChange={e=>setRange1(e.target.value)}/>
        <input type={"color"} color={secColor} onChange={(e)=>setSecColor(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
