import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
          <div className="flex-1 lg:shadow-1 lg:drop-shadow-lg lg:px-16 lg:py-12 lg:mx-auto bg-white w-[320px] h-[480px] content-center  lg:border lg: border-gray-300 rounded-lg">
            <h1 className="font-bold text-[30px] ml-14 lg:mx-auto lg:content-center w-[180px] text-black text-lg lg:w-full mb-4  flex justify-center lg:text-center">
              SIGN UP
            </h1>
            {/* form */}
            <form className="lg:w-full items-center mx-auto">
              <input
                className=" dropdown-btn border mx-auto border-gray-300 focus:border-blumine-700 outline-none 
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className=" dropdown-btn border mx-auto border-gray-300 focus:border-blumine-700 outline-none 
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="email"
                placeholder="Email"
              />
              <input
                className=" dropdown-btn relative mx-auto border border-gray-300 focus:border-blumine-700 outline-none 
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="password"
                id="pswrd"
                placeholder="Password"
              />
              <input
                className=" dropdown-btn relative mx-auto border border-gray-300 focus:border-blumine-700 outline-none 
                rounded lg:w-full lg:px-4 h-14 mb-4 text-sm"
                type="password"
                id="pswrd"
                placeholder="Conf Password"
              />
              <button
                type="submit"
                className="text-white lg:mx-auto mx-2 hover:bg-blumine-800 bg-blumine-500 rounded-full mt-1 p-4 text-sm lg:w-full w-[19rem]"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
