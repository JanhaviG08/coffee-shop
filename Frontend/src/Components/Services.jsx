import React from "react";
import Img2 from "../assets/website/coffee2.png"

const ServicesData = [
    {
        id:1,
        img: Img2,
        name: "Espresso",
        description: "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground beans under high pressure. Known for its rich flavor and creamy crema, it's the base for many popular coffee drinks.The stronge and rich Coffee.",
        aosDelay: "100",
    },
    {
        id:2,
        img: Img2,
        name: "Americano",
        description: "Americano is a coffee made by diluting a shot of espresso with hot water. It has a similar strength to drip coffee but with the rich flavor of espresso.",
        aosDelay: "300",
    },
    {
        id:1,
        img: Img2,
        name: "Cappuccino",
        description: "Cappuccino is an espresso-based drink made with equal parts of espresso, steamed milk, and milk foam. It's known for its creamy texture and balanced flavor, often topped with a sprinkle of cocoa or cinnamon.",
        aosDelay: "500",
    },
]

const Services = () => {
    return(
    <>
        <span id="services"></span>
        <div className="py-10 ">
            <div className="container">
                {/* {heading section} */}
                <div data-aos="fade-up" className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-grey-800">
                        Best Coffee For You
                    </h1>
                </div>
                {/* {Services card section} */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md-grid-cols-4 gap-14 md:gap-5 place-items-center ">
                    {ServicesData.map((data,index) => {
                        return(
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                              key={index} 
                              className="rounded-3xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                                {/* {img section} */}
                                <div className="h-[122px]">
                                    <img src={data.img} alt="" className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"/>
                                </div>

                                {/* {text content} */}
                                 <div className="p-5 text-center ">
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    <p className="text-grey-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                                 </div>
                            </div>
                        );
                    })}
                <div>
                </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default Services;