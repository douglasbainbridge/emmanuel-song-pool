import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Icon from './Icon'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import classnames from 'classnames'

const Small = ({ title, children }) => {
    return <span className="mr-2" title={title}><strong>{children}</strong></span>
}

const IconLink = (props) => {
    if (!props.link) { return null }
    return (
        <a
            style={{ margin: 8, display: 'block', textAlign: 'center' }}
            href={props.link}
            target="__blank"
            className="hoverBlue"
        >
            <Icon style={{ fontSize: '30px' }} icon={props.icon} />
            <small className="d-block" >{props.title}</small>
        </a>
    )
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
            flowSubcategories,
            spotifyLink,
            newSong,
            bpm,
            chartsLink,
            tracksLink,
            youtubeLink,
            applemusicLink
        } = this.props.song
        return (
            <div
                className={classnames("songContainer", { 'active': this.state.expanded })}
            >
                <button
                    onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
                    className="song-btn w-100"
                >
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        whiteSpace: 'nowrap'
                    }}>
                        <h4
                            className="mb-0 d-inline-block"
                            style={{
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden'
                            }}
                        >
                            {title}</h4>

                        <span style={{
                            marginLeft: 'auto'
                        }}>
                            {focusList && <Small title="Focus List Song"><Icon icon="star" /></Small>}
                            {newSong && <span className="badge bg-red text-white mr-2">New</span>}
                            {bpm && <Small title="Suggested tempo"><Icon icon="tempo" />{" "}{bpm}</Small>}
                            {maleKey && <Small title="Suggested male key"><Icon icon="male" />{" "}{maleKey}</Small>}
                            {femaleKey && <Small title="Suggested female key"><Icon icon="female" />{" "}{femaleKey}</Small>}
                            <Icon icon="chevron" direction={this.state.expanded ? 'up' : 'down'} />
                        </span>
                    </div>
                </button>
                <div
                    style={{
                        maxHeight: this.state.expanded ? '300px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s'
                    }}
                >
                    <div className="py-3 px-2">
                        <h5>Artist: <strong>{artist}</strong></h5>
                        <div className="d-flex flex-row flex-wrap justify-content-around">
                            <IconLink
                                title="YouTube"
                                icon="youtube"
                                link={youtubeLink}
                            />
                            <IconLink
                                title="Spotify"
                                icon="spotify"
                                link={spotifyLink}
                            />
                            <IconLink
                                title="Apple Music"
                                icon="applemusic"
                                link={applemusicLink}
                            />
                            <IconLink
                                title="Tracks"
                                icon="tracks"
                                link={tracksLink}
                            />
                            <IconLink
                                title="Chord Charts"
                                icon="charts"
                                link={chartsLink}
                            />
                        </div>
                        <h5 className="mb-0 mt-2">Themes:</h5>
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