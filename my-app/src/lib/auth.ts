import {mockUserCredentials} from "@/../constants/mockData";

export const login = (email : string, password : string): userDetail | null => {
    const user = mockUserCredentials.find(user => user.email === email);
    if (user && user.password === password) {
        return user;
    }
    return null;
}

export const signup = (email : string, password : string, firstName : string, lastName : string): userDetail | null => {
    if (mockUserCredentials.find(user => user.email === email)) {
        return null;
    }
    mockUserCredentials.push({firstTimeOnboard: true, email, password, firstName, lastName, $id: (mockUserCredentials.length + 1).toString()});
    return mockUserCredentials[mockUserCredentials.length - 1];
}