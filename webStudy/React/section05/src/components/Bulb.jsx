import {useState} from "react";
const Bulb = ()=>{
    const [light, setLight] = useState("OFF");

    return(
      <div>
        {light==="ON"?<h1 style={{backgroundColor:"orange"}}>ON</h1>:<h1 style={{backgroundColor:"gray"}}>OFF</h1>}
        <button onClick={()=>{
        // if(light==="OFF")
        //   setLight("ON");
        // else setLight("OFF");
        setLight(light==="ON"? "OFF":"ON")
      }}>
        {light==="ON"?"끄기":"켜기"}
        </button>
      </div>
    );
  };

  export default Bulb;