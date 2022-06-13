
import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
const image =  require('../../assets/images/Saly-16.png');
import styles from './styles';
 
const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: '1',
        name: 'Ashok Jaiswal',
        email: 'ashok.jaiswal@gmail.com',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        netWorth: 8888.88,
    })
    const signOut = () =>{
        console.warn('sign out')
    }
    return (  
        <View style = {styles.root}>  
            <Image style={styles.userImage} source={{ uri: user.image}}/>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.netWorth}>${user.netWorth}</Text>
            <Text style={styles.email}>{user.email}</Text>

            <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    );
}
 
export default ProfileScreen;