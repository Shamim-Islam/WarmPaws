import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Small Animal Medicine",
    experience: 8,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Surgery & Orthopedics",
    experience: 12,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    specialization: "Exotic Animals & Avian Medicine",
    experience: 10,
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
  },
];

const MeetOurVets = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="py-12 max-w-[1440px] mx-auto">
        <div className="text-center pt-10">
          <h3 className="text-4xl font-bold">Meet Our Expert Vets</h3>
          <div className="border-3 border-[#ff3600] w-[100px] h-[5px] mx-auto mt-6"></div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12 p-5">
          {vets.map((vet) => (
            <div
              className="card bg-base-100 w-full shadow-sm mt-10"
              key={vet?.serviceId}
            >
              <figure>
                <img
                  src={vet?.image}
                  alt=""
                  className="w-full md:h-[300px] h-auto object-cover"
                />
              </figure>
              <div className="p-7">
                <h2 className="text-[24px] mb-2 text-[#ff3600]">{vet?.name}</h2>
                <p className="text-[20px] font-medium">{vet?.specialization}</p>
                <p className="text-[16px] mt-2">{vet?.experience} Years EXP.</p>

                <br />
                <div className="card-actions justify-center">
                  <button className="btn bg-[#ff3600] rounded-2xl text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600] w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurVets;
