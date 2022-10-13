import { Fragment } from 'react';
import Header from './componenets/Layout/Header';
import Meals from './componenets/Meals/Meals';
function App() {
  return (
    <Fragment >
      <Header></Header>
      <div>
          <Meals></Meals>
      </div>
    </Fragment>
  );
}

export default App;
