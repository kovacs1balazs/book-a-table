import mobileBackground from "../images/mobileBackground.jpg";
import background from "../images/background.jpg";
import { useState, useEffect } from "react";

function BackgroundSwitcher () {
    const [dimension, setDimension] = useState({width: window.innerWidth});
    // console.log(dimension);

    useEffect(() => {
        function handleSwitch () {
            setDimension({
                width: window.innerWidth
            })

        }
        window.addEventListener("resize", handleSwitch)
        return _=> {
            window.removeEventListener("resize", handleSwitch)
        }

    })

   return window.innerWidth < 800 ? 
        <img className="mobileBackground" src={mobileBackground} alt="" />
    : 	<img className="background" src={background} alt="" />
}

export default BackgroundSwitcher;
