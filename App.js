import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import news_data from './src/news_data.json'
import NewsCard from "./src/components/NewsCard";
import news_banner_data from "./src/news_banner_data.json"

function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />
  const keyNews = item => item.u_id.toString()

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.header}>NEWS</Text>
        <FlatList 
          ListHeaderComponent={() => (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={style.banner}
            >
              {
                news_banner_data.map((bannerNews, index) => 
                <Image key={index} source={{uri: bannerNews.imageUrl}} style={style.banner_image} />
              )
              }
            </ScrollView>
          )}
          data={news_data}
          renderItem={renderNews}
          keyExtractor={keyNews}
        />

      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F3"
  },
  banner_image: {
    height: hp("20%"),
    width: wp("50%")
  },
  header: {
    fontFamily: "italic",
    fontSize: 30,
    color: "#566142",
    fontWeight: "bold",
    height: hp("5%"),
    marginLeft: 7
  },
  banner: {
    height: hp("20%")
  }
});

export default App;