import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'
import colors from '@palette';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

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
    },
    body:{
        color:'black',
        fontSize:normalize(18),
        width:w*0.9,
        textAlign:'justify',
        marginTop:w*0.1,
    },
    img:{
        width:w*0.6,
        height:w*0.6,
    },
    startButton:{
        paddingVertical:w*0.04,
        paddingHorizontal:w*0.2,
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:colors.primary,
        marginTop:h*0.08,
        flexDirection:'row',
        alignItems:'center'
    },
    startText:{
        color:'black',
        fontSize:normalize(18),
    }

})