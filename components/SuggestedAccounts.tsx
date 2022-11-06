import Image from 'next/image';
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
      <p>Suggested Accounts</p>

      <div className="">{
        allUsers.slice(0,6).map((user:IUser) =>(
          <Link href={`/profile/${user._id}`} key={user._id}>
            <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
              <div className="w-8 h-6">
                <Image src={user.image}
                width={34}
                height={34}
                className="rounded-full"
                alt="user profile"
                layout="responsive"
                />
              </div>
            </div>
          </Link>
        ))
      }</div>
    </div>

  )
}

export default SuggestedAccounts
