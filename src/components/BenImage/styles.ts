import { StyleSheet, Dimensions } from 'react-native'

const w = (Dimensions.get('window').width);

export const styles=StyleSheet.create({
    img:{
        width:w*0.6,
        height:w*0.6,
    },
})