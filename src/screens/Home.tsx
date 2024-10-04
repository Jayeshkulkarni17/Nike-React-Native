import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
  ViewToken,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../utils/CartSlice';
import Header from '../components/header';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';
import TextTicker from 'react-native-text-ticker';
import Footer from '../components/footer';

const {width: screenWidth} = Dimensions.get('window');

const images = [
  {id: '1', src: require('../assets/1.png')},
  {id: '2', src: require('../assets/3.png')},
  {id: '3', src: require('../assets/2.png')},
];

const collections = [
  {id: '1', src: require('../assets/Nike3.png')},
  {id: '2', src: require('../assets/nike7.png')},
  {id: '3', src: require('../assets/c1.png')},
  {id: '4', src: require('../assets/c3.png')},
  {id: '5', src: require('../assets/Nike10.png')},
  {id: '6', src: require('../assets/c2.png')},
  // {id: '7', src: require('../assets/c2.png')},
  // {id: '8', src: require('../assets/c1.png')},
  // {id: '9', src: require('../assets/c3.png')},
];

const slider = [
  {
    id: '1',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/Nike3.png'),
  },
  {
    id: '2',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c2.png'),
  },
  {
    id: '3',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c1.png'),
  },
  {
    id: '4',
    price: '$80,000',
    name: 'Nike SB Dunk Low Pro "Paris"',
    src: require('../assets/c3.png'),
  },
];

const Home = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});

  const handleAddCart = (Product: any) => {
    if (addedToCart[Product.id]) {
      // If item is already added, remove it from the cart
      dispatch(removeItem(Product.id));
      Toast.show({
        type: 'info',
        text1: 'Removed from Cart',
        text2: `${Product.name} has been removed from your cart!`,
        text1Style: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        text2Style: {
          fontSize: 16,
        },
        position: 'top',
        visibilityTime: 4000,
      });
  
      // Set the product as not added
      setAddedToCart((prev) => ({
        ...prev,
        [Product.id]: false, // Mark as not added
      }));
    } else {
      // If item is not in the cart, add it
      dispatch(addItem(Product));
      Toast.show({
        type: 'success',
        text1: 'Added to Cart',
        text2: `${Product.name} has been added to your cart! 👟`,
        text1Style: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        text2Style: {
          fontSize: 16,
        },
        position: 'top',
        visibilityTime: 4000,
      });
  
      // Set the product as added
      setAddedToCart((prev) => ({
        ...prev,
        [Product.id]: true, // Mark as added
      }));
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({animated: true, index: nextIndex});
      Animated.timing(animatedValue, {
        toValue: nextIndex,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== undefined) {
      const newIndex = viewableItems[0].index as number;
      Animated.timing(animatedValue, {
        toValue: newIndex,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setCurrentIndex(newIndex);
      });
    }
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const getDotStyle = (index: number) => {
    const isActive = index === currentIndex;
    return {
      width: isActive ? 10 : 10,
      height: isActive ? 10 : 10,
      backgroundColor: isActive ? '#ECECEC' : '#FFFFFF',
      borderRadius: 6,
      marginHorizontal: 5,
    };
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ECE2D1']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <Header />
        <ScrollView>
          <View style={styles.typeContainer}>
            <TouchableOpacity>
              <Text style={styles.typetext}>Men</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity>
              <Text style={styles.typetext}>Women</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity>
              <Text style={styles.typetext}>Kids</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.movingtext}>
            <TextTicker
              style={styles.marqueeText}
              duration={4000}
              loop
              bounce
              shouldAnimateTreshold={40}
              repeatSpacer={0}
              marqueeDelay={1000}>
              Limited collections.Early access.Limited collections.Early
              access.Limited collections.
            </TextTicker>
          </View>

          <View>
            <FlatList
              ref={flatListRef}
              data={images}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
              renderItem={({item}) => (
                <View style={styles.imageWrapper}>
                  <Image source={item.src} style={styles.image} />
                </View>
              )}
              contentContainerStyle={styles.imagesContainer}
            />
            <View style={styles.dotContainer}>
              {images.map((item, index) => (
                <Animated.View key={item.id} style={getDotStyle(index)} />
              ))}
            </View>
          </View>

          <View style={styles.scontainer}>
            <View style={styles.ttext}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Top
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Products
              </Text>
            </View>

            <ScrollView
              style={styles.slider}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {slider.map(item => (
                <View key={item.id} style={styles.sliderContainer}>
                  <Image source={item.src} style={styles.imageS} />
                  <Text style={styles.price}>{item.price}</Text>
                  <Text style={styles.name}>{item.name}</Text>
                  <TouchableOpacity
                    style={styles.addB}
                    onPress={() => handleAddCart(item)}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
                      {addedToCart[item.id] ? 'Added To Cart' : 'Add To Cart'}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.text}>
            <Text
              style={{
                color: '#003149',
                fontSize: 22,
                fontWeight: '900',
                fontFamily: 'Gilroy-Bold',
              }}>
              Famous Collections
            </Text>
          </View>

          <View style={styles.gridbox}>
            {collections.map(item => (
              <TouchableOpacity key={item.id}>
                <LinearGradient
                  colors={['#f4b3ef', '#b2e5f8', '#f2f3e2', '#36a5ff']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  key={item.id}
                  style={styles.gradientgrid}>
                  <View style={styles.imageContainer}>
                    <Image source={item.src} style={styles.imageC} />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.bottomText}>
            <Text style={styles.bText}>Just</Text>
            <Text style={styles.bText}>Do It.</Text>
            <Text
              style={{
                color: '#9E9E9E',
                fontSize: 35,
                fontFamily: 'Gilroy-Regular',
                fontWeight: '600',
                marginTop: 8,
              }}>
              Crafted with ❤️‍🔥
            </Text>
          </View>
        </ScrollView>
        <Footer />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: '#003149',
    marginHorizontal: 10,
  },
  typetext: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    color: '#003149',
  },
  movingtext: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    backgroundColor: '#000000',
    marginTop: 20,
  },
  marqueeText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
    fontFamily: 'Gilroy-Bold',
  },
  imagesContainer: {
    // flexGrow: 1,
    // justifyContent:'center'
  },
  imageWrapper: {
    width: screenWidth,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scontainer: {
    backgroundColor: '#000000',
    width: '100%',
    paddingVertical: 3,
    flexDirection: 'row',
    flex: 1,
  },
  ttext: {
    zIndex: 10,
    backgroundColor: '#000000',
    width: '33%',
    // height: 260,
    // paddingVertical:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    flexDirection: 'row',
  },
  sliderContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 10,
    paddingVertical: 10,
    width: 170,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imageS: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  addB: {
    marginTop: 20,
    backgroundColor: '#AB0F1E',
    // paddingHorizontal: 30,
    width:'70%',
    alignItems:'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    paddingHorizontal: 20,
    marginVertical:20,
  },
  gridbox: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  gradientgrid: {
    padding: 2,
     borderRadius: 30,
    marginHorizontal: 10,
    // marginVertical:10
    marginBottom:20
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 26,
    backgroundColor: '#fff',
    padding: 10,
    // left: 0,
  },
  imageC: {
    width: 90,
    height: 90,
    right: 10,
    resizeMode: 'contain',
  },
  bottomText: {
    marginTop: 5,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  bText: {
    color: '#9E9E9E',
    fontSize: 50,
    fontFamily: 'Gilroy-Bold',
    fontWeight: '900',
    marginVertical: 5,
  },
});

export default Home;
