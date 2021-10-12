import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
const Detail = () => {
    const [person, setPerson] = useState({})

    let { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}
export default Detail;