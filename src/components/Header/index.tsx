import React, {  } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions';
import { View, Text, TouchableOpacity,  } from 'react-native'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import { normalize } from '../../screens/normalize'


function Header(props:any) {

  return (
       <View style={styles.container}>
           <View style={styles.iconContainer}>
           <TouchableOpacity style={styles.home} onPress={()=>props.nav.reset({
    index: 0,
    routes: [
      { name: 'Start' },
    ]})}>
           <Icon name={'home'} size={normalize(25)} color={'black'} />
           </TouchableOpacity>
           </View>
           <View style={styles.titleContainer}>
             <Text style={styles.title}>{props.title}</Text>
               </View>
           <View style={{flex:1}}/>
       </View>
  );
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, actions)(Header);