import React, { Component } from 'react'
import ReactModal from 'react-modal'



class TempScrollBox {
    constructor() {
        this.scrollBarWidth = 0;

        this.measureScrollbarWidth();
    }

    measureScrollbarWidth() {
        // Add temporary box to wrapper
        let scrollbox = document.createElement('div');

        // Make box scrollable
        scrollbox.style.overflow = 'scroll';

        // Append box to document
        document.body.appendChild(scrollbox);

        // Measure inner width of box
        this.scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;

        // Remove box
        document.body.removeChild(scrollbox);
    }

    get width() {
        return this.scrollBarWidth;
    }
}




export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel="route modal"
                appElement={document.getElementById('root')}
                closeTimeoutMS={150}
                onAfterOpen={() => {

                    if (document.getElementsByClassName("ReactModal__MeasureInternalHeight").length > 0) {
                        const modalHeight = document.getElementsByClassName("ReactModal__MeasureInternalHeight")[0].offsetHeight
                        if ((modalHeight + ('100px' * 2) + 6) > this.state.height) {
                            //this adds some padding to stop the body content moving due to width increasing
                            let scrollbox = new TempScrollBox();
                            document.body.style.paddingRight = `${scrollbox.scrollBarWidth || 0}px`;
                            document.body.style.overflow = 'hidden';//overflowY doesnt work in safari
                            document.documentElement.style.overflow = 'hidden';//overflowY doesnt work in safari
                        }
                    }

                    if (document.getElementsByClassName("ReactModal__Overlay").length > 0) {
                        document.getElementsByClassName("ReactModal__Overlay")[0].scrollTop = 0
                    }
                }}
                onAfterClose={() => {
                    document.body.style.overflow = 'auto'//overflowY doesnt work in safari
                    document.documentElement.style.overflow = 'auto'//overflowY doesnt work in safari
                    document.body.style.paddingRight = '0px'
                }}
                style={{
                    content: {
                        top: '100px',
                        bottom: 'auto',
                        marginBottom: '100px',
                        left: '12px',
                        right: '12px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        maxWidth: '400px',
                        padding: '12px',
                        borderRadius: '12px',
                        borderColor: '#EDC331',
                        borderWidth: '5px',
                        borderStyle: 'solid'
                    },
                    overlay: {
                        overflowY: 'auto',
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }
                }}
            >
                <div className="ReactModal__MeasureInternalHeight">
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        style={{ position: 'absolute', top: '6px', right: '12px', zIndex: 10001 }}
                        onClick={this.props.onRequestClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.props.children}
                </div>
            </ReactModal >
        )
    }
}