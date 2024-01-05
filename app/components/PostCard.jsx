// components/PostCard.js
import { useEffect } from 'react';

const PostCard = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.PostCard-content')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`PostCard ${isOpen ? 'open' : ''}`}>
      <div className="PostCard-content">
      <div className="shadow-xl translate-x-[50%] translate-y-[50%] fixed top-0 left-0 w-[50vw] h-[50vh] 
      bg-gray-50 cursor-pointer p-6 flex flex-col gap-6 border-2 border-solid border-gray-500 rounded-xl overflow-scroll">
      
      <p className='w-[50px] h-[50px] rounded-[50px] bg-gray-400'>
      <img src='https://thenounproject.com/api/private/icons/538846/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'/>
      
      </p>
      <p className="font-bold">{children.title}</p>
      <p>{children.body}</p>
      </div>
    </div>
    </div>
  );
};

export default PostCard;
