import React from 'react';

const SideActionPanel = () => {
  return (
    <div className="h-full min-h-[400px] flex flex-col justify-center items-center">
      <div className="space-y-6">
        <h2 className="text-white text-center text-2xl sx:text-4xl sm:text-7xl text-nowrap font-bold">
          New here?
        </h2>
        <p className="text-white text-center text-2xl tracking-wide text-wrap max-w-[400px]">
          Sign up and discover a great amount of new opportunities!
        </p>
        <button
          type="submit"
          className="flex m-auto w-80 h-[60px] items-center justify-center rounded-full bg-gray-100 text-black text-sm/6 font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SideActionPanel;
