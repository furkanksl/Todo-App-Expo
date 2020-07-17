import React , {useContext}from 'react';
import { View , Text , StyleSheet ,TouchableOpacity } from 'react-native';
import {Context} from '../context/TodoContext';
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    
    const {state} = useContext(Context);

    const todoPost =state.find((todoPost) => todoPost.id === navigation.getParam('id'));

    return <View>
        <Text style={styles.label} > Title   : {todoPost.title}</Text>
        <Text style={styles.label} > Content : {todoPost.content}</Text>
    </View>

};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
      headerRight : () => ( <TouchableOpacity onPress={()=> navigation.navigate('Edit' , {id : navigation.getParam('id')})} > 
                              <Feather style={{marginRight: 20}} name = "edit-3" size= {30} /> 
                          </TouchableOpacity> )
    };
  };

const styles = StyleSheet.create({
    label : {
        margin : 20 ,
        fontSize : 20 ,
        fontWeight: 'bold',

    }
});

export default ShowScreen;