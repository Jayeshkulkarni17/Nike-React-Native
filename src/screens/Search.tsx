import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ScrollView} from 'react-native-gesture-handler';

const collections = [
  {
    id: '1',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    size:'uk 9',
    src: require('../assets/Nike3.png'),
  },
  {
    id: '2',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro"Friends & Family"',
    size:'uk 8',
    src: require('../assets/c2.png'),
  },
  {
    id: '3',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c1.png'),
    size:'uk 9',
  },
  {
    id: '4',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
    size:'uk 9',
  },
  {
    id: '5',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
    size:'uk 9',
  },
  {
    id: '6',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
    size:'uk 9',
  },
  {
    id: '7',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
    size:'uk 9',
  },
  {
    id: '8',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
    size:'uk 9',
  },
];


const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ECE2D1']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <Header />
        <View style={styles.searchbox}>
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <TouchableOpacity onPress={() => setSearch('')}>
            <EvilIcons name="close-o" size={26} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.scontainer}>
            {collections.map(item => (
              <TouchableOpacity key={item.id} style={styles.sbox}>

              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbox: {
    marginTop: 18,
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
  scontainer:{
    marginTop:10,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'center',
    gap:10
  },
  sbox:{
    alignItems:'center',
    width:'20%',
    height:80
  }
});

export default Search;
