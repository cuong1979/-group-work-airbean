import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Styles from './Status.module.css'
import drone from '../../assets/graphics/drone.svg'
import newOrder from '../../actions/newOrder'
import { motion } from 'framer-motion'





function Status() {

    const [orderNr, setOrderNr] = useState('');
    const [eta, setEta] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();



    const drinksState = useSelector(state => {
        return state.beverages;
    })

    const url = 'http://localhost:5000/api/beans';


    let drinksPost = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(drinksState)
    }

    useEffect(async () => {
        const respons = await fetch(url, drinksPost)
        const data = await respons.json()
        console.log(data)
        setEta(data.eta)
        setOrderNr(data.orderNr)
        dispatch(newOrder())
        localStorage.removeItem('chosenBeverages');

    }, []);



    return (

        <motion.div className={Styles.statusCountainer}
        initial={{opacity:0}}
        animate={{ opacity:1 }}
        transition={{duration:0.5}}

        
        >
            <h4> Ordernummer #{orderNr}</h4>
            <img className={Styles.drone} src={drone}></img>
            <h1> Din beställning är på väg!</h1>
            <span> {eta} </span>  <span> minuter</span>
            <button onClick={()=>{ history.push('/landing')}}> ok, cool! </button>
        </motion.div>
    );
}

export default Status;