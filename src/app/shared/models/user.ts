import {Model} from './model';

export class User extends Model {
    firstname?: string;
    fullName?: string ;
    lastname?: string;
    lastName?: string;
    username?: string;
    mail?: string;
    profil?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    newPassword?: string;
    oldPassword?: string;
    imageProfile?: string;
    gidNumber?: string;
    organisation?: string;
    gidName?: string;

    // tslint:disable-next-line:typedef
    static fromJSON(data: any) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        const user = new User();
        user.firstname = data.firstname;
        user.fullName = data.fullName;
        user.lastname = data.lastname;
        user.lastName = data.lastName;
        user.username = data.login;
        user.mail = data.mail;
        user.profil = data.profil;
        user.phone = data.phone;
        user.gidNumber = data.gidNumber;
        user.password = data.code;
        user.confirmPassword = data.confirmPassword;
        user.newPassword = data.newPassword;
        user.oldPassword = data.oldPassword;
        user.imageProfile = data.imageProfile;
        user.organisation = data.organisation;
        user.gidName = data.gidName;

        return user;
    }
}
