import React, { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import { fetchUsers } from '../store/action-creators/user';
import { useTypedSelector } from './hooks/useTypedSelector'; 
const UserList:React.FC = () => {
    const {users,error,loading}=useTypedSelector(state=>state.user)
    const {fetchUsers}=useActions()

    useEffect(()=>{
      fetchUsers()
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user=>
<div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList