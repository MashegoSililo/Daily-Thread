import React, {useEffect, useContext} from "react";
import {UserContext} from '../UserContext'

export const Username = () => {
  const {user} = useContext(UserContext);

  useEffect(()=> {
    if (user){
      return user
    }
  }, [user])


  return <h4> {user} </h4>;
};

