import React from "react";
import {FlatList} from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import {useSelector, useDispatch} from "react-redux";
import * as cartActions from "../../store/actions/cart";
import HeaderBtn from "../../components/UI/HeaderBtn";
import {Item, HeaderButtons} from "react-navigation-header-buttons";

const ProductOverviewScreen = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.avaliableProduct);
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={products}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "Our courses",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderBtn}>
      <Item title="Cart" iconName="ios-cart" />
    </HeaderButtons>
  ),
  headerStyle: {
    backgroundColor: "#1e3799"
  },
  headerTitleStyle: {
    fontSize: 30,
    fontFamily: "Right"
  },
  headerTintColor: "white"
};

export default ProductOverviewScreen;
