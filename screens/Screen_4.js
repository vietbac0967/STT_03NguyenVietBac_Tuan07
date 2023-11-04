import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";

export default function Screen_4({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Frame.png")}
            style={{ width: 20, height: 20, marginTop: 8 }}
            resizeMode="contain"
          ></Image>
        </Pressable>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Your orders</Text>
        <Image
          source={require("../assets/Image177.png")}
          style={{ width: 24, height: 24, marginTop: 5 }}
          resizeMode="contain"
        ></Image>
      </View>

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 347,
            height: 100,
            borderRadius: 6,
            backgroundColor: "rgba(0, 189, 214, 1)",
          }}
        >
          <View>
            <Text
              style={[
                styles.text,
                { paddingVertical: 15, paddingHorizontal: 20 },
              ]}
            >
              CAFE DELIVERY
            </Text>
            <Text
              style={[
                styles.text,
                { paddingVertical: 5, paddingHorizontal: 20 },
              ]}
            >
              Order #18
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                paddingTop: 30,
                paddingHorizontal: 20,
              }}
            >
              $5
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 347,
            height: 100,
            borderRadius: 6,
            backgroundColor: "rgba(131, 83, 226, 1)",
            marginVertical: 10,
          }}
        >
          <View>
            <Text
              style={[
                styles.text,
                { paddingVertical: 15, paddingHorizontal: 20 },
              ]}
            >
              CAFE
            </Text>
            <Text
              style={[
                styles.text,
                { paddingVertical: 5, paddingHorizontal: 20 },
              ]}
            >
              Order #18
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                paddingTop: 30,
                paddingHorizontal: 20,
              }}
            >
              $25
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 350,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "rgba(188, 193, 202, 1)",
            flexDirection: "row",
            height: "auto",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/Image246.png")}
              resizeMode="contain"
            ></Image>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: 500, paddingHorizontal: 10 }}
              >
                Salt
              </Text>
              <Text style={{ paddingTop: 20, paddingHorizontal: 10 }}>$5</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Image230.png")}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
              resizeMode="contain"
            ></Image>
            <Image
              source={require("../assets/Image231.png")}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
              resizeMode="contain"
            ></Image>
          </View>
        </View>

        <View
          style={{
            width: 350,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "rgba(188, 193, 202, 1)",
            flexDirection: "row",
            height: "auto",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/Image249.png")}
              resizeMode="contain"
            ></Image>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: 500, paddingHorizontal: 10 }}
              >
                Weasel
              </Text>
              <Text style={{ paddingTop: 20, paddingHorizontal: 10 }}>$20</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Image230.png")}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
              resizeMode="contain"
            ></Image>
            <Image
              source={require("../assets/Image231.png")}
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
              resizeMode="contain"
            ></Image>
          </View>
        </View>

        <Pressable
          style={{
            marginTop: 40,
            width: 350,
            height: 44,
            borderRadius: 6,
            backgroundColor: "rgba(239, 176, 52, 1)",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "white",
              textAlign: "center",
            }}
          >
            PAY NOW
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
    color: "white",
  },
});
