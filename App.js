import React from "react";
import { Provider } from "react-redux";
import Navigation from './Screens/NavigationScreens';
import { store } from "./State/store";

const App = () => {
  return(
    <>
      <Provider store={store}>
      <Navigation/>
      </Provider>
    </>
  );
  }

  export default App;