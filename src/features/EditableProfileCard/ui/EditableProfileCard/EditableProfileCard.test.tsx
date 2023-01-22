import { screen } from '@testing-library/react';
import { CountriesEnum } from 'entities/Counties';
import { CurrencyEnum } from 'entities/Currency';
import { ProfileType } from 'entities/Profile';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { EditableProfileCard } from './EditableProfileCard';
import userEvent from '@testing-library/user-event';
import { API } from 'shared/api/api';

const testProfileData: ProfileType = {
    id: '1',
    name: 'testFirstName',
    lastname: 'testLastName',
    username: 'testUsername',
    email: 'testEmail',
    phone: 'testPhone',
    avatar: 'testAvatar',
    address: 'testAddress',
    city: 'testCity',
    country: CountriesEnum.CZ,
    currency: CurrencyEnum.CZK,
    company: 'testCompany',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            profileData: testProfileData,
            editableData: testProfileData,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe(
    'EditableProfileCard',
    () => {
        it(
            'should render EditableProfileCardHeader.EditButton when readonly is true',
            async () => {
                ComponentRender(
                    <EditableProfileCard userId={ '1' } />,
                    options 
                );
                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.EditButton' ) );
                expect( screen.getByTestId( 'EditableProfileCardHeader.CancelButton' ) ).toBeInTheDocument();
            } 
        );
        it(
            'should return initial state when EditableProfileCardHeader.CancelButton is clicked',
            async () => {
                ComponentRender(
                    <EditableProfileCard userId={ '1' } />,
                    options 
                );
                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.EditButton' ) );

                await userEvent.clear( screen.getByTestId( 'ProfileCard.ProfileName' ) );
                await userEvent.clear( screen.getByTestId( 'ProfileCard.ProfileLastname' ) );

                await userEvent.type(
                    screen.getByTestId( 'ProfileCard.ProfileName' ),
                    'userName' 
                );
                await userEvent.type(
                    screen.getByTestId( 'ProfileCard.ProfileLastname' ),
                    'userLastname' 
                );

                expect( screen.getByTestId( 'ProfileCard.ProfileName' ) ).toHaveValue( 'userName' );
                expect( screen.getByTestId( 'ProfileCard.ProfileLastname' ) ).toHaveValue( 'userLastname' );

                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.CancelButton' ) );

                expect( screen.getByTestId( 'ProfileCard.ProfileName' ) ).toHaveValue( 'testFirstName' );
                expect( screen.getByTestId( 'ProfileCard.ProfileLastname' ) ).toHaveValue( 'testLastName' );
            } 
        );
        it(
            'shoud validate with error when ProfileCard.ProfileName is empty',
            async () => {
                ComponentRender(
                    <EditableProfileCard userId={ '1' } />,
                    options 
                );
                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.EditButton' ) );

                await userEvent.clear( screen.getByTestId( 'ProfileCard.ProfileName' ) );

                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.SaveButton' ) );

                expect( screen.getByTestId( 'EditableProfileCard.Error.Paragraph' ) ).toBeInTheDocument();
            } 
        );
        it(
            'should send PUT request when EditableProfileCardHeader.SaveButton is clicked and no validation errors',
            async () => {
                const spyPutRequest = jest.spyOn(
                    API,
                    'put' 
                );
                ComponentRender(
                    <EditableProfileCard userId={ '1' } />,
                    options 
                );
                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.EditButton' ) );

                await userEvent.clear( screen.getByTestId( 'ProfileCard.ProfileName' ) );

                await userEvent.type(
                    screen.getByTestId( 'ProfileCard.ProfileName' ),
                    'userName' 
                );

                await userEvent.click( screen.getByTestId( 'EditableProfileCardHeader.SaveButton' ) );

                expect( spyPutRequest ).toHaveBeenCalled();
            } 
        );
    } 
);
