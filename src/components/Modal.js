import React from 'react'
import ReactModal from 'react-modal'


const Modal = (props) => {

    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            contentLabel="route modal"
            appElement={document.getElementById('root')}
            closeTimeoutMS={150}
            style={{
                content: {
                    top: '10%',
                    bottom: 'auto',
                    left: '12px',
                    right: '12px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    maxWidth: '400px',
                    maxHeight: '80vh',
                    padding: '12px',
                    borderRadius: '12px',
                    borderColor: '#EDC331',
                    borderWidth: '5px',
                    borderStyle: 'solid'
                },
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }
            }}
        >
            <div style={{ position: 'relative' }}>
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    style={{ position: 'absolute', top: '6px', right: '8px', zIndex: '2' }}
                    onClick={props.onRequestClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div style={{ overflowY: 'scroll' }}>
                    {props.children}
                </div>
            </div>
        </ReactModal >
    )
}

export default Modal