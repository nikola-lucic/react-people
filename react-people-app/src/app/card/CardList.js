import React from "react";
import { fetchUsers } from "../../services/UserServices";
import { CardListItem } from "./CardListItem";


export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {

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
            <div className="row">
                <div className="container">
                    {userList.map((user, index) => {
                        return <CardListItem key={index} ofMyUser={user} />
                    })}
                </div>
            </div>
        )
    }
}