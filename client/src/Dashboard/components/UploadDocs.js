import axios from 'axios';
import React, { useState } from 'react'

const UploadDocs = () => {

      const [documents,setDocuments] = useState("");
      // const [name,setName] = useState("");

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

          console.log(response);
          
        } catch (error) {
          console.log(error.message)
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
                  {/* <label className='m-1'>Name of Document: </label> */}
                  {/* <input onChange={(e)=>setName(e.target.value)} style={{"borderColor":"black","width":"50%"}} className='form-control' type='text' required/> */}
                  <button type='submit' className='btn btn-success m-1 mt-2'>Submit</button>
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
