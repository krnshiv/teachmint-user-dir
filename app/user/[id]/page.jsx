// pages/user/[id].js
'use client';
import UserDetail from '../../components/UserDetails';
import {usePathname} from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';


const UserProfile = (params) => {
  
  const [user, setUser] = useState([]);
  const pathname = usePathname()
  const id  = pathname.slice(6)

  const fetchUser = useCallback(async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    if(!res.ok){
      throw new Error('Failed to fetch user')
    }

    const data = await res.json()

    const userData = {
      ...data,
      postsCount: 0, // You need to fetch and set the actual posts count for each user
    }
  setUser(userData);
  })

  useEffect(() => {
   fetchUser()
  }, []);

  return <UserDetail user={user}/>
};

export default UserProfile;
