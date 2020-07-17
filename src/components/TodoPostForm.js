import React ,{useState} from 'react';
import { View , Text , TextInput , StyleSheet ,TouchableOpacity } from 'react-native';

const TodoPostForm = ({onSubmit , initialValues }) => {
    const [title , setTitle] = useState( initialValues.title );
    const [content , setContent] = useState( initialValues.content );

    return (<View style={styles.container} >
        <Text style={styles.label} >Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText = {(text) => setTitle(text)} />
        <Text style={styles.label} >Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText = {(text) => setContent(text)} />
        <TouchableOpacity 
        onPress={() => {
            onSubmit(title , content);
            
            setTitle('');
            setContent('');
        }} style={styles.button} >
            <Text style={{fontSize : 20 , fontWeight : 'bold' , color: 'white'}} >Save To-do</Text></TouchableOpacity> 
    </View>);
};

TodoPostForm.defaultProps = {
    initialValues : {
        title: '',
        content : ''
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : 60,
        
    },
    input : {
        height: 40,
        fontSize : 18 ,
        margin : 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
           

    },
    label : {
        fontSize :20,
        marginLeft: 20
    },
    button : {
        width : 160,
        height: 30,
        margin : 20,
        backgroundColor : 'red',
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center',

    }
});

export default TodoPostForm;