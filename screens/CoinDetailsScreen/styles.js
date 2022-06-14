import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white',        
        width:'100%',
    },
    topContainer:{
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
        borderRadius : 50,
    },
    symbol:{
        color: '#555'
    },
    row:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    label:{
        color: '#545454',  
        marginBottom: 5,      
    },
    value:{
        fontSize: 24,
    },
    valueContainer:{
        alignItems: 'center',
        marginHorizontal: 5,
    },
    button:{
        flex: 1,
        margin: 5,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        color:'white',
        fontSize: 18,

    }

})

export default styles;