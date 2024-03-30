import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="mt-5 p-2 jumbotron">
        <h1 className="text-center display-1">E Vault - Mini Hackathon</h1>
        <p className="text-center lead">
          This is a E-Vault where you can upload your important documents. This site uses decentralized database to keep your documents secure.
        </p>
        <hr className="my-4" />
      </div>

      <h1 className="text-center display-5">For Reading</h1>

      <div className="flex">
        
      </div>


      <div className="text-center">

      <div className="d-inline-block text-center col m-4">
          <div className="card my-2" style={{ width: "18rem" }}>
            <div className="card-header">
              <strong>IPFS</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              IPFS stands for Interplanetary File System, and it's a decentralized, peer-to-peer file sharing system that allows users to access content without a centralized server.
              </li>
              <li className="flex list-group-item"></li>
            </ul>
          </div>
        </div>


        <div className="d-inline-block text-center col m-4">
          <div className="card my-2" style={{ width: "18rem" }}>
            <div className="card-header">
              <strong>Blockchain</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              Blockchain is a secure, transparent, and efficient way to share data across multiple parties. It's a type of distributed ledger technology (DLT) that stores data in blocks that are linked together by cryptography.
              </li>
              <li className="flex list-group-item"></li>
            </ul>
          </div>
        </div>

        <div className="d-inline-block text-center col m-4">
          <div className="card my-2" style={{ width: "18rem" }}>
            <div className="card-header">
              <strong>Smart Contract</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              A smart contract is a computer program that automatically executes the terms of an agreement, based on if-then logic and code running on a blockchain.
              </li>
              <li className="flex list-group-item"></li>
            </ul>
          </div>
        </div>

        <div className="d-inline-block text-center col m-4">
          <div className="card my-2" style={{ width: "18rem" }}>
            <div className="card-header">
              <strong>MERN Stack</strong>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              MERN is an acronym for MongoDB, Express, React, and Node.js, which are the four technologies that make up the MERN stack. The MERN stack is a JavaScript-centric framework that allows developers to build web applications entirely in the JavaScript programming language.
              </li>
              <li className="flex list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    
    </Layout>
  )
}

export default Home
