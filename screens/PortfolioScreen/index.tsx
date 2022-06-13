import React, { useDebugValue } from 'react';

import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles'
import PortfolioCoin from '../../components/PortfolioCoin';
const image =  require('../../assets/images/Saly-10.png');
            
const portfolioCoins = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'USD',
        amount: 88.88,
        valueUSD: 88.88
    },
    {
        id: '2',
        name: 'Bitcoint',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'BTC',
        amount: 8.88,
        valueUSD: 88.88
    },
    {
        id: '3', 
        name: 'Ethereum',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ETH',
        amount: 88.88,
        valueUSD: 88.88
    },
    {
        id: '4', 
        name: 'Cardano',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ADO',
        amount: 88.88,
        valueUSD: 88.88
    },
    {
        id: '5',
        name: 'Virtual Dollars',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'USD',
        amount: 88.88,
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
        amount: 88.88,
        valueUSD: 88.88
    },
    {
        id: '8', 
        name: 'Cardano',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'ADO',
        amount: 88.88,
        valueUSD: 88.88
    },

]
 
const PortfolioScreen = ( ) => {
    return (  
        <View style = {styles.root}>  
            <FlatList 
                style={{width:'100%'}} 
                data={portfolioCoins}
                showsVerticalScrollIndicator={false} 
                renderItem={({item})=> <PortfolioCoin portfolioCoin={item} /> }
                ListHeaderComponentStyle={{alignItems:'center'}}
                ListHeaderComponent={() => (
                    <>
                    <Image style={styles.Image} source={image} />
                    <View style={styles.balanceContainer}>
                        <Text style={styles.label}>Portfolio Balance</Text>
                        <Text  style={styles.balance}>$88.88</Text>
                    </View>
                </>

                )}
            />

        </View>
    );
}
 
export default PortfolioScreen;