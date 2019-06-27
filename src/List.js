import React from 'react'
import PropTypes from 'prop-types';
import Song from './Song'
import FlipMove from 'react-flip-move';

function List({ list, title }) {
    return (
        <div className="mb-4" style={{ width: '300px' }}>
            <h3>{title}</h3>
            <FlipMove
                staggerDelayBy={30}
                staggerDurationBy={0}
                duration={300}
                appearAnimation={"elevator"}
                enterAnimation={"elevator"}
            >
                {list.map(s => <Song key={s.title + s.artist} song={s} />)}
            </FlipMove>
        </div>
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

export default List