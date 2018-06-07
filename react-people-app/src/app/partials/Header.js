import React from "react";

export const Header = (props) => {

    const { title, state, handleClick, loadUsers } = props;

    const changeIcon = state ? 'view_list' : 'view_module'

    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo m-3">{title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="collapsible.html" onClick={loadUsers}><i className="material-icons">refresh</i></a></li>
                    <li><a onClick={handleClick}><i className="material-icons">{changeIcon}</i></a></li>
                </ul>
            </div>
        </nav>
    )
}