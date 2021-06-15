const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initailState={
    loading:false,
    users:[],
    error:''
}

const USER_REQUEST ='USER_REQUEST';
const USER_SUCCESS ='USER_SUCCESS';
const USER_ERROR ='USER_ERROR';

//Action_Creator_1
const UserRequest=()=>{
    return{
        type:USER_REQUEST
    }
}
//Action_Creator_2
const UserSuccess=(users)=>{
    return{
       type:USER_SUCCESS,
       payload:users
    }
}

//Action_Creator_3
const UserError=(error)=>{
    return{
        type:USER_ERROR,
        payload:error

    }
}

//Reducer_Function
const reducer=(state=initailState,action)=>{
    switch(action.type){

       case "USER_REQUEST": return{
             ...state,loading:true
       }
      case "USER_SUCCESS":return{
          loading:false,users:action.payload,error:''
      }
      case "USER_ERROR":return{
          loading:false,users:[],error:action.payload
      }
    }    

}

const fetchUser=()=>{
    return function (dispatch){
        dispatch(UserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //response.data
            const users=response.data.map(user=>user.name)
            dispatch(UserSuccess(users))
        })
        .catch(error=>{
            //error.message
            dispatch(UserError(error.message))
        })
    }
}
//store
const store = createStore(reducer,applyMiddleware(thunkMiddleware))
//subscribe
const unsubscribe=store.subscribe(()=>{console.log(store.getState())});

//dispatch
store.dispatch(fetchUser())
//unsubscribe();