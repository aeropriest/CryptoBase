import React from "react" 
import { View,  Image, Text, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from "@react-navigation/native"

export interface PortfolioCoinProps {
    portfolioCoin: {
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueUSD: number, 
    }
}

const PortfolioCoin = (props : PortfolioCoinProps) => {
    
    const {
        portfolioCoin: {
            image,
            name,
            symbol,
            amount,
            valueUSD,
        },
    } = props;

    const navigation = useNavigation();
    return ( 
        <Pressable style={styles.root} onPress={()=>navigation.navigate('CoinDetails')}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ url: image}}/>
                <View >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>{valueUSD}</Text>
                <Text style={styles.symbol}>{symbol} {valueUSD}</Text>
            </View>
         </Pressable>
     );
}
 
export default PortfolioCoin;