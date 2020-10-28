import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import PetIcon from '@material-ui/icons/Pets';
// const instance = axios.create({
//     baseURL: 'http://localhost:5000/',
// });


function Mercenary(props) {
    const {gold} = props;
    const [mercenary, setMercenary] = useState([{
        "name": "Treebeast",
        "dps": 5,
        "cost": 2,
        "owned": 0,
    },
    {
        "name": "Tigre",
        "dps": 10,
        "cost": 2,
        "owned": 0,
    },
    {
        "name": "pig",
        "dps": 20,
        "cost": 2,
        "owned": 0,
    }]);
    // useEffect(() => {
    //     instance.get(`/api/mercenary`)
    //         .then(res => {
    //             setMercenary(res.data);
    //         });
    // }, [mercenary])
    const buyClicked = (cost) => {

    };
    return (
        <div>
            <List>
                {mercenary.map((element) => {
                    const {name, owned, cost, dps} =  element;
                    return (
                        <div>
                            <ListItem>
                                <ListItemIcon>
                                    <PetIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={name}
                                    secondary={`owned : ${owned}`}
                                />
                            </ListItem>
                            <Button variant="contained" color="primary" style={{ marginLeft: '2rem' }} onClick={buyClicked(cost)}>
                                Buy
                            </Button>
                        </div>)
                })}
            </ List>
        </div>
    )
}

export default Mercenary;

