import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View ,Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Splash = () => {
    
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('GetStarted');
        },2000)
        return () => clearTimeout(timer);
    },[navigation])
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFFFFF', '#ECE2D1', '#FCEACA']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
            >
                <View style={{alignItems:'center'}}>
                    <Image source={require('../assets/nikelogo.png')} />
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
});

export default Splash;
