import { Fragment } from 'react';
import Header from './componenets/Layout/Header';
import Meals from './componenets/Meals/Meals';
import Cart from './componenets/Cart/Cart';

function App() {
  return (
    <Fragment >
      <Cart></Cart>
      <Header></Header>
      <div>
          <Meals></Meals>
      </div>
    </Fragment>
  );
}

export default App;
