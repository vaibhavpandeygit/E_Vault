import React, { useEffect, useState } from 'react'
import UploadDocs from './components/UploadDocs'
import DocsCard from './components/DocsCard'
import axios from 'axios'
import { useAuth } from '../context/authContext'

const Documents = () => {

  const [auth,setAuth] = useAuth();
  const [data,setData] = useState([])

  const getData= async()=>{
    setData([])
    try {
      const response = await axios.get(`http://localhost:5000/e_vault/auth/${auth.user.id}`)
      console.log(response)
      setData(response.data.data.docs)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div className='container'>
        <UploadDocs/>
        <div className='container'>

          {data.map((e)=>(
            <div key={e.docsname}>
            <DocsCard data={e}/>
            </div>
          ))}

        </div>

    </div>     
  )
}

export default Documents
