import { StyleSheet } from "react-native";

const styles = {
    root:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        marginVertical: 5 ,
        alignItems: 'center',
    },
    image:{
        height: 50,
        width: 50,
        marginRight: 10
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    name:{
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
    ranking:{
        padding: 5,
        marginRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
        width: 20,
        
    }

}

export default styles;