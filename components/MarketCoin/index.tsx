import React from "react" 
import { View,  Image, Text, Pressable } from 'react-native'
import styles from './styles'
import PercentageChange from "../PercentageChange"
import { useNavigation } from "@react-navigation/native"

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

    const navigation = useNavigation();

    return ( 
        <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ url: image}}/>
                <View >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>{valueUSD}</Text>
                <PercentageChange value={change}/>
            </View>
         </Pressable>
     );
}
 
export default MarketCoin;