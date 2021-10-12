import React from 'react'
import axios from 'axios';
const PersonList = ({people}) => {
    return (
        <div>
            {people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}

export default PersonList;