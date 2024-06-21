
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../../url.js";



export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(false)

    useEffect(()=>{
      getUser()
    },[])

    const getUser = async ()=>{
      try{
        const res = await axios.get(`${URL}/refetch`,{withCredentials:true})
        setUser(res.data)
      }
      catch(err){
        console.error(err)
      }
    }
    
    return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
    )
}