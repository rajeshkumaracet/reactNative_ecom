import {createStackNavigator} from "react-navigation-stack";
import {Platform} from "react-native";
import {createAppContainer} from "react-navigation";
import Color from "../constant/Color";

//screens
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const navigator = createStackNavigator(
  {
    ProductOverviewScreen: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {mode: "modal"},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "andriod" ? Color.primary : ""
      },
      headerTintColor: Platform.OS === "andriod" ? "white" : Color.primary
    }
  }
);

export default createAppContainer(navigator);
