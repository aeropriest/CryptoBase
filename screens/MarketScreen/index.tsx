import React, { useDebugValue } from 'react';

import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles'
import MarketCoin from '../../components/MarketCoin';
const image =  require('../../assets/images/Saly-17.png');
            
const marketCoins = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'USD',
        change: 88.88,
        valueUSD: 88.88
    },
    {
        id: '2',
        name: 'Bitcoint',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'BTC',
        amount: -8.88,
        valueUSD: 88.88
    },
    {
        id: '3', 
        name: 'Ethereum',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ETH',
        change: 88.88,
        valueUSD: 88.88
    },
    {
        id: '4', 
        name: 'Cardano',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ADO',
        change: 88.88,
        valueUSD: 88.88
    },
    {
        id: '5',
        name: 'Virtual Dollars',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'USD',
        change: -88.88,
        valueUSD: 88.88
    },
    {
        id: '6',
        name: 'Bitcoint',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'BTC',
        amount: 8.88,
        valueUSD: 88.88
    },
    {
        id: '7', 
        name: 'Ethereum',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ETH',
        change: 88.88,
        valueUSD: 88.88
    },
    {
        id: '8', 
        name: 'Cardano',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ADO',
        change: -88.88,
        valueUSD: 88.88
    },

]
 
const MarketScreen = ( ) => {
    return (  
        <View style = {styles.root}>  
            <FlatList 
                style={{width:'100%'}} 
                data={marketCoins}
                showsVerticalScrollIndicator={false} 
                renderItem={({item})=> <MarketCoin marketCoin={item} /> }
                ListHeaderComponentStyle={{alignItems:'center'}}
                ListHeaderComponent={() => (
                    <>
                    <Image style={styles.Image} source={image} />
                    <View style={styles.balanceContainer}>
                        <Text style={styles.label}>Market</Text>
                    </View>
                </>

                )}
            />

        </View>
    );
}
 
export default MarketScreen;