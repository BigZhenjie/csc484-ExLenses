import {mockUserCredentials} from "@/../constants/mockData";

interface UserCredentials {
    [email: string]: {
        username: string;
        password: string;
        firstName: string;
        lastName: string;
    };
}

export const login = (email : string, password : string) => {
    const user = mockUserCredentials.find(user => user.email === email);
    if (user && user.password === password) {
        return user;
    }
    return null;
}

export const signup = (email : string, password : string, firstName : string, lastName : string) => {
    mockUserCredentials.push({email, password, firstName, lastName});
    return mockUserCredentials[mockUserCredentials.length - 1];
}