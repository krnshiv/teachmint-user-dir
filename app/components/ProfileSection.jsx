import React from "react";

const ProfileSection = ({ user }) => {
  return (
    <div className="w-full p-4">
      <div className="w-full p-6 flex items-center justify-center">
        <h2>Profile page</h2>
      </div>
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-6  items-center justify-between border-2 border-solid border-gray-500 rounded-xl p-6">
        <div className="flex gap-4 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full">
          <img
            className="w-[50px] h-[50px] rounded-[50px] bg-gray-400"
            src="https://thenounproject.com/api/private/icons/538846/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />
          <div className="flex flex-col w-full">
            <p>{user.name && <span> Name : {user.name}</span>}</p>
            <p>
              {user.username && <span>Username : {user.username}</span>}
              {user.company && <span> | {user.company.catchPhrase}</span>}
            </p>
          </div>
        </div>
        <div className="flex flex-col  xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full sm:items-start md:items-end lg:items-end xl:items-end">
          <p>
            {user.address && (
              <span>
                Address : {user.address.street + ", " + user.address.city}
              </span>
            )}
          </p>
          <p>
            {user.email && <span>Email : {user.email} </span>}
            {user.phone && <span>| Phone : {user.phone}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
