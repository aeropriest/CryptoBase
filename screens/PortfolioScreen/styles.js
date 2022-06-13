import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white',        
    },
    balanceContainer:{
        width:'100%',
        marginVertical: 20,
    },
    Image:{
        height: 150,
        resizeMode: "contain",    
        },
    label:{
        marginVertical: 5,
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
    },
    balance:{
        marginVertical: 5,
        fontSize: 36,
        textAlign: 'center',
        color: '#555',
        fontWeight: 'bold',
    }
})

export default styles;