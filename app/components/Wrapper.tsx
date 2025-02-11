import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  // color?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <main
      className={`container mx-auto px-10 sm:px-20 lg:px-32 xl:px-40 bg-opacity-5 overflow-hidden`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
