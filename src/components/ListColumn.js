import React from 'react'
import Icon from './Icon'

export default function ListColumn(props) {
    if (props.type === "preach") {
        return (
            <div style={{
                borderRadius: '6px',
                margin: '0px 12px',
            }}>
                <h2
                    className="text-white d-inline"
                >Preach</h2>
                <div style={{
                    minHeight: '40vh',
                    display: 'flex',
                    alignItems: 'flex-end',
                    color: 'white',
                    fontSize: '16px'
                }}>
                    <div
                        style={{
                            flexDirection: 'row', alignItems: 'center', marginBottom: 16
                        }}>
                        <Icon color='white' icon="arrow" direction="left" />
                        before the preach
                    </div>
                    <div style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', textAlign: 'right' }}>
                        after the preach
                        <Icon color='white' icon="arrow" direction="right" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={{
            borderRadius: '6px',
            margin: '0px 12px',
            width: '275px'
        }}>
            {props.title && <h2
                className="text-white d-inline"
            >{props.title}</h2>}
            <div
                style={{
                    overflowY: 'auto',
                    height: 'calc(100vh - 128px)',
                    paddingBottom: '42px'
                }}
            >
                {props.children}
            </div>
        </div>
    )
}
