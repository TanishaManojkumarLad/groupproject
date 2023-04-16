import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react'

export default function Food() {

    const [menuState, setMenu] = useState([]);
    const [error, setError] = useState(null)
    const [loaded, isLoaded] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bbc1b4c64fmsh7dbf106dddfef9ep1e4162jsn7c4bb140dfd5',
            'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
        }
    };

    useEffect(() => {

        fetch('https://the-mexican-food-db.p.rapidapi.com/', options)
            .then((response) => response.json())
            .then((json) => {
                setMenu(json);
                console.log(json);
            });
    }, []);

    if (error) {

        return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {

        return <div>Loading...</div>;

    } else {

        return (

            <ul>

                {menuState.map(item => (

                    <li key={item.id} onClick={clickEvent}>

                        {item.title} <img src={item.image} alt="different items" width={70} height={70} />

                    </li>

                ))}



            </ul>
        );

    }

}



const clickEvent = () => {

    alert("this item has been selected")

};