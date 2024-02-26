import React from "react";
export default function Article1(props) {
  return (
    <div className="Article1 relative ">
      
      <div className="flex items-center p-6 flex-col sm:flex-row ">
        <div className=" p-2 sm:w-1/3">
        <img
          className="aspect-square p-4 "
          src={props.image}
        alt="img"
        />
        </div>
        <p className="sm:w-2/3">
          {props.text}
          <br />
          Main highlight:
          <br />
          {props.highlight}
          <br />
          <a className="invisible sm:visible text-blue-400" href="blank">Show more</a>
        </p>
        <div className=" sm:aspect-square sm:w-1/3 sm:flex  sm:justify-between flex-col">
          <div className="invisible  sm:visible bg-[#F3F9FF] text-center h-0 sm:h-32 sm:w-32 flex-col mx-auto ">
            <div className="text-[28px] ">{props.rating}</div>
            <div className="my-1">{props.Comment}</div>
            <div className="p-2 mix-blend-multiple">
              <img src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg" alt=""/></div>
          </div>
          <button className="bg-blue-400 text-white sm:py-2 w-full p-2  rounded-md">View</button>
        </div>
      </div>
    </div>
  );
}
