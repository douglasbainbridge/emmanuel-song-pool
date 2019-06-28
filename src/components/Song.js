import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Icon from './Icon'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import classnames from 'classnames'


const Small = ({ title, children }) => {
    return <span className="mr-2" title={title}><strong>{children}</strong></span>
}
const ButtonLink = props => {
    return <div className="mb-2 mr-2"><a className="btn-link" href={props.link}>{props.children}</a></div>
}

class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    render() {
        const {
            title,
            artist,
            maleKey,
            femaleKey,
            focusList,
            notes,
            flowCategories,
            flowSubcategories,
            spotifyLink,
            newSong,
            bpm,
            chartsLink,
            tracksLink
        } = this.props.song
        return (
            <div style={{
                border: '1px solid rgb(100,100,100)',
                marginBottom: '4px',
            }}
            >
                <button
                    onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
                    className={classnames("song-btn", "w-100", { 'text-green': focusList })}
                >
                    <h4 className="mb-0 d-inline-block">{title}</h4><small>/{artist}</small>
                    {newSong && <span className="badge bg-red text-white ml-2">New</span>}
                    <span className="float-right">
                        {bpm && <Small title="Suggested tempo"><Icon icon="tempo" />{" "}{bpm}</Small>}
                        {maleKey && <Small title="Suggested male key"><Icon icon="male" />{" "}{maleKey}</Small>}
                        {femaleKey && <Small title="Suggested female key"><Icon icon="female" />{" "}{femaleKey}</Small>}
                        <Icon icon="chevron" direction={this.state.expanded ? 'up' : 'down'} />
                    </span>
                </button>
                <div
                    style={{
                        maxHeight: this.state.expanded ? '300px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s'
                    }}
                >
                    <div className="py-3 px-2">
                        <div className="d-flex flex-row flex-wrap">
                            {spotifyLink && <ButtonLink link={spotifyLink}>Listen on Spotify <Icon icon="spotify" /></ButtonLink>}
                            {chartsLink && <ButtonLink link={spotifyLink}>Download Chord Charts <Icon icon="charts" /></ButtonLink>}
                            {tracksLink && <ButtonLink link={spotifyLink}>Download Tracks <Icon icon="tracks" /></ButtonLink>}
                        </div>
                        <h5 className="mb-0 mt-2">Flow Themes:</h5>
                        <small>{flowCategories && flowCategories.join(', ')}</small>

                        <h5 className="mb-0 mt-2">Flow Sub Themes:</h5>
                        <small>{flowSubcategories && flowSubcategories.join(', ')}</small>

                        {notes && (
                            <div>
                                <h5 className="mb-0 mt-2">Notes:</h5>
                                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(notes) }} />
                            </div>
                        )}

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