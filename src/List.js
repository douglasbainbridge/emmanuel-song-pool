import React from 'react'
import PropTypes from 'prop-types';
import Song from './Song'
import FlipMove from 'react-flip-move';

function List({ list, title }) {
    return (
        <div className="mb-4">
            <h3>{title}</h3>
            <FlipMove
                staggerDelayBy={200}
                staggerDurationBy={0}
                duration={300}
                delay={500}
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