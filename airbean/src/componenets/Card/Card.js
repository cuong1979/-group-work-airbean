import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import addBeverage from '../../actions/addBeverage';
import removeBeverage from '../../actions/removeBeverage';
import arrowUp from '../../assets/graphics/arrow-up.svg';
import arrowDown from '../../assets/graphics/arrow-down.svg';
import style from './Card.module.css'
import { motion } from 'framer-motion'

function Cart() {
    const [menu, setMenu] = useState([])
    const chosenBeverages = useSelector(state => state.beverages);
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:5000/api/beans`)
            .then(response => response.json())
            .then(data => {
                setMenu(data.menu);
            })
    }, [chosenBeverages]);

    const beverageList = [];

    for (let i = 0; i < menu.length; i++) {
        beverageList.push({ ...menu[i], amountOfOrder: 0 });
    }

    // console.log(beverageList)

    for (let i = 0; i < beverageList.length; i++) {
        for (let j = 0; j < chosenBeverages.length; j++) {
            if (chosenBeverages[j].id === beverageList[i].id) {
                beverageList[i].amountOfOrder += 1;
            }
        }
    }

    const beveragesToDisplay = beverageList.filter((beverage) => beverage.amountOfOrder > 0);
    // console.log(beveragesToDisplay)

    let totalPrice = 0;

    for (let i = 0; i < beveragesToDisplay.length; i++) {
        totalPrice = totalPrice + beveragesToDisplay[i].amountOfOrder * beveragesToDisplay[i].price;
    }

    function takeMyMoney() {

        if (beveragesToDisplay.length > 0) {
            history.push('/status');
        } else {
            alert('Du har inte valt några drycker.');
        }
    }

    function handleClickSave() {

          localStorage.setItem('chosenBeverages',JSON.stringify(chosenBeverages) );
            alert(' Your shopping cart is saved')
       
    }


    return (
        <motion.main className={style.cartContainer}
        initial={{x:'+100vw'}}
        animate={{x:0}}
        transition={{type:'tween'}}
        >
            <section className={style.cartContents}>
                <h1 className={style.h1}>Din beställning</h1>
                <ul className={style.ul}>
                    {beveragesToDisplay.map((beverage, index) => {
                        return (
                            <li key={index}>
                                <aside>
                                    <h3>{beverage.title}</h3>
                                    <p>{beverage.price * beverage.amountOfOrder} Kr</p>
                                </aside>
                                <aside>
                                    <hr />
                                </aside>
                                <aside>
                                    <img src={arrowUp} className={style.arrow} onClick={() => dispatch(addBeverage(beverage))} />
                                    <span>{beverage.amountOfOrder}</span>
                                    <img src={arrowDown} className={style.arrow} onClick={() => dispatch(removeBeverage(beverage))} />
                                </aside>
                            </li>
                        )
                    })}
                </ul>
                <footer className={style.footer}>
                    <div>
                        <h3>Total: </h3>
                        <div>
                            <hr />
                        </div>
                        <h3> {totalPrice} Kr</h3>
                    </div>
                    <p>inkl moms + drönarleverans</p>
                    <button className={style.btn} onClick={ takeMyMoney }>Take my money!</button>
                    <button className={style.btn2} onClick={handleClickSave}> Save your shopping cart </button>
                </footer>
            </section>
        </motion.main>
    );
}

export default Cart;