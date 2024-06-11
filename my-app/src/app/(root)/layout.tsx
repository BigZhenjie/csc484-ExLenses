import React from 'react'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-[430px] h-[818px] bg-white rounded-2xl">{children}</div>
  );
};

export default RootLayout