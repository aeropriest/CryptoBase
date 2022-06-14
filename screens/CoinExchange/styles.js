import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: "center",
        flex: 1,
        backgroundColor: 'white',
        
    },
    image:{
        height: '200',
        resizeMode: 'contain',
        marginTop: 20,
        },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 15,
        color: '#5f5f5f'
    },
    inputsContainer:
    {
        flexDirection: 'row', 
        justifyContent:'space-between',
        width:'100%',
        alignItems: 'center'
    },
    inputContainer:
    {
        flexDirection: 'row', 
        justifyContent:'space-between', 
        borderWidth: 1,
        borderColor: '#b1b1b1',
        padding: 15,
        flex: 1,
        margin: 20,
    },
    button:{
        backgroundColor: '#2f95dc',
        marginTop: 'auto',
        width:'100%',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
    }


})

export default styles;