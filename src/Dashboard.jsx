import React from "react";
import Article1 from "./Article1";
import Relateditems from "./Relateditems";

export default function Dashboard() {
  const object=[{
    image: 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__',
    text:"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlight:" [What You Get]: [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    ratings:9.6,
    Comment:"Exceptional"
  },{image: 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__',
  text:"SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
  highlight:"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
  ratings:9.5,
  Comment:"Excellent"
  },{
    image: 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__',
  text:"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
  highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
  ratings:9.3,
  Comment:"Exceptional"
  },{
    image: 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__',
  text:"CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides",
  highlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
  ratings:9.3,
  Comment:"Exceptional"
  }
]
  return (
    <>
    <div className="Dashboard  my-4 h-full flex justify-center   m-auto  ">
      <div className="w-full sm:max-w-screen-lg text-left ">
        <h1 className="heading-1 text-[22px] sm:text-[48px]">
          Best website builders in the US
        </h1>
        <hr className=" h-1"></hr>
        <div className="sub-details flex justify-between  sm:text-[14px] px-2 ">
          <div className="flex items-center sm:gap-x-3 gap-x-1 text-[9px] sm:text-[14px] sm:px-2">
          <span>last updated</span>
          <span>Feburary 20,2022</span>
          <span>Advertising disclosure</span>
          </div>
          <select className="text-[12px] sm:text-xl ">
            <option>Top relevent</option>
          </select>
        </div>
        <hr className=" h-1"></hr>
        <div name="sub-navbar" className="  my-1 p-2">
          <ul className="flex sm:px-4 px-1 justify-around gap-1  text-[10px]">
            <li>Tools</li>
            <li>Aws Builder</li>
            <li>Start Build</li>
            <li>Build supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
          </ul>
        </div>
        <div classname="path  my-2 sm:text-[10px] w-full text-gray-100">
          <span className="text-[10px]">Home></span>
          <span className="text-[10px]"> Hoisting for all ></span>
          <span className="text-[10px]"> Hoisting></span>
          <span className="text-[10px]"> Hoisting 6 ></span>
          <span className="text-[10px]">Hoisting 5</span>
        </div>
        <div className="my-2 space-y-2">
      {object.map((ob, index) => (
  <div key={ob.ratings} className="my-2 space-y-2">
    {index < 2 && (
      <div className={`absolute z-10 bg-[#FF7724] p-1 rounded-sm flex mix-blend-multiple gap-1`}>
        <img className="h-5" alt="" src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900241/109972098-silhouette-of-champions-cup-simple-icon-white-icon-with-shadow-on-transparent-background.jpg" />
        {index === 0 ? "Best Choice" : "Best Value"}
      </div>
    )}
    <Article1
      image={ob.image}
      text={ob.text}
      highlight={ob.highlight}
      rating={ob.ratings}
      Comment={ob.Comment}
    />
  </div>
))}
   
        </div>
        <h1 className="my-2 p-2 text-[20px] sm:text-[30px]">Related items you may Like</h1>
        <div className="flex p-4 sm:p-2 gap-6 overflow-x:auto ">
         
          <Relateditems />
          <Relateditems />
          <Relateditems />
          
        </div>
        <div className="my-2 flex justify-between items-center h-20 p-10 ">
          <h2 className="sm:text-[24px] w-1/2">Sign up and get exclusive special deals</h2>
          <button className="px-4 py-2 rounded-md text-white bg-blue-400"> Signup</button>
        </div>
      </div>
      
    </div>
    </>
  );
}
