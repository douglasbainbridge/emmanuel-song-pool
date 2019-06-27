import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Icon from './Icon'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import classnames from 'classnames'


const Small = ({ fullTitle, title, content }) => {
    return <span className="mr-2" title={fullTitle}>{title}: <strong>{content}</strong></span>
}

class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    render() {
        const { title, artist, maleKey, femaleKey, focusList, notes, flowCategories, flowSubcategories, spotifyLink } = this.props.song
        return (
            <div style={{ border: '1px solid rgb(234,234,234)', marginBottom: '-1px' }}>
                <button
                    onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
                    className={classnames("song-btn", "p-1", "w-100", { 'text-green': focusList })}
                >
                    <h4 className="mb-0 d-inline-block">{title}</h4><small>/{artist}</small>
                    <span className="float-right">
                        {maleKey && <Small fullTitle="Suggested male key" title="M" content={maleKey} />}
                        {femaleKey && <Small fullTitle="Suggested female key" title="F" content={femaleKey} />}
                    </span>
                </button>
                <div
                    style={{
                        maxHeight: this.state.expanded ? '300px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s'
                    }}
                >
                    <div className="p-1" >
                        {spotifyLink && <Icon icon="spotify" />}
                        <h5 className="mb-0 mt-2">Flow Themes:</h5>
                        {flowCategories && flowCategories.join(', ')}
                        <h5 className="mb-0 mt-2">Flow Sub Themes:</h5>
                        {flowSubcategories && flowSubcategories.join(', ')}
                        <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(notes) }} />
                    </div>
                </div>
            </div>

        )
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired,
}

export default Song