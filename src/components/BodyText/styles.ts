import { StyleSheet, Dimensions } from 'react-native'
import { normalize } from '../../screens/normalize'

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    txt:{
        color:'black',
        fontSize:normalize(18),
        width:w*0.9,
        textAlign:'center',
        marginTop:w*0.1,
    },
})