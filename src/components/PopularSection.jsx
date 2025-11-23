import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-12 max-w-[1440px] mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-bold">Popular Winter Care Services</h3>
        <div className="border-3 border-[#ff3600] w-[100px] h-[5px] mx-auto mt-6"></div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12 p-5">
        {services.slice(0, 6).map((service) => (
          <div
            className="card bg-base-100 w-full shadow-sm mt-10"
            key={service?.serviceId}
          >
            <figure>
              <img
                src={service?.image}
                alt=""
                className="w-full md:h-[300px] h-auto object-cover"
              />
            </figure>
            <div className="p-7 bg-[#f8f8f8]">
              <h2 className="text-[22px] mb-4 text-center">
                {service?.serviceName}
              </h2>
              <div className="flex justify-between">
                <p>
                  <span className="font-medium">Rating:</span> {service?.rating}
                </p>
                <p>
                  <span className="font-medium">Price:</span> {service?.price}
                </p>
              </div>
              <br />
              <div className="card-actions justify-center">
                <button className="btn bg-[#ff3600] rounded-2xl text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
