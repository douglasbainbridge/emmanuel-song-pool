import React from 'react'
import classnames from 'classnames'
import Icon from './Icon'

export default ({
    className,
    value,
    onChange,
    name,
    children
}) => {
    return (

        <button
            className={classnames(
                "action-btn",
                "mb-2",
                "d-flex",
                "align-items-center",
                className
            )}
            onClick={() => {
                onChange({
                    target: {
                        name: String(name),
                    }
                })
            }}
        >
            <Icon icon="check box" checked={Boolean(value)} />
            <div className="flex-grow-1 px-2">
                {children}
            </div>

        </button>
    )
}