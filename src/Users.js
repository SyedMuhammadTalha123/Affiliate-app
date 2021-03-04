import React from 'react'
import Loginform from './Loginform'
import {useSelector} from 'react-redux';

const Users =()=>{
    const {users}=useSelector(abc =>abc)
    return(
        <div>
           {users ? users.map(user=>(
                <React.Fragment>
              <div>{user.uservalue}</div>
              <div>{user.userpassword}</div>
              </React.Fragment>
              
           )):''}
        </div>
    )
}
export default Users;