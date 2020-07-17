import React , {useContext }from 'react';
import {  StyleSheet  } from 'react-native';
import {Context} from '../context/TodoContext';
import TodoPostForm from '../components/TodoPostForm';

const CreateScreen = ({navigation}) => {
    
    const {addTodoPost}  = useContext(Context);

    return <TodoPostForm onSubmit= {(title , content)=> {
        addTodoPost( title , content , ()=> navigation.navigate('Index') ); 
    }} />

    
}

const styles = StyleSheet.create({
  
});

export default CreateScreen;