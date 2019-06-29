import React from 'react'

export default function ListColumn(props) {
    return (
        <div style={{
            borderRadius: '6px',
            margin: '12px 12px',
        }}>
            <h2
                style={{ color: 'white' }}
            >{props.title}</h2>
            <div
                style={{
                    overflowY: 'auto',
                    height: 'calc(100vh - 200px)'
                }}
            >
                {props.children}
            </div>

        </div>
    )
}
