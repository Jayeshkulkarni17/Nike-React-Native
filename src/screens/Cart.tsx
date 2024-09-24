import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/Store';
import Header from '../components/header';
import Footer from '../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import { clearCart } from '../utils/CartSlice';
import Toast from 'react-native-toast-message';

// Define the component
const Cart = () => {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state: RootState,) => state.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
    Toast.show({
      type: 'success', // Or 'error', 'info' based on the type of message
      text1: 'Cart Is Clear',
      text1Style: {
        fontSize: 20, // Increase the size of text1
        fontWeight: 'bold',
      },
      position: 'top', // You can use 'top' or 'bottom'
      visibilityTime: 4000, // Time in ms
    });

  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ECE2D1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <Header />
        {/* Check if there are items in the cart */}
        <View style={styles.cartItemsContainer}>
          {cartItems.length > 0 ? (
            <>
            <ScrollView>
              {cartItems.map((item: any) => (
                <View key={item.id} style={styles.cartItem}>
                  <Image source={item.src} style={styles.image} />
                  <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.clearB} onPress={handleClear}>
              <Text style={{color:"#003149",fontSize:18,fontWeight:'700'}}>Clear Cart</Text>
            </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.emptyText}>Your cart is empty</Text>      
          )}
        </View>
      </LinearGradient>
      <Footer />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemsContainer: {
    padding: 16,
    // backgroundColor:'#000'
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'grey',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: 'grey',
  },
  clearB:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical:15,
    marginHorizontal:120,
    borderWidth:2,
    borderRadius:30,
    borderColor:'#003149'
    // backgroundColor:'#000'
  },
});

export default Cart;
