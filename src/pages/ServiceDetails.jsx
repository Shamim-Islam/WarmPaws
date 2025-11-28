import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);

  return (
    <div className="flex md:flex-row flex-col items-center px-[145px] gap-5 justify-center my-[150px]">
      <div>
        <img
          className="border-2 border-[#ff3600] rounded-4xl"
          src={findResult?.image}
          alt=""
        />
      </div>
      <div className="text-lg">
        <p className="text-3xl font-bold text-[#ff3600] py-5">
          {findResult?.serviceName}
        </p>
        <p>
          <span className="font-bold">ProviderName: </span>
          {findResult?.providerName}
        </p>
        <p>
          <span className="font-bold">providerEmail: </span>
          {findResult?.providerEmail}
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {findResult?.description}
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {findResult?.category}
        </p>
        <p>
          <span className="font-bold">Price: </span>
          {findResult?.price}
        </p>
        <p>
          <span className="font-bold">Rating: </span>
          {findResult?.rating}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
