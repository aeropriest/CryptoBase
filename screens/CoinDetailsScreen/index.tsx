import React, { useState } from "react";
import styles from './styles'
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";
const CoinDetailsScreen = (props) => {

    const [coinData, setCoinData] = useState({
        id: '1',
        name: 'BTC',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'BTC',
        valueChange: -2.12,
        valueChange1D: -3.12,
        valueChange7D: 1.12,
        price: 8888,
        amount: 82.88,
    })


    const onBuy = () => {
        
    }
    const onSell = () => {
        
    }
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coinData.image}}/>
                    <View >
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <AntDesign name={'staro'} size={30} color={'#2f95dc'}/>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.label}>Current Price</Text>
                    <Text style={styles.value}>{coinData.price}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coinData.valueChange}/>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coinData.valueChange1D}/>                    
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coinData.valueChange7D}/>                    
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text>Position</Text>
                <Text>{coinData.symbol} {coinData.amount} 
                {' '}
                (${coinData.price * coinData.amount})</Text>
            </View>


            <View style={[styles.row, {marginTop: 'auto'}]}>
                <Pressable style={[styles.button, {backgroundColor: '#20b100'}]} onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#ff0000'}]} onPress={onSell}>
                <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>
        </View>
        );
}
 
export default CoinDetailsScreen;