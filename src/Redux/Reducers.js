import { combineReducers,createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer,persistStore } from "redux-persist";
const initalState={
    user:[]
}
const reducer=(state=initalState,action)=>{    
   switch(action.type){
    case  "REGISTER":
        return {
            ...state,user : [action.payload]
        }
    default:
        return state;
   }
}

const persistConfig={
    key:"root",
    storage:AsyncStorage,
}



const persistedReducer=persistReducer(persistConfig,reducer)

    const store=createStore(persistedReducer)
    const persistor=persistStore(store)
   export default store
   export {persistor}


