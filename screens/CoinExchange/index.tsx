import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles'
const image =  require('../../assets/images/Saly-31.png');


const CoinExchangeScreen = () => {

    const [coinAmount, setCoinAmount] = useState(null)
    const [coinUSDValue, setCoinUSDValue] = useState(null)

    const maxUSD = 100000;;

    useEffect(()=>{        
        const amount = parseFloat(coinAmount);
        if(!amount && amount !== 0){
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        setCoinUSDValue((amount*coinData?.price).toString())
    }, [coinAmount])
    useEffect(()=>{
        const usd = parseFloat(coinUSDValue);
        if( !usd ){
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        setCoinAmount((usd / coinData?.price).toString())
    })


    const onPlaceOrder = ()=>{
        if( isBuy && parseFloat(coinUSDValue) > maxUSD ){
            Alert.alert('Error', 'Not enough USD coins');
            return;
        }
        if( !isBuy && parseFloat(coinAmount) > coinData.amount ){
            Alert.alert('Error', `Not enough ${coinData.symbol} coins. Max: ${coinData.amount}`)
        }

    }
    const route = useRoute();

    const {isBuy, coinData} = route?.params || {
        isBuy: false,
        coinData: {}
    };
    return (  
        <KeyboardAvoidingView 
            style = {styles.root}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
            <Text style={styles.title}>
                {isBuy ? 'Buy' : 'Sell'}
                {coinData?.name}
            </Text> 
            <Text style={styles.subtitle}>
                1 {coinData?.symbol}
                { '=' }
                ${coinData?.price}
            </Text>           
            <Image style={styles.Image} source={image} />
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                    keyboardType='decimal-pad'
                    placeholder='0'
                    value={coinAmount}
                    onChangeText={setCoinAmount}                    
                    />
                    <Text>{coinData?.symbol}</Text>
                </View>
                <Text style={{fontSize:30}}>=</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='0'
                    keyboardType='decimal-pad'
                    value={coinUSDValue}
                    onChangeText={setCoinUSDValue}                 
                    />
                    <Text> USD</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={onPlaceOrder}>
                    <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}
 
export default CoinExchangeScreen;