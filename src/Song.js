import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Icon from './Icon'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import classnames from 'classnames'

const Small = ({ fullTitle, title, content }) => {
    return <span className="mr-3" title={fullTitle}>{title}: <strong>{content}</strong></span>
}

class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    render() {
        const { title, artist, maleKey, femaleKey, focusList, notes, flowCategories, flowSubcategories } = this.props.song
        return (
            <div style={{ border: '1px solid rgba(0,0,0,.125)' }}>
                <div
                    onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
                    style={{ cursor: 'pointer', }}
                    className={classnames("p-1", { 'bg-green': focusList })}
                >
                    <h4 className="mb-0">{title}<span> - {artist}</span></h4>
                    <div className="d-flex flex-row">
                        {maleKey && <Small fullTitle="Suggested male key" title="M" content={maleKey} />}
                        {femaleKey && <Small fullTitle="Suggested female key" title="F" content={femaleKey} />}
                    </div>
                </div>
                <div
                    style={{
                        maxHeight: this.state.expanded ? '300px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s'
                    }}
                >
                    <div className="p-3" >
                        <Icon icon="spotify" />
                        <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(notes) }} />
                        <h5>Flow Themes:</h5>
                        {flowCategories && flowCategories.join(', ')}
                        <h5>Flow Sub Themes:</h5>
                        {flowSubcategories && flowSubcategories.join(', ')}
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