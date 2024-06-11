//================= AUTH FORM =================//
declare type LoginUser = {
    email: string;
    password: string;
};

declare type SignUpUser = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

declare type AuthFormProps = {
    type: 'login' | 'signup';
};