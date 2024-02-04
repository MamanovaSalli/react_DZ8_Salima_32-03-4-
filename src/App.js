import React, {useState} from "react";

const Color = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')
    const changColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor)
}
return(
    <div className="canging" style={{backgroundColor, minHeight: '100vh', transition: 'background-color 0.4s'}}>
        <h1>Change background color</h1>
        <button onClick={changColor}>Change here</button>
    </div>
)
}

export default Color;
