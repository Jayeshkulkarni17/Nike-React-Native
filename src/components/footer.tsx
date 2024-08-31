import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { Shadow } from 'react-native-shadow-2';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Footer: React.FC = () => {
    const [activeIcon, setActiveIcon] = useState<String>('home');

    // const navigation = useNavigation();

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const state = navigation.getState();
    //         const routeName = state?.routes[state.index]?.name.toLowerCase() || 'home';
    //         setActiveIcon(routeName);
    //     }, [navigation])
    // );

    // const handlePress = (iconName: String) => {
    //     setActiveIcon(iconName);
    //     if (iconName === 'dashboard') {
    //         navigation.navigate('DashBoard');
    //     } else if (iconName === 'home') {
    //         navigation.navigate('Home');
    //     } 
    //     else if (iconName === 'payment') {
    //         navigation.navigate('Payment');
    //     }
    // };

    return (
        <View style={styles.footer}>
            {/* <LinearGradient
                colors={['#E4BF67', '#CD9134']}
                style={styles.foot}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}> */}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconWithText} 
                    // onPress={() => handlePress('home')}
                        >
                        <Octicons name="home" size={26} color={activeIcon === 'home' ? '#000000' : '#FFFFFF'} />
                        <Text style={[styles.text, activeIcon === 'home' && styles.activeText]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWithText} 
                    // onPress={() => handlePress('payment')}
                    >
                        <FontAwesome5 name="money-check" size={25} color={activeIcon === 'payment' ? '#000000' : '#FFFFFF'} />
                        <Text style={[styles.text, activeIcon === 'payment' && styles.activeText]}>Payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWithText} 
                    // onPress={() => handlePress('dashboard')}
                    >
                        <Entypo name="bar-graph" size={25} color={activeIcon === 'dashboard' ? '#000000' : '#FFFFFF'} />
                        <Text style={[styles.text, activeIcon === 'dashboard' && styles.activeText]}>DashBoard</Text>
                    </TouchableOpacity>
                </View>
            {/* </LinearGradient> */}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: 90,
        top: 705,
        backgroundColor: '#EEE5D6',
        borderRadius: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    foot: {
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '110%',
        bottom: 5,
    },
    iconWithText: {
        alignItems: 'center',
        width: '33%',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    activeText: {
        color: '#000000',
    },
});

export default Footer;
