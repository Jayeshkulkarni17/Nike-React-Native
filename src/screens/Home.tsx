import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image,ScrollView, FlatList, Animated, ViewToken, Dimensions } from 'react-native';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import TextTicker from 'react-native-text-ticker';
import Footer from '../components/footer';
// import { Shadow } from 'react-native-shadow-2';

const {width: screenWidth} = Dimensions.get('window');

const images = [
  {id: '1', src: require('../assets/homeshoe1.png')},
  {id: '2', src: require('../assets/homeshoe1.png')},
  {id: '3', src: require('../assets/homeshoe1.png')},
];


const Collections = [
  {id: '1', src: require('../assets/homeshoe1.png')},
  {id: '2', src: require('../assets/homeshoe1.png')},
  {id: '3', src: require('../assets/homeshoe1.png')},
];



const Home = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

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
      width: isActive ? 30 : 30,
      height: isActive ? 6 : 6,
      backgroundColor: isActive ? '#ECECEC' : '#FFFFFF',
      borderRadius: 6,
      marginHorizontal: 2,
    };
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ECE2D1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
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
            duration={30000}
            loop
            bounce
            shouldAnimateTreshold={40}
            repeatSpacer={0}
            marqueeDelay={1000}
          >
            Limited collections.Early access.Limited collections.Early access.Limited collections.
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

        <View style={styles.cardBox}>

        </View>

        <View style={styles.text}>
          <Text style={{color:'#003149',fontSize:22,fontWeight:'900',fontFamily:'Gilroy-Bold'}}>Famous Collections</Text>
        </View>

        {/* <Shadow distance={15} startColor={'#eb9066d8'} endColor={'#ff00ff10'} offset={[3, 4]}>
  <View style={{ borderTopStartRadius: 24, borderBottomEndRadius: 0, borderRadius: 10, backgroundColor: '#c454f0dd' }}>
    <Text style={{ margin: 20, fontSize: 20 }}>🤯</Text>
  </View>
</Shadow> */}

        <View style={styles.gridbox}>

        </View>

        {/* <View style={styles.footerText}>
          <Text>Live</Text>


        </View> */}



        </ScrollView>
        <Footer/>
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
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    // paddingHorizontal: 10,
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: '#003149',
    marginHorizontal: 8,
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
    height: 40,
    backgroundColor: '#000000',
    marginTop: 20,
  },
  marqueeText: {
    top:5,
    fontSize: 20,
    color: 'red',
    fontWeight:'600',
    fontFamily:'Gilroy-Bold'
  },
  imagesContainer: {
    // flexGrow: 1,
    // justifyContent:'center'
  },
  imageWrapper: {
    width: screenWidth ,
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
  cardBox:{
    width:'100%',
    height:180,
    backgroundColor:'#000000'
  },
  text:{
    paddingHorizontal:20,
    top:20
  },
  gridbox:{

  }
});

export default Home;
