import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="mt-12 px-[145px]">
      <h3 className="text-4xl font-bold text-center">
        Popular Winter Care Services
      </h3>

      <div className="mt-10 grid grid-cols-3 ">
        {services.map((service) => (
          <div className="card bg-base-100 w-96 shadow-sm mt-10" key={service.serviceId} >
            <figure>
              <img
                src={service.image}
                alt=""
                className="w-full h-[300px] object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <div className="flex justify-between">
                <p>Rating: {service.rating}</p>
                <p>Price: {service.price}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
