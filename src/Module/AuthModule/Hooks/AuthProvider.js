import React, { Children, createContext,useState } from "react";
import auth from "@react-native-firebase/auth";
import Snackbar from "react-native-snackbar";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    return(
        <AuthContext.Provider 
        value={{
             user,
             setUser,
             login:async(email,Password)=>{
                try{
                    await auth().signInWithEmailAndPassword(email,Password).then(res=>{
                        Snackbar.show({
                            text: "Successfully Login",
                            duration: Snackbar.LENGTH_SHORT,
                          }); 
                    })
                }
                catch(e){
                    console.log(e)
                    Snackbar.show({
                        text: e.message,
                        duration: Snackbar.LENGTH_SHORT,
                      });
                }
             },
             register:async(email,Password)=>{
                try{
                    await auth().createUserWithEmailAndPassword(email,Password).then(res=>{
                        console.log(res)
                        Snackbar.show({
                            text: "Successfully Register",
                            duration: Snackbar.LENGTH_SHORT,
                          }); 
                    })
                }
                catch(e){
                    Snackbar.show({
                        text: e.message,
                        duration: Snackbar.LENGTH_SHORT,
                      });
                }
             },
             logout:async()=>{
                try{
                    await auth().signOut();
                }
                catch(err){
                    console.log(err)
                }
             }
        }}
        >
            {children}
            </AuthContext.Provider>
    )
}