import React from "react";
// import MenuData from "../data";

function Menu(props) {
// console.log(MenuData);
    return (
        <div className="pizza-container">
            <h3 className="pizza-name">{props.name}</h3>
            <p className="pizza-topping">{props.topping}</p>
            <p className="pizza-price">{props.price} Ft</p>
         <hr />
         
       </div>
    )
}

export default Menu;
