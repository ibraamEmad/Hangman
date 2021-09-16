import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#F8F0E3',
        alignItems:'center',
       },
    title:{
        color:'black',
        fontSize:normalize(20),
        fontWeight:'bold',
        marginVertical:w*0.2
    },
    img:{
        width:w*0.6,
        height:w*0.6,

    }

})