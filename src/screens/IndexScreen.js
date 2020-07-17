import React, { useContext } from 'react';
import { StyleSheet, Text, View ,FlatList, Button ,TouchableOpacity } from 'react-native';
import {Context } from '../context/TodoContext';
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const {state ,deleteTodoPost} = useContext(Context);
    
  return (
    <View style={styles.flatlist}>
      
      <FlatList 
      
        showsVerticalScrollIndicator= {false}
        data={state}
        keyExtractor={(todoPost)=>todoPost.title}
        renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})} >
            <View style={styles.row}  >
            <Text style={styles.title}>{item.title}  </Text>
            <View style={{flexDirection: 'row' , alignContent: 'space-between' , }}>
             
              <TouchableOpacity style={{paddingRight: 10}} onPress={()=> deleteTodoPost(item.id) } >  
                <Feather color="red" name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight : () => ( <TouchableOpacity onPress={()=> navigation.navigate('Create')} > 
                            <Feather style={{marginRight: 20}} name = "plus" size= {30} /> 
                        </TouchableOpacity> )
  };
};

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom : 30,
  },
  row : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal : 15,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title : {
    fontSize: 18,
  },
  icon : {
    fontSize: 24
  }
});

export default IndexScreen;
