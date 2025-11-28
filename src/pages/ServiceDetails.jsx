import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted successfully!");
  };

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const findResult = services.find((service) => service.serviceId == id);

  return (
    <div className="grid my-[150px]">
      <div className="flex md:flex-row flex-col items-center px-[145px] gap-5 justify-center ">
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
          <button
            className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]"
            onClick={handleOpenForm}
          >
            Book Service
          </button>
        </div>
      </div>
      {isOpen && (
        <form
          className="grid w-[400px] gap-3 mt-8 border border-[#ff3600] rounded-xl p-6 mx-auto"
          onSubmit={handleFormSubmit}
        >
          <label className="label text-[16px] font-bold">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="Your Name"
          />
          <label className="label text-[16px] font-bold">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Your Email"
          />

          <button className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
            Book
          </button>
        </form>
      )}
    </div>
  );
};

export default ServiceDetails;
