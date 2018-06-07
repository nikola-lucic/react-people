import React from "react";
import { UserListItem } from "./UserListItem";

export const UserList = (props) => {
    const {userList} = props;
    return (
        <div className="row" >
            <div className="container">
                <ul className="collection">
                    {userList.map((user, index) => {
                        return <UserListItem key={index} ofMyUser={user} />
                    })}
                </ul>
            </div>
        </div>
    )
}


