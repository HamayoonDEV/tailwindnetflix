import React from "react";

const Home = () => {
  return (
    <div className=" bg-center bg-cover  w-[100%] h-[100vh] bg-[url('https://variety.com/wp-content/uploads/2022/12/100-Greatest-Movies-Variety.jpg?w=1024')]">
      <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] flex justify-center items-center text-white flex-col  ">
        <h1 className="sm:text-[52px] text-[45px] font-bold text-center">
          Unlimited movies,Tv Shows and More
        </h1>
        <h4 className="sm:text-[30px] text-[20] ">
          Watch anyWhere.Cancel anyTime.
        </h4>
        <p className="text-center sm:text-[25] text-[20px]">
          Ready to watch?Enter your email to create or restart your membership.
        </p>
        <div className="mt-[1rem]">
          <input
            className="bg-[rgba(0,0,0,0.5)] px-[0.5rem] border-[0.5px] border-[white] sm:w-[15rem] w-[10rem] h-[2rem]"
            placeholder="Email Address"
          />
          <button className="bg-[red] text-white py-[0.3rem] sm:px-[3rem] px-[1rem] ml-[10px] rounded-[5px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
