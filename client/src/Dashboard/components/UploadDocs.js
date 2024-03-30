import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useAuth} from '../../context/authContext'

const UploadDocs = () => {

      const [documents,setDocuments] = useState("");
      const [docsname,setDocsName] = useState("");

      const [auth,setAuth] = useAuth();

      const api_key = process.env.REACT_APP_API_KEY;
      const api_secret = process.env.REACT_APP_API_SECRET;


      const handleSubmit= async(event)=>{
        event.preventDefault();
        
        try {
          
          const fd = new FormData();
          fd.append("file",documents);

          const response = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: fd,
            headers:{
              pinata_api_key: api_key,
              pinata_secret_api_key: api_secret,
              "Content-Type": "multipart/form-data",
            }
          })

          

          console.log(response.data.IpfsHash)

          
            const res = await axios.put('http://localhost:5000/e_vault/auth/docsupload',{
              docsname: docsname,
              docshash: response.data.IpfsHash,
              email: auth.user.email,
            }).then(alert("Successfully Uploaded"))
            
            setDocuments("");
            setDocsName("");
          
        } catch (error) {
          alert("Something went wrong")
        }
        
      }

  return (
    <div className='m-3'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Upload Your Documents
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">

              <form onSubmit={handleSubmit}>
                <div className='form-group mx-sm'>
                  <input style={{"width":"30%"}} type="file" className='form-control m-1' onChange={(e)=>setDocuments(e.target.files[0])} required/>
                  <label className='m-1'>Name of Document: </label>
                  <input onChange={(e)=>setDocsName(e.target.value)} style={{"borderColor":"black","width":"50%"}} className='form-control' type='text' required/>
                  <button type='submit' className='btn btn-success m-1 mt-2'>Upload</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDocs
