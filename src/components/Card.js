import React from 'react';

const Card = ({firstName , lastName ,age ,habit}) => {
    return (
        <div className='card'>
            <div className="card-header">
                <h2>Information</h2>
            </div>
            <div className="card-body">
                <img src="" alt="" />
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{age}</h3>
                <h3>{habit}</h3>
            </div>
            <div className="card-footer">
                <button>Add</button>
                <button>Delete</button>
            </div>
        </div>
    );
};
export default Card;