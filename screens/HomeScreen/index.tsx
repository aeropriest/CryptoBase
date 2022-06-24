import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'
const image =  require('../../assets/images/Saly-1.png');
const HomeScreen = () => {
    return (  
        <View style = {styles.root}>
            <Image style={styles.Image} source={image} />
            <Text style={styles.header1}>Welcome to CryptoBase</Text>
            <Text  style={styles.header2}>Invest virtual $1000 and learn to trade in crypto</Text>
        </View>
    );
}
 
export default HomeScreen;

/*

GraphQL transformer version: 2
Hosted UI Endpoint: https://cryptobase72c4265e-72c4265e-dev.auth.us-east-1.amazoncognito.com/
Test Your Hosted UI Endpoint: https://cryptobase72c4265e-72c4265e-dev.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=30j7i4nmkjl34n2s8pvu25goip&redirect_uri=exp://192.168.12.48:19000/


*/