import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import GradientButton from "react-native-gradient-buttons";

const ProductItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onViewDetail()}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.Imgsty} source={{uri: props.image}} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>&#8377; {props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          {/* <GradientButton text="Blue Violet" width='90%' blueViolet impact /> */}
          <GradientButton
            onPressAction={props.onViewDetail}
            text="View Details"
            height={43}
            radius={20}
            textStyle={{fontSize: 15, padding: 12, fontFamily: "FlairB"}}
            deepBlue
          />
          {/* <Button title="View Details" onPress={props.onViewDetail} /> */}

          <GradientButton
            text="Add to Cart"
            height={43}
            radius={20}
            textStyle={{fontSize: 15, padding: 12, fontFamily: "FlairB"}}
            deepBlue
            onPress={props.onAddToCart}
          />
          {/* <Button title="Add to Cart" onPress={props.onAddToCart} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: {width: 0, heigth: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20
  },
  Imgsty: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 15,
    color: "#0c2461",
    fontFamily: "FlairB",
    marginVertical: 4
  },
  price: {
    fontSize: 20,
    color: "#b71540",
    fontFamily: "FlairR"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 23,
    paddingHorizontal: 5
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  }
});

export default ProductItem;
