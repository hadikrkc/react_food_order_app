import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props =>{
    const [btnIsHighlighted, setBtnIsHeighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=> {
        if(items.length === 0){
            return;
        }

        setBtnIsHeighlighted(true)

        const timer = setTimeout(()=> {
            setBtnIsHeighlighted(false);
        }, 300);

        return() => {
            clearTimeout(timer);
        }
    }, [items])

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
    );
}

export default HeaderCartButton;