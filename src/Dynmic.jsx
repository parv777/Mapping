import React, { useEffect, useState } from 'react'


const Dynmic = () => {

     let [data,setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            return res.json()
        })
        .then((val)=>{
            setData(val)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            console.log("finally")
        })
        
    },[])

  return (
    <>
    <h1>Dynemic Data fetch</h1>

     <table border="1" cellSpacing="3" cellPadding="3">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>

    <tbody>
        {
            data.map((item , index)=>(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))
        }
    </tbody>

     </table>


    </>
  )
}

export default Dynmic
