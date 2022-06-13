import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 10,
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white',        
    },
    Image:{
        height: 150,
        resizeMode: "contain",    
        },
    label:{
        marginVertical: 5,
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'        
    },
    userContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        marginVertical: 5 ,
        alignItems: 'center',
        width: '100%',
    },
    userImage:{
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 50,
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    name:{
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email:{
        fontWeight: 'bold',
        marginBottom: 5,
    },
    symbol:{
        color: '#555'
    },
    value :{
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },    
})

export default styles;