import React from 'react';

const Pagination = ({onClick}) => {

    const newArr = new Array(10).fill(0)

    return (
        <div className='d-flex justify-content-center align-items-center pagination-wrapper'>
            <button className='btn btn-primary'>prev</button>
            {
                newArr.map((item, index) => {
                    return (
                        <button className='btn btn-secondary' key={index} onClick={() => onClick(index + 1)}>
                            {index + 1}
                        </button>
                    )
                })
            }
            <button className='btn btn-primary'>next</button>
        </div>
    );
}

export default Pagination;
