// pages/index.js
"use client"
import { useState, useEffect, useCallback } from 'react';
import UserCard from './components/UserCard';



const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok){
      throw new Error('Failed to fetch users')
    }

    const data = await res.json()

    const usersWithPostsCount = data.map((user) => ({
      ...user,
      postsCount: 0, // You need to fetch and set the actual posts count for each user
    }));
    setUsers(usersWithPostsCount);
  })
  
  useEffect(() => {    
      fetchUsers()      
  }, []);

  return (
    <div className='w-full h-[100%] flex flex-col items-center justify-center'>
      <h1 className='w-full flex flex-row items-center justify-center bg-blue-600 text-white p-4'> Directory</h1>
      <div className="user-list flex flex-col gap-4 w-full p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
