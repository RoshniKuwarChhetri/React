import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Read = () => {

    let { id } = useParams()   
    let nav = useNavigate()

    let [data, setData] = useState({})

    useEffect(() => {
        async function getData() {
            let res = await axios.get(`http://localhost:5050/users/${id}`)
            setData(res.data)
        }
        getData()
    }, [id])

    return (
        <div>
            <h1>User Details</h1>

            <h3>ID: {data.id}</h3>
            <h3>Username: {data.username}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Name: {data.name}</h3>
            <h3>Phone: {data.phone}</h3>
            <h3>Website: {data.website}</h3>

            <br />

            <button onClick={() => nav("/")}>Back</button>
        </div>
    )
}

export default Read