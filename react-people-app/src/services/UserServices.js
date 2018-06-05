import {User} from "../entities/User";

export const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then((response) => { return response.json() })
        .then((data) => {
            const userList = data.results
            return userList.map((user) => {
                return new User(user.gender, user.name.first, user.name.last, user.picture.thumbnail, user.picture.large, user.email, user.dob)
            });

        })
}