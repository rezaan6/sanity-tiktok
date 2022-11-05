import React, { useEffect } from 'react'
import useAuthStore from '../store/authStore'

const SuggestedAccounts = () => {
  
  const { fetchAllUsers, allUsers} = useAuthStore();

  useEffect(() => {
    fetchAllUsers();
  
  }, [fetchAllUsers]);
  

  return (
    <div>SuggestedAccounts</div>

  )
}

export default SuggestedAccounts
