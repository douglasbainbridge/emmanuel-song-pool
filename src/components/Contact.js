import React from 'react'

export default function Contact() {
    return (
        <a
            href="mailto:worship@weareemmanuel.com?subject=Song Pool Feedback&body=Hi there, please don't change the subject line of this email as it will get auto forwarded."
            style={{
                position: 'fixed',
                bottom: 40,
                right: 20,
            }} className="shadow contact-btn">
            feedback
        </a>

    )
}
