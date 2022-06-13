import React, { useDebugValue } from 'react';

import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles'
import UserRanking from '../../components/UserRanking';
const image =  require('../../assets/images/Saly-20.png');
            
const userRankings = [
    {
        id: '1',
        name: 'Ashok Jaiswal',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '2',
        name: 'Ariane Li',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '3', 
        name: 'Hey Hey',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '4', 
        name: 'James Johns',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '5',
        name: 'Chris Wallas',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '6',
        name: 'Joe Rogan',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '7', 
        name: 'Elan Musk',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },
    {
        id: '8', 
        name: 'Kim Lim',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 88.88
    },

]
 
const RankingScreen = ( ) => {
    return (  
        <View style = {styles.root}>  
            <FlatList 
                style={{width:'100%'}} 
                data={userRankings}
                showsVerticalScrollIndicator={false} 
                renderItem={({item, index})=> <UserRanking userRanking={item} ranking={index+1}/> }
                ListHeaderComponentStyle={{alignItems:'center'}}
                ListHeaderComponent={() => (
                    <>
                    <Image style={styles.Image} source={image} />
                    <View style={styles.balanceContainer}>
                        <Text style={styles.label}>Rankings</Text>
                    </View>
                </>

                )}
            />

        </View>
    );
}
 
export default RankingScreen;