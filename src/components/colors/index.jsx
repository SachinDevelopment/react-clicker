import React, { useState, useEffect } from 'react'
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
});


function Colors() {
    const [colors, setColors] = useState([]);
    useEffect(() => {
        instance.get(`/api/colors`)
            .then(res => {
                setColors(res.data);
            }).catch(error => {
              });
    }, [colors])

    return (
        <div>
            {colors.map((element, index) => {
               return <div>{'this is the color ' + element.color}</div>
            })}
        </div>
    )
}

export default Colors;

