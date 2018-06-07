import React from "react";
import { UserListItem } from "./UserListItem";

export const UserList = (props) => {
    const { userList, searchBarInputValue } = props;

    const filterUsers = (users, value) => {
        return users.filter((user, index) => user.firstName.includes(value));
    }

    if (searchBarInputValue === "") {
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
    } else {
        return (
            <div className="collection">
                {filterUsers(userList, searchBarInputValue).map((user, index) => {
                    return <UserListItem key={index} ofMyUser={user} />
                })}
            </div>
        )
    }

}


