import CreateDataContext from './CreateDataContext';

const todoReducer = (state , action) =>{
    switch(action.type){
        case 'add_todopost':
            return[...state , 
                { id : Math.floor(Math.random() * 9999 ), 
                    title: action.payload.title ,
                    content : action.payload.content
                    
                }];
        case 'delete_todopost':
            return state.filter( (todoPost) =>  todoPost.id !== action.payload );
        case 'edit_todopost' :
            return state.map((todoPost) => {
                return (todoPost.id === action.payload.id ? action.payload : todoPost);
            });
        default :
            return state;
    }
};
const addTodoPost = (dispatch) => {
    return (title , content , callback) => {
        dispatch({type : 'add_todopost' , payload : { title , content}});
        callback();
    };
}; 

const deleteTodoPost = (dispatch) => {
    return (id) => {
        dispatch({ type : 'delete_todopost' , payload : id});
    };
};

const editTodoPost = (dispatch) => {
    return (id ,title , content , callback) => {
        dispatch({type : 'edit_todopost' ,
        payload : {id: id , title: title , content : content}});
        callback();
    };
};

export const { Context , Provider } = CreateDataContext(todoReducer, { addTodoPost ,deleteTodoPost , editTodoPost },[])