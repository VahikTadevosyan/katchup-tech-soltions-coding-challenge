import React from 'react';
import { FbIcon, GIcon, InIcon } from './icons';
import FormInput from '../FormInput';
import CustomDivider from '../CustomDivider';

const LoginForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const values = Object.fromEntries(formData.entries());
    alert(JSON.stringify(values));
  };
  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-10 gap-6  mt-12">
      <h2 className="text-center text-2xl sx:text-4xl lg:text-5xl xl:text-7xl text-nowrap font-bold">
        Login to Your Account
      </h2>
      <p className=" text-center text-2xl text-gray-600 tracking-wide">
        Login using social networks
      </p>
      <div className="flex gap-6 w-fit ">
        <FbIcon className="w-[70px] h-[70px] cursor-pointer" />
        <GIcon className="w-[70px] h-[70px] cursor-pointer" />
        <InIcon className="w-[70px] h-[70px] cursor-pointer" />
      </div>

      <div className=" sm:mx-auto w-full sm:max-w-sm md:max-w-screen-sm">
        <CustomDivider splitter={'OR'} />
        <form className="space-y-6 pt-6" onSubmit={onSubmit} method="POST">
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email"
            required
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            required
          />
          <button
            type="submit"
            className="flex m-auto w-80 h-[60px] items-center justify-center rounded-full bg-[#2fb69b] text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
