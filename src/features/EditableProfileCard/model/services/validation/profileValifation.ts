import { ProfileType } from "entities/Profile";
import { ErrorProfileEnum } from "../../consts/editableProfileCardConsts";

export const profileValidation = ( profile?: ProfileType ) => {
    if ( !profile ) {
        return [
            ErrorProfileEnum.NO_DATA_ERROR
        ];
    }
    const { name, lastname, email, username, avatar } = profile;

    const errors: ErrorProfileEnum[] = [];

    if ( !name || name.length < 3 || name.length > 20 ) {
        errors.push( ErrorProfileEnum.NAME_LENGTH_ERROR );
    }

    if ( !lastname || lastname.length < 3 || lastname.length > 20 ) {
        errors.push( ErrorProfileEnum.LASTNAME_LENGTH_ERROR );
    }

    if ( !email ) {
        errors.push( ErrorProfileEnum.EMAIL_REQUIRED_ERROR );
    }

    if ( !username ) {
        errors.push( ErrorProfileEnum.USERNAME_ERROR );
    }

    if ( !avatar ) {
        errors.push( ErrorProfileEnum.AVATAR_ERROR );
    }

    if ( !email ) {
        errors.push( ErrorProfileEnum.EMAIL_REQUIRED_ERROR );
    }

    return errors;
};
