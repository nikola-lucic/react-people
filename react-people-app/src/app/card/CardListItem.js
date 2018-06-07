import React from "react";

export const CardListItem = (props) => {
    const name = props.ofMyUser.getFormattedName();
    const { photoLarge, gender } = props.ofMyUser;
    const email = props.ofMyUser.hideEmail();
    const date = props.ofMyUser.getDateOfBirth();
    const genderColor = gender === "female" ? "red lighten-5" : ""

    return (
        <div className="col s12 m4 l4">
            <div className={`card ${genderColor}`}>
                <div className="card-image">
                    <img src={photoLarge} />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{email}<br />
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}