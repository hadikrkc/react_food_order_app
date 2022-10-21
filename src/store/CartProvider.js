import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = item => {};
    const removeItemToCartHandler = item => {};

    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return <CartContext value={cartContext}>
        {props.children}
    </CartContext>
};

export default CartProvider;