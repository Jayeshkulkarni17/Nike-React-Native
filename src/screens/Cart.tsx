import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageSourcePropType } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/Store'; // Import the store type for type safety
import Header from '../components/header';
import Footer from '../components/footer';
import LinearGradient from 'react-native-linear-gradient';

// Define the component
const Cart = () => {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

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
            <ScrollView>
              {cartItems.map((item: { id: React.Key | null | undefined; src: ImageSourcePropType | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <View key={item.id} style={styles.cartItem}>
                  <Image source={item.src} style={styles.image} />
                  <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
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
});

export default Cart;
