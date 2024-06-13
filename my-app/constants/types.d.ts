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
    firstTimeOnboard: boolean;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    $id: string;
}

declare type transactionDetail = {
    amount: string;
    date: string;
    description: string;
}

declare type BankData = {
    bankId: string;
    bankName: string;
    mask: string;
    type: string;
    balance: number;
    transactions: transactionDetail[];
}

declare type exchangePublicTokenProps = {
    publicToken: string;
    user: userDetail;
    bankData: BankData[] | null;
}

declare type userStoreState = {
    user: userDetail | null;
    setUser: (user: userDetail) => void;
}

declare type dataStoreState = {
    data: BankData[] | null;
    setData: (data: BankData[]) => void;
}

declare type filteredDataStoreState = {
    filteredData: BankData[] | null;
    setFilteredData: (data: BankData[] | null) => void;
}

