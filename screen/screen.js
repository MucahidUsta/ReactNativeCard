import React from "react";
import { View, Text } from "react-native"; 
import { ProductList } from "../data/ProductList";
import MyComponent from "../Component/Comp";
export default function Data () {
  return (
    <View >
        
      {ProductList.map((item) => (
        <View key={item.id}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
            <Text>{item.image}</Text>
            <Text>{item.UnitPrice}</Text>
        </View>
      ))}
    </View>
  );
}
