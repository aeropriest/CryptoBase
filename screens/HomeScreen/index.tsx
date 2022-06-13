import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'
const image =  require('../../assets/images/Saly-1.png');
const HomeScreen = () => {
    return (  
        <View style = {styles.root}>
                  <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to CryptoBase</Text>
            <Text  style={styles.header2}>Invest virtual $1000 and learn to trade in crypto</Text>
        </View>
    );
}
 
export default HomeScreen;