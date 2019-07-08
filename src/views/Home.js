import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            Where in the service is most of your worship time?
            <Link className="btn-link" to={`${process.env.PUBLIC_URL}/pre-preach`}>mostly before the preach</Link>
            <Link className="btn-link" to={`${process.env.PUBLIC_URL}/post-preach`}>mostly after the preach</Link>
            <Link className="btn-link" to={`${process.env.PUBLIC_URL}/list`}>view full list</Link>
        </div>
    )
}
