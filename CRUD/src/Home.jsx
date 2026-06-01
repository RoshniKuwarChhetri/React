import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {

    let [data, setData] = useState([])

    useEffect(() => {
        async function fetch() {
            let res = await axios.get("http://localhost:5050/users")
            // console.log(res.data)
            setData(res.data)
        }
        fetch()
    },[])

    // console.log(data)

    function handleDelete(id) {
        console.log(id)
        let res = confirm("Do you want to delete the data")
        if(res) {
            axios.delete(`http://localhost:5050/users/${id}`)
            .then((res)=>{
                console.log(res)
                console.log("Data is deleted")
                location.reload()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

  return (
    <div>
        <h1>Users Data</h1>
        <div>
            <button className='create'>
                <Link className='link' to="/create"> Create</Link>
            </button>
        </div>
        <table border={1}  >
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone no</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((a) => {
                        // console.log(a)
                        let{id, name, phone} = a
                        // console.log(id, name, phone)

                        return(
                            <tr key={id}>
                                <td> {id} </td>
                                <td> {name} </td>
                                <td> {phone} </td>
                                <td> 
                                    <button> 
                                        <Link to={`/update/${id}`}  className='link'> Update </Link>
                                    </button>
                                    <button> 
                                        <Link to={`/read/${id}`}  className='link'> Read </Link>
                                    </button>
                                    <button onClick={()=>handleDelete(id)} > Delete </button> 
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home

// npm i -g json-server
// json-server --watch db.json --port 3030