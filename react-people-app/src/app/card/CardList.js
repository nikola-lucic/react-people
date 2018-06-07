import React from "react";
import { CardListItem } from "./CardListItem";


export const CardList = (props) => {
    const {userList} = props
    return (
        <div className="row">
            <div className="container">
                {userList.map((user, index) => {
                    return <CardListItem key={index} ofMyUser={user} />
                })}
            </div>
        </div>
    )
}
