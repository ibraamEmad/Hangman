import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:colors.primary,
    },
    imageContainer:{
        marginTop:h*0.05,
        width:w*0.5,
        height:w*0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:w*0.4,
        height:w*0.4,
        position:'absolute'
    },
    solutionContainer:{
        flexDirection:'row',
        marginVertical:w*0.1
    },
    solution:{
        fontSize:normalize(18),
        fontWeight:'bold',
    },

})