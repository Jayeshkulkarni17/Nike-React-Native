import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GetStarted = () => {
  const firstCircleAnim = useRef(new Animated.Value(500)).current; 
  const secondCircleAnim = useRef(new Animated.Value(-500)).current; 
  const shoeAnim = useRef(new Animated.Value(500)).current;
  const logoAnim = useRef(new Animated.Value(-500)).current;

  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
        Animated.timing(logoAnim, {
            toValue:5,
            duration: 1500,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
      Animated.timing(firstCircleAnim, {
        toValue: 240,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(secondCircleAnim, {
        toValue: -110,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(shoeAnim, {
        toValue: -620,
        duration: 3000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [firstCircleAnim,secondCircleAnim,shoeAnim,logoAnim]);
 
  const handleGetStarted = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ECE2D1', '#FCEACA']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.gradient}>
        <Animated.View style={[styles.logo,{transform:[{translateX:logoAnim}]}]}>
          <Image source={require('../assets/nikelogo.png')} />
        </Animated.View>

        <Animated.View style={[styles.firstCircle, {transform: [{translateX: firstCircleAnim}]}]} />
        <Animated.View style={[styles.secondCircle, {transform: [{translateX: secondCircleAnim}]}]} />
        
        <Animated.View style={[styles.shoe, {transform: [{translateY: shoeAnim}]}]}>
          <Image source={require('../assets/shoe.png')} />
        </Animated.View>

        <View style={styles.text}>  
          <Text style={styles.textLine}>LIMITED</Text>
          <Text style={styles.textLine}>COLLECTIONS</Text>
          <Text style={[styles.textLine, styles.textHighlight]}>2024</Text>
          <Text style={styles.subText}>
            His ability to control his movement
          </Text>
          <Text style={styles.subText}>keeps defenders guessing</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.touchable} onPress={handleGetStarted}>
            <Text style={styles.buttontext}>Get Started</Text>
          </TouchableOpacity>
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
  },
  logo: {
    padding: 20,
  },
  firstCircle: {
    width: 265,
    height: 265,
    backgroundColor: '#459FCA',
    borderRadius: 200,
    top: 10,
    position: 'absolute',
  },
  secondCircle: {
    width: 265,
    height: 265,
    backgroundColor: '#F98FA7',
    borderRadius: 200,
    top:200,
    position: 'absolute',
  },
  shoe: {
    position: 'absolute',
    bottom:-280,
    right:-30
  },
  text: {
    position: 'absolute',
    top: 490,
    left: 30,
  },
  textLine: {
    color: '#003149',
    fontSize: 40,
    fontWeight: '900',
    fontFamily: 'Gilroy',
    lineHeight: 45,
  },
  textHighlight: {
    color: '#B9445F',
  },
  subText: {
    color: '#003149',
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Gilroy-Regular',
    lineHeight: 20,
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -120 }],
  },
  touchable: {
    width: 240, 
    height: 60,
    backgroundColor: '#F98FA7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttontext:{
    color: '#003149',
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'Gilroy-Regular',
  }
});

export default GetStarted;
