import React from 'react'
import PropTypes from 'prop-types';
import Song from './Song'
import FlipMove from 'react-flip-move';

function List({ list, title }) {
    return (
        <div
            style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 0px 2px',
                padding: '20px 6px',
                borderRadius: '12px',
                borderColor: '#2886ae',
                borderWidth: '5px',
                borderStyle: 'solid'
            }}
            className="mb-4">

            <FlipMove
                staggerDelayBy={30}
                staggerDurationBy={0}
                appearAnimation={"elevator"}
                enterAnimation={"elevator"}
            >
                <h3 style={{ padding: '0px 6px' }} key={title}>{title}</h3>
                {list.map(s => <Song key={s.title + s.artist} song={s} />)}
            </FlipMove>
        </div>
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

export default List