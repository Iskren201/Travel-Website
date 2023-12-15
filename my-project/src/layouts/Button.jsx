import React from 'react'

const Button = (props) => {
    return (
        <div className={`${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#8482ff] hover:text-white transition-all`}>
            {props.title}
        </div>
    )
}

export default Button