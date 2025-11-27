const cart = useSelector(state => state.cart);
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);