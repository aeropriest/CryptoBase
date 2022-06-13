import React from "react" 
import { View,  Image, Text } from 'react-native'
import styles from './styles'

export interface MarketCoinProps {
    marketCoin: {
        image: string,
        name: string,
        symbol: string,
        change: number,
        valueUSD: number, 
    }
}

const MarketCoin = (props : MarketCoinProps) => {
    
    const {
        marketCoin: {
            image,
            name,
            symbol,
            change,
            valueUSD,
        },
    } = props;
    return ( 
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ url: image}}/>
                <View >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>{valueUSD}</Text>
                <Text style={{color: change > 0 ? '#398f0a' : '#f1 0000'}}>
                    {change > 0 && '+ '} {change}</Text>
            </View>
         </View>
     );
}
 
export default MarketCoin;