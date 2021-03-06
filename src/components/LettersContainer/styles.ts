import { StyleSheet, Dimensions } from 'react-native'
import colors from '@palette';
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:w*0.9,
        borderRadius:10,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:h*0.01,
        marginBottom:h*0.04,
        justifyContent:'center',
        padding:w*0.01,
    },
    card:{
        backgroundColor:colors.primary,
        width:w*0.15,
        height:w*0.15,
        alignItems:'center',
        justifyContent:'center',
        margin:w*0.01,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius:5
    },
    selectedCard:{
        backgroundColor:'#D3D3D3',
        width:w*0.15,
        height:w*0.15,
        alignItems:'center',
        justifyContent:'center',
        margin:w*0.01,
        borderRadius:5
    },
    letter:{
        fontSize:normalize(15),
        fontWeight:'bold',
    },
})