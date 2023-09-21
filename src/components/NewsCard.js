import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const NewsCard = ({ news }) => {
    return (
        <View style={styles.contanier}>

            <Image style={styles.image} source={{ uri: news.imageUrl }} />
            <View style={styles.inside_contanier}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.author}>{news.author}</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: "#F4F7F3",
        margin: 5
    },
    image: {
        height: hp("25%"),
        borderRadius: 5
    },
    title: {
        backgroundColor: "#dee7da",
        fontSize: 20,
        fontWeight: "bold"
    },
    description: {
        backgroundColor: "#F4F7F3",
        fontSize: 15,
        fontWeight: "normal"
    },
    inside_contanier: {
        backgroundColor: "#dee7da",
        justifyContent: "space-between"
        },
    author: {
        backgroundColor: "#F4F7F3",
        fontSize: 10,
        textAlign: "right",
        fontStyle: "italic"
    }
})

export default NewsCard;