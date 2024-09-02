import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconWithText}
        >
          <Octicons
            name="home"
            size={27}
            color={'#000000'}
          />
          <Text
            style={styles.text}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWithText}
        >
          <Ionicons
            name="search"
            size={28}
            color={'#000000'}
          />
          <Text
            style={[
              styles.text,
            ]}>
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWithText}
        >
          <Ionicons
            name="settings-outline"
            size={28}
            color={'#000000'}
          />
          <Text
            style={[
              styles.text
            ]}>
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
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: '#000000',
  },
});

export default Footer;
