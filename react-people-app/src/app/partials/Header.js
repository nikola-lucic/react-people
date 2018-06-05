import React from "react";

export const Header = (props) => {
    const title = props.title;
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <a className="brand-logo"><i className="material-icons">cloud</i>{title}</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}