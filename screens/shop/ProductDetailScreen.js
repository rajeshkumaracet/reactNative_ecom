import React from "react";
import GradientButton from "react-native-gradient-buttons";
import {ScrollView, View, Text, Image, Button, StyleSheet} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import * as cartActions from "../../store/actions/cart";
import CartItem from "../../models/cart-item";

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam("productId");
  const allProducts = useSelector(state =>
    state.products.avaliableProduct.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: allProducts.imageUrl}} />

      <View
        style={{
          marginVertical: 15,
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text style={styles.price}> Price: &#8377; {allProducts.price}</Text>
        <GradientButton
          onPressAction={() => {
            dispatch(cartActions.addToCart(allProducts));
          }}
          text="Add to Cart"
          height={43}
          radius={20}
          textStyle={{fontSize: 18, padding: 10, fontFamily: "FlairB"}}
          pinkDarkGreen
        />
      </View>
      <Text style={styles.description}>{allProducts.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerStyle: {
      backgroundColor: "#1e3799"
    },
    headerTitleStyle: {
      fontSize: 22
    },
    headerTintColor: "white"
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 25,
    color: "#b71540",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "FlairB"
  },
  description: {
    fontSize: 18,
    textAlign: "left",
    paddingHorizontal: 16,
    textAlign: "justify",
    fontFamily: "Right"
  }
});

export default ProductDetailScreen;
