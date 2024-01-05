// components/UserDetail.js

import { useCallback, useEffect, useState } from "react";
import PostCard from "./PostCard";
import StatusBar from "./StatusBar";
import PostsList from "./PostsList";
import ProfileSection from "./ProfileSection";

const UserDetail = ({ user }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [posts, setPosts] = useState([]);
  const [isPostCardActive, activatePostCard] = useState(false);
  const [children, setChild] = useState("");

  const openPostCard = useCallback((child)=>{
    setChild(child);
    activatePostCard(true);
  })

  const closePostCard = useCallback(() => {
    activatePostCard(false);
  })

  const fetchPosts = useCallback( async ()=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
      
      if (!res.ok) {
        throw new Error('Failed to fetch post')
      }

      const data = await res.json()
      setPosts(data)
    }
    catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  })


  useEffect(() => {
    // Fetch and set user and set country
    fetchPosts()
    setSelectedCountry(user.country);
  }, [user]);


  const handleCountryChange = useCallback((selectedCountry)=>{
    setSelectedCountry(selectedCountry);
  })


  


  return (
    <div className="user-detail w-full flex flex-col items-center justify-center">
      <StatusBar selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} />
      <ProfileSection user={user}/>
      <PostsList posts={posts} openPostCard={openPostCard}/>
      <PostCard isOpen={isPostCardActive} onClose={closePostCard} children={children}/>
    </div>
  );
};

export default UserDetail;
