import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:colors.primary,
        alignItems:'center',
       },
    title:{
        color:'black',
        fontSize:normalize(20),
        fontWeight:'bold',
        marginTop:w*0.2,
        marginBottom:w*0.1,
    }

})