import { Fragment, useState } from 'react';
import Header from './componenets/Layout/Header';
import Meals from './componenets/Meals/Meals';
import Cart from './componenets/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment >
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
          <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
