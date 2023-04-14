import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react'


export default function Food() {
    return <div>

        <div>Food page

        </div>

        <div>

            <button>Fried Chicken</button>

        </div>

        <div>

            <button >Salad</button>

        </div>

        <div>

            <button>Pizza</button>

        </div>

        <div>

            <button href="App.css">French Fries</button>

        </div>



    </div>





}

// API Link for future reference

//Pizza and Desserts api key: 103ddd65b7msh1a7b70cf504bb14p173c35jsnd33e6361294d

//api host: pizza-and-desserts.p.rapidapi.com

//url: https://pizza-and-desserts.p.rapidapi.com/pizzas/1

const MenuCard = (props) => {

    const [menuState, setMenu] = useState('');



    useEffect(() => {





    }, []

    )



}



function listFood() {

    let foods = [

        {
            "Name": "3 Piece Fried Chicken",

            "Price": 5.99,

            "Spice Level": 0,

            "Description": "Fried Chicken with chickens from the Miyagi prefecture"

        },

    ]

}
