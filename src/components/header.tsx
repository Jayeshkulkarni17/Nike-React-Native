import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const [activeIcon,setActiveIcon] = useState<string>('');
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const state = navigation.getState();
      const RouteName = state?.routes[state.index]?.name.toLowerCase() || '';
      setActiveIcon(RouteName)
    },[navigation])
  )
  const handlePressCart = (iconName:string) => {
    setActiveIcon(iconName);
    if (iconName === 'cart') {
      navigation.navigate('Cart');
  } else if (iconName === 'like') {
      navigation.navigate('Home');
  } 
  };
  return (
    <View style={styles.head}>
      <View style={styles.headContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../assets/nikelogo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="hearto" size={25} color={'#9E9E9E'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handlePressCart('cart')}>
            <Ionicons name='cart-outline' size={30} color={activeIcon === 'cart' ? '#000' : '#9E9E9E'}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    // height: 70,
    paddingVertical:10,
    justifyContent: 'center',
    // backgroundColor:'#000'
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  logo: {
    width: 70,
    height: 25,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
