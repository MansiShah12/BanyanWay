import { StyleSheet } from 'react-native'
import scale from '../../util/scale';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginHorizontal: scale(5)
    },

    facebookButton: {
        backgroundColor: 'rgb(61,107,173)',
        flexDirection: 'row',
        marginHorizontal: scale(20),
        alignItems: 'center',
        borderRadius: scale(5),

    },
    LoginwithFacebookText: {
        color: 'white',
        fontSize: scale(20),
        fontWeight: '600',
        marginLeft: scale(10),
        marginVertical: scale(5),
        padding: scale(5)
    },
    label1: {
        color: "rgb(60,203,206)",
        fontSize: scale(25),
        textAlign: 'center',
        padding: scale(10),
        marginTop: scale(20)
    },
    label2:{ 
        color: "grey", 
    fontSize: scale(20), 
    textAlign: 'center'  }

});