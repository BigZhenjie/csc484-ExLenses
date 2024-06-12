"use client"

import { useState } from 'react'

const user = () => {
    const [userDetail, setUserDetail] = useState<userDetail | null>(null);
    const [data, setData] = useState<transactionDetail[] | null>(null);
  return {userDetail, setUserDetail, data, setData}
}

export default user