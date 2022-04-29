import React from "react";

export const PizzaBlock = ()=>{
    return (
        <div className = "pizzaBlock">
            <div className = "pizzaImg">
                <img src = "http://pizzahutantilles.fr/assets/images/pizza-panel-thumb.png" alt = "PizzaImage"></img>
            </div>
            <div className = "pizza-name">
                <h2>California Pizza</h2>
            </div>
            <div className = "pizzaSettings">
                    <ul className = "pizzaTypes">
                        <li>Type 1</li>
                        <li>Type 2</li>
                    </ul>
                    <ul className = "pizzaSize">
                        <li>26sm</li>
                        <li>30sm</li>
                        <li>40sm</li>
                    </ul>
            </div>
            <div className = "pizza-controls">
                <ul>
                    <li className = "price">12$</li>
                    <li>
                        <button>
                            <span>+</span>
                            <span>Add</span>
                            <span>2</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}