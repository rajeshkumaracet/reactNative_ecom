import React, {useState} from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import ShopNavigator from "./navigation/ShopNavigator";
import {AppLoading} from "expo";
import * as Font from "expo-font";
import {composeWithDevTools} from "redux-devtools-extension";

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    Proxi: require("./assets/fonts/Proxi.ttf"),
    FlairB: require("./assets/fonts/PlayfairDisplaySC-Regular.ttf"),
    FlairR: require("./assets/fonts/PlayfairDisplaySC-Regular.ttf"),
    Right: require("./assets/fonts/Righteous-Regular.ttf")
  });
};

export default function App() {
  const [fontlLoaded, setFontloaded] = useState(false);

  if (!fontlLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontloaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
