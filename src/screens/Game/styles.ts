import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../normalize'

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#F8F0E3',
    },
    img:{
        width:w*0.4,
        height:w*0.4,
        marginTop:h*0.05

    },
    lettersContainer:{
        backgroundColor:'white',
        width:w*0.9,
        borderRadius:10,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:h*0.03,
        justifyContent:'center',
        padding:w*0.01,
    },
    card:{
        backgroundColor:'#F8F0E3',
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
    },
    selectedCard:{
        backgroundColor:'#D3D3D3',
        width:w*0.15,
        height:w*0.15,
        alignItems:'center',
        justifyContent:'center',
        margin:w*0.01,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        
        // elevation: 4,
    },
    letter:{
        fontSize:normalize(15),
        fontWeight:'bold',
    }

})