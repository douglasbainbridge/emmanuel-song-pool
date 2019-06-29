import React from 'react'


export default function ListColumn(props) {
    if (props.type === "preach") {
        return (
            <div style={{
                borderRadius: '6px',
                margin: '12px 12px',
            }}>
                <h2
                    className="text-white d-inline"
                >Preach</h2>
            </div>
        )
    }
    return (
        <div style={{
            borderRadius: '6px',
            margin: '12px 12px',
            width: '275px'
        }}>
            <h2
                className="text-white d-inline"
            >{props.title}</h2>
            {props.or && <h2
                className="text-white d-inline float-right"
            >OR</h2>}
            <div
                style={{
                    overflowY: 'auto',
                    height: 'calc(100vh - 120px)'
                }}
            >
                {props.children}
            </div>
        </div>
    )
}
