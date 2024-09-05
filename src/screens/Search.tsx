import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";


const Search = () => (
    <View style={styles.container}>
        <Header />
        <Footer />
    </View>
)


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})


export default Search;