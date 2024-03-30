import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const DocsCard = (props) => {

  const [name,setName] = useState("");
  const [hash,setHash] = useState("");

  useEffect(()=>{
    setName(props.data.docsname);
    setHash(props.data.docshash)
  })
  return (
    <>
      <div className="card m-2" style={{"width":"40rem"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {name}
            <Link target='_blank' className='m-1' to={`https://gateway.pinata.cloud/ipfs/${hash}`}>Show</Link>
            <Link to={`https://gateway.pinata.cloud/ipfs/${hash}`} target="_blank" download>Download</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DocsCard
