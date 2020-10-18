import React from 'react'
export default function User({ photo, nom, rol }) {
    return (
        <div className="userBox">
            <div className="photo">
                <img src={require('../img.png')} />
            </div>
            <div className="userInfos">
                <h1 className="name">{nom}</h1>
                <p className="rol">{rol}</p>
            </div>
        </div>
    )
}
