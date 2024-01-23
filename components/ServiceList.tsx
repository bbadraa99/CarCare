import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {motion, AnimatePresence} from 'framer-motion';

const ListItem = ({ text, expanded }: { text: string; expanded: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className = 'relative max-container w-full' > 
        <motion.li  className='border-2 text-blue-50 pt-1 pb-1 
         hover:border-blue-50 hover:font-bold p-3 cursor-pointer bg-white' onClick={handleClick} style={{borderRadius: '10px'}} 
        whileHover={{scale: 1.1, transition: {duration: .2}}}>
          <div className='flex flexBetween'>
            <p>{text}</p>
            <div className='text-[20px] ' >
              {isExpanded ? <AiOutlineMinus/> : <AiOutlinePlus/>} 
            </div>
          </div>
        </motion.li>
        <div className='center'>
            {isExpanded && <p className="expanded-content text-black p-2">{expanded}</p>}
        </div>
    </div>
  );
};

export default ListItem;