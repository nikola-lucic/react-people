export class User {
    constructor(gender, firstName, lastName, photoSmall, photoLarge, email, dateOfBirth) {
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoSmall = photoSmall;
        this.photoLarge = photoLarge;
        this.email = email;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getFormattedName() {
        let firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
        let lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
        return `${firstName} ${lastName}`;
    };

    hideEmail() {
        let email = this.email.split("@");
        let firstPart = email[0]
        let average = email[0].length / 2;
        firstPart = firstPart.substring(0, (firstPart.length - average));
        let secondPart = email[1];
        return `${firstPart}...@${secondPart}`
    };

    getDateOfBirth() {
        let date = this.dateOfBirth;
        let dateOutput = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;
        return dateOutput;
    }
}