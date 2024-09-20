import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const navigation = useNavigation();

  const handlePressCart = () => {
    navigation.navigate('Cart');
  }
  return (
    <View style={styles.head}>
      <View style={styles.headContainer}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
          <Image
            source={require('../assets/nikelogo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="hearto" size={25} color={'#000000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={handlePressCart}>
            <AntDesign name="shoppingcart" size={28} color={'#000000'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
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
