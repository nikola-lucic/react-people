import React from "react";

export const UserListItem = (props) => {

    const name = props.ofMyUser.getFormattedName();
    const { photoSmall } = props.ofMyUser;
    const email = props.ofMyUser.hideEmail();
    const date = props.ofMyUser.getDateOfBirth();

    return (
        <li className="collection-item avatar">
            <span>
                <img src={photoSmall} alt="" className="circle" />
                <span className="title">{name}</span>
            </span>
            <p>
                <i className="material-icons">email</i>{email}<br/>
                <i className="material-icons">cake</i>{date}
            </p>
                
            <a className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    )
}