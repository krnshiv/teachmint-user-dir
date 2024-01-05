import React from 'react';

const PostsList = ({posts, openPostCard}) => {
    return (
        <div className="w-full h-full flex flex-row flex-wrap justify-between items-center p-6 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            onClick={() => {
              openPostCard(post);
            }}
            className="hover:shadow-xl hover:bg-gray-300 cursor-pointer p-6 min-w-[200px] xl:w-[250px] lg-w-[250px] md:w-[275px] sm:w-[300px] flex flex-col gap-6 justify-center items-center border-2 border-solid border-gray-500 rounded-xl overflow-scroll"
          >
            <p className="font-bold">{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
}

export default PostsList;