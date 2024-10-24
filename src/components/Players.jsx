import React from 'react';

const Players = () => {
    return (
        <div>
            <div className='flex justify-between mt-6 mx-20'>
                <h1 className='text-2xl font-semibold'>Available Players</h1>
                <div className='flex gap-2'>
                    <button className='border-2 bg-yellow-400 px-3 py-2'>Available</button>
                    <button className='border-2 bg-yellow-400 px-3 py-2'>Selected</button>
                </div>
            </div>
        </div>
    );
};

export default Players;