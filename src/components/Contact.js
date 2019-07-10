import React from 'react'

export default function Contact() {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 40,
                right: 20,
                background: 'white',
                borderRadius: '32px',
                padding: '0px 12px',
                borderColor: '#EDC331',
                borderWidth: '5px',
                borderStyle: 'solid'
            }} className="shadow">
            <a href="mailto:worship@weareemmanuel.com?subject=Song Pool Feedback&body=Hi there, please don't change the subject line this email will get auto forwarded." className="btn-link mb-0" >
                feedback
        </a>
        </div>

    )
}
