import React from "react";

export const CardListItem = (props) => {
    const name = props.ofMyUser.getFormattedName();
    const { photoLarge } = props.ofMyUser;
    const email = props.ofMyUser.hideEmail();
    const date = props.ofMyUser.getDateOfBirth();

    return (
        <div className="col s12 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={photoLarge} />
                    <span className="card-title">{name}</span>
                </div>
                <div class="card-content">
                    <p>{email}<br />
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}