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

declare type userDetail = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

declare type transactionDetail = {
    amount: number;
    date: Date;
    description: string;
    type: string;
}