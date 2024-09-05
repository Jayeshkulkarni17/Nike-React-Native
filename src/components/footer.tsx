import React, { useState } from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Footer: React.FC = () => {
  const [activeIcon,setActiveIcon] = useState<String>('Home');

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const state = navigation.getState();
      const routeName = state?.routes[state.index]?.name.toLowerCase() || 'home';
      setActiveIcon(routeName);
    },[navigation])
  );

  const handlePress = (iconName: String) => {
    setActiveIcon(iconName);
    if (iconName === 'search') {
        navigation.navigate('Search');
    } else if (iconName === 'home') {
        navigation.navigate('Home');
    } 
    else if (iconName === 'setting') {
        navigation.navigate('Setting');
    }
};


  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handlePress('home')}
          style={styles.iconWithText}
        >
          <Octicons
            name="home"
            size={27}
            color={activeIcon === 'home' ? '#000000' : '#9E9E9E'}
            />
          <Text
            style={[styles.text, activeIcon === 'home' && styles.activeText]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('search')}
          style={styles.iconWithText}
        >
          <Ionicons
            name="search"
            size={28}
            color={activeIcon === 'search' ?  '#000000' : '#9E9E9E'}
            />
          <Text
            style={[styles.text, activeIcon === 'search' && styles.activeText]}>
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('setting')}
          style={styles.iconWithText}
        >
          <Ionicons
            name="settings-outline"
            size={28}
            color={activeIcon === 'setting' ? '#000000' : '#9E9E9E'}
            />
          <Text
           style={[styles.text, activeIcon === 'setting' && styles.activeText]}>
            Setting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 90,
    top: 720,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  foot: {},
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    bottom: 5,
  },
  iconWithText: {
    alignItems: 'center',
    width: '33%',
  },
  text: {
    color: '#9E9E9E',
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: '#000000',
  },
});

export default Footer;
