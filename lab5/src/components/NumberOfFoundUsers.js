import React from 'react'

export const NumberOfFoundUsers = (props) => {
    return (
        <div className='usersFound'>
            <h6>Znalazłem: {props.foundUsers} kandydatów</h6>
        </div>
    )
}
