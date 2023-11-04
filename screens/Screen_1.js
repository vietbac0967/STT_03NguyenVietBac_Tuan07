import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";

export default function Screen_1({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/shop")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  const Item = ({ img }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="contain" source={{ uri: img }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cafe world</Text>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item img={item.url} />}
        ></FlatList>

        <Pressable style={styles.button}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: "white",
              textAlign: "center"
            }}
          >
            GET STARTED
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(222, 225, 230, 1)",
    alignItems: "center",
  },
  item: {
    width: 200,
    height: 73,
    borderRadius: 6,
    marginVertical: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
  },
  button: {
    width: "110%",
    justifyContent: "center", 
    height: 45,
    borderRadius: 6,
    backgroundColor: "rgba(0, 189, 214, 1)",
  },
});
