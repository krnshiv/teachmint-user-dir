// components/UserCard.js
import Link from 'next/link';

const UserCard = ({ user }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <div className="user-card w-full flex items-center justify-between border border-solid border-blue-500 p-4 rounded-xl hover:bg-gray-200">
        <div className="top-left">Name:{user.name}</div>
        <div className="top-right">Posts: {user.postsCount}</div>
      </div>
    </Link>
  );
};

export default UserCard;
