import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div style={{ position: 'relative' }}>
            <div className="container text-center">
                <h3 style={{ marginTop: '100px', marginBottom: '30px', color: "white" }}>Welcome to the Song Pool.</h3>
                <h5 style={{ marginTop: '30px', marginBottom: '30px', color: "white" }}>Where in the service is most of your worship time?</h5>

                <Link className="btn-link" to={`${process.env.PUBLIC_URL}/pre-preach`}>mostly before the preach</Link>
                <Link className="btn-link" to={`${process.env.PUBLIC_URL}/post-preach`}>mostly after the preach</Link>
                <Link className="btn-link" to={`${process.env.PUBLIC_URL}/list`}>view full list</Link>
            </div>
            <Contact />
        </div>
    )
}
