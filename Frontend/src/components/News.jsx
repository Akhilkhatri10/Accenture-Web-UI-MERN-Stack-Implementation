import React from 'react';

const News = ({ date, title }) => {
    return (
        <div className='group flex flex-col items-start mx-10 max-w-[750px] h-[250px] cursor-pointer text-white'>
            <div className='group-hover:text-gray-400 text-md font-semibold mb-4'>
                {date}
            </div>
            <div className='group-hover:text-gray-400 text-[40px] leading-tight font-semibold'>
                {title}
            </div>
        </div>
    );
};

export default News;
