import React from 'react'

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    type,
    onChange,
}) => {
    return (
        <input
            style={{
                width: '150px', display: 'inline-block', margin: '.4rem 0.5rem'
            }}
            spellCheck="false"
            type={type}
            className='form-control'
            placeholder={placeholder}
            name={name}
            role="form"
            value={value}
            onChange={onChange}
        />
    )
}


TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup