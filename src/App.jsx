import { useState } from "react";
import "./App.css";
import Button from "./Button.js";

function App() {
  const [count, setCount] = useState("");

  const handleClick = (e) => {
    //setCount(count.concat(e.target.name));
    try {
      setCount(count.concat(e.target.name));
    } catch(err) {
        setCount("Error");
        setTimeout(() => {
          handleAC();
        }, 2000);
    }
  }


  const handleDEL = () => {
    //setCount(count.slice(0, -1));
    try {
      setCount(count.slice(0, -1));
    } catch(err) {
        setCount("Error")
        setTimeout(() => {
          handleAC();
        }, 2000);
    }
  }

  const handleANS = () => {
    try {
      setCount(eval(count));
  } catch(err) {
      setCount("Error");
      setTimeout(() => {
        handleAC();
      }, 2000);
  }
  }

  const handleAC = () => {
    setCount("");
  }



  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#FFFFFF] justify-center items-center">
      <div className="flex flex-col w-[25vw] h-[65vh] bg-[#FFFFFF] items-center border rounded-sm">
        <input type="text" value={count} className="h-[100px] text-[#FFFFFF] px-2 text-right font-bold text-5xl border border-[#000000] bg-[#000000] rounded-lg w-full"/>

        <div className="bg-[#ccccb3] w-full h-full border border-[#000000] flex justify-center items-center w-full grid grid-cols-4 rounded-lg">
          
          <Button name="(" onClick={handleClick} className="sym">
            (
          </Button>

          <Button  onClick={handleAC} className="bg-[#EF4444]">
            AC
          </Button>

          <Button name=")" onClick={handleClick} className="sym">
            )
          </Button>
          
          <Button onClick={handleDEL} className="bg-[#FFFFFF]">
            DEL
          </Button>

          <Button name="1" onClick={handleClick} className="btn">
            1
          </Button>

          <Button  name="2" onClick={handleClick} className="btn">
            2
          </Button>

          <Button name="3" onClick={handleClick} className="btn">
            3
          </Button>

          <Button name="+" onClick={handleClick} className="bg-[#FFFFFF]">
            +
          </Button>

          <Button name="4" onClick={handleClick} className="btn">
            4
          </Button>

          <Button name="5" onClick={handleClick} className="btn">
            5
          </Button>

          <Button name="6" onClick={handleClick} className="btn">
            6
          </Button>

          <Button name="-" onClick={handleClick} className="bg-[#FFFFFF]">
            -
          </Button>

          <Button name="7" onClick={handleClick} className="btn">
            7
          </Button>

          <Button name="8" onClick={handleClick} className="btn">
            8
          </Button>

          <Button name="9" onClick={handleClick} className="btn">
            9
          </Button>

          <Button name="*" onClick={handleClick} className="bg-[#FFFFFF]">
            *
          </Button>

          <Button name="." onClick={handleClick} className="sym">
            .
          </Button>

          <Button name="0" onClick={handleClick} className="btn">
            0
          </Button>

          <Button name="/" onClick={handleClick} className="sym">
            /
          </Button>

          <Button onClick={handleANS} className="xyz">
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;