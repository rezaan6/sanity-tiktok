import Link from 'next/link';
import React, { useEffect } from 'react'
import useAuthStore from '../store/authStore'
import { IUser } from '../types';

const SuggestedAccounts = () => {
  
  const { fetchAllUsers, allUsers} = useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  
  }, [fetchAllUsers]);
  

  return (
    <div className="xl:border-b-2 border-gray-200 pb-4">
      <p className='   '>Suggested Accounts</p>

      <div className="">{
        allUsers.slice(0,6).map((user:IUser) =>(
          <Link href={`/profile/${user._id}`} key={user._id}></Link>
        ))
      }</div>
    </div>

  )
}

export default SuggestedAccounts
