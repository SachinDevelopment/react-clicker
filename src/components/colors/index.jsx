import React, { useState, useEffect } from 'react'
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});


function Colors() {
    const [colors, setColors] = useState([]);
    console.log(colors);
    useEffect(() => {
        instance.get(`/api/colors`)
            .then(res => {
                setColors(res.data);
            }).catch(error => {
              });
    }, [colors])

    return (
        <div>
            {colors.map((color) => {
               return <div>{'this is the color ' + color.color}</div>
            })}
        </div>
    )
}

export default Colors;

