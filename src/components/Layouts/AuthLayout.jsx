import React from "react";
import Logo from "../elements/Logo";

function AuthLayout(props) {
  const { children, title } = props;
  return (
    <>
      <main className="min-h-screen bg-special-mainBg flex items-center justify-center">
        {/* container start */}
        <div className="w-full max-w-sm">
          <Logo />
          <h1 className="text-xl font-bold text-gray-01 text-center mt-8">
            {title}
          </h1>
          {children}
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;