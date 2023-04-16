import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const passwordToogle = () => {
    var getPasword = document.getElementById('pswrd');
    if (getPasword.type === 'password') {
      getPasword.type = 'text';
    } else {
      getPasword.type = 'password';
    }
  };
  return (
    <div>
      <div className="container mx-auto max-w-[720px] h-auto min-h-[800px] mb-14">
        {/* image description */}
        <div className="place-content-center lg:flex lg:items-start py-16 px-16 lg:mx-auto lg:gap-8 lg:flex-row p-15">
          <div className="justify-center flex-1 lg:shadow-1 lg:drop-shadow-lg lg:px-16 lg:py-2 lg:mx-auto bg-white w-2 h-[25rem] items-center  lg:border lg: border-gray-300 rounded-lg">
            {/* form */}
            <h1 className="lg:text-center px-4 font-bold text-[18px] w-[380px] lg:text-[22px] text-black mb-4 py-2 mt-2">
              Please login to your account
            </h1>
            <form className="w-full py-4">
              <input
                className=" dropdown-btn border border-gray-300 focus:border-blumine-700 outline-none
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="email"
                placeholder="Email"
              />
              <input
                className=" dropdown-btn relative border border-gray-300 focus:border-blumine-700 outline-none
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="password"
                id="pswrd"
                placeholder="Password"
              />
              <div className="w-[360px] text-xs mb-4 justify-start gap-x-1">
                <input
                  className="ml-auto mr-2 text-xs"
                  type="checkbox"
                  onClick={passwordToogle}
                />
                Show password
              </div>
              <button
                type="submit"
                className="text-white hover:bg-blumine-800 bg-blumine-500 rounded-full mt-1 p-4 text-sm lg:w-full w-[19rem]"
              >
                login
              </button>
            </form>
            <div className="w-[180px] hover:text-blue-800 text-center text-blue-600 text-xs lg:w-full flex justify-center py-4">
              <Link className="flex w-full justify-center">
                Forget password ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
