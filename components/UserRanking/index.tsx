import React from "react" 
import { View,  Image, Text } from 'react-native'
import styles from './styles'

export interface UserRankingProps {
    userRanking: {
        image: string,
        name: string,
        netWorth: number, 
    },
    ranking: number,
}

const UserRanking = (props : UserRankingProps) => {
    
    const {
        userRanking: {
            image,
            name,
            netWorth,
        }, ranking,
    } = props;
    return ( 
        <View style={styles.root}>
            <View style={styles.left}>
                <Text  style={styles.ranking}>{ranking}</Text>
                <Image style={styles.image} source={{ url: image}}/>
                <View >
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.value}>${netWorth}</Text>
            </View>
         </View>
     );
}
 
export default UserRanking;