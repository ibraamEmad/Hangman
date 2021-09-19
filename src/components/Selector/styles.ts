import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../../screens/normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        backgroundColor:colors.primary,
        flexDirection:'row',
        alignItems:'center'
    },
    iconContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    number:{
        fontSize:normalize(18),
        fontWeight:'bold',
        width:w*0.1,
        textAlign:'center'
    },
    button:{
        padding:w*0.05
    }
})