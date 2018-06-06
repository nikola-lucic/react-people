import React from "react";
import { UserListItem } from "./UserListItem";
import { fetchUsers } from "../../services/UserServices";

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch
        fetchUsers()
            .then((userList) => {
                this.setState({
                    users: userList
                })

            })
    }

    render() {
        const userList = this.state.users;
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
}

