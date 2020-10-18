import React from 'react'

export const UsersBox = ({ photo, name, rol, description }) => {
    return (
        <div className="usersBox">
            <div className="profilePhoto">{
                <img src={require('../img.png')} />
            }</div>
            <div className="usersInfos">
                <div className="userName">{name}</div>
                <div className="usersRole">{rol}</div>
                <div className="usersDescript">{description}</div>
            </div>
        </div>
    )
}
