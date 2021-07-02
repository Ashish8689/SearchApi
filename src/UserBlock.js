import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function UserBlock({user:{id,email,firstName,lastName,picture,title}}) {
    return (
        <div className="userblock">
            <div className="userblock-img-container">
                <img src={picture} alt={firstName} />
            </div>

            <div className="userblock-content">
                <h1> <span>{title}.</span>  {firstName} {lastName} </h1>
                <h2> <MailOutlineIcon className="icons"/> {email}</h2>
                <h3> <PermIdentityIcon className="icons"/> {id}</h3>
            </div>
        </div>
    )
}

export default UserBlock
