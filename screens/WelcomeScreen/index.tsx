import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image =  require('../../assets/images/Saly-1.png');
const googleButtonImage =  require('../../assets/images/google-button.png');

const WelcomeScreen = () => {
    const signInGoogle = () => {

    }
    return (  
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to CryptoBase</Text>
            <Text  style={styles.header2}>Invest virtual $1000 and learn to trade in crypto</Text>
            <Pressable onPress={signInGoogle} style={styles.googleButton}>
                <Image style={styles.buttonImage} source={googleButtonImage}/>
            </Pressable>
        </View>
    );
}
 
export default WelcomeScreen;