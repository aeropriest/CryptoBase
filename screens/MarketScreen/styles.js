import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 10,
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white',        
    },
    Image:{
        height: 120,
        resizeMode: "contain",    
        },
    label:{
        marginVertical: 5,
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
        fontWeight: 'bold'
    },
})

export default styles;