import React , {useContext }from 'react';
import {Context} from '../context/TodoContext';
import TodoPostForm from '../components/TodoPostForm';

const EditScreen = ({navigation}) => {
    const {state , editTodoPost} = useContext(Context);
    const todoPost = state.find((todoPost) => todoPost.id === navigation.getParam('id'));
    const id = navigation.getParam('id');

    return <TodoPostForm
            initialValues={{title : todoPost.title , content : todoPost.content}}
            onSubmit={(title , content)=>{
                editTodoPost(id , title , content , ()=> navigation.pop());
            }} />

}


export default EditScreen;