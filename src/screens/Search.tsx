import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { ScrollView } from 'react-native-gesture-handler';

const Search = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#FFFFFF', '#ECE2D1']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <Header />
      <View style={styles.searchbox}>
        <TextInput placeholder="Search" />
        <TouchableOpacity>
          <EvilIcons name="close-o" size={26} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        
      </ScrollView>
    </LinearGradient>

    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbox: {
    marginTop:18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderColor: '#003149',
    borderWidth: 2,
    borderRadius: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Search;
