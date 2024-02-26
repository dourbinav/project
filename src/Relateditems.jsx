import React from "react";

export default function Relateditems() {
  return (
      <div className="container w-2/4 sm:w-1/3 aspect-square space-y-1  ">
        <div className="sm:p-6  flex justify-center  ">
          <img
            className="sm:w-2/3 p-2 my-1"
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
            alt="img"
          />
        </div>
        <div className="offers text-blue-400 rounded-md h-6 text-[12px] my-1 space-x-2 sm:space-x-4 ">
            <span className="bg-gray-100 p-1">20% off</span>
            <span className="bg-gray-100 p-1">Limited time</span>
        </div>
        <h2 className="text-center">WebBuilder</h2>
        <h4  className="invisible h-0 sm:h-12 sm:visible">Computer  Modern clasic with wix support</h4>
        <p className="sm:inline-block mx-1  ">$39.96</p> <span className="text-gray-200 mx-1 ">$49.99</span><span className="text-orange-400 mx-1">20% off</span>

        <button className="bg-blue-400 text-white py-1 my-2 rounded-md w-full">View</button>
      </div>
  );
}
