import React, { useState, useEffect } from 'react'
import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});


function Colors(props) {
    const [colors, setColors] = useState([]);
    console.log(colors);
    useEffect(() => {
        instance.get(`/api/colors`)
            .then(res => {
                setColors(res.data);
                console.log("printing response", res);
            }).catch(error => {
                console.log("printing errror", error);
              });
    }, [colors])

    return (
        <div>
            {colors.map((color, index) => {
               return <div>{'this is the color ' + color.color}</div>
            })}
        </div>
    )
}

export default Colors;

