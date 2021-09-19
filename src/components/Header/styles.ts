import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../../screens/normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        backgroundColor:colors.primary,
        flexDirection:'row',
        width:w,
        marginTop:h*0.05,
        alignItems:'center'
    },
    iconContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:normalize(18),
        fontWeight:'bold',
        textAlign:'center'
    },
    titleContainer:{
        flex:3,
        alignItems:'center',
    },
    home:{
        width:w*0.14,
        height:w*0.14,
        borderRadius:w*0.7,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
  
})