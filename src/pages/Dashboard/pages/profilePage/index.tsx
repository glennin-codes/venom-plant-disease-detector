import React from "react";

function Profile() {
  console.log(Math.floor(Math.random() * 100) + 1);
  const url: string = `https://randomuser.me/api/portraits/men/${
    Math.floor(Math.random() * 100) + 1
  }.jpg`;

  return (
    <div>
      <h2 className="text-center font-medium mb-16">Profile</h2>
      <div className="flex flex-row gap-4 md:ml-24 w-full">
        <div className="">
          <img
            className="rounded-full w-[100px] h-[100px] bg-gray-300 "
            src={url}
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <h1 className="text-2xl font-bold">Glen</h1>
          <h4 className="text-xl font-bold">
            <span className="text-gray-400">location:</span>
            Location bla bla
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-16 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-l font-medium">Name</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value="Glen ayienda"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-l font-medium">Email</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500 "
            value="Glen ayienda"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <h4 className="text-l font-medium">Location</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value="Glen ayienda"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <h4 className="text-l font-medium">Phone-Number</h4>
          <input
            className="py-2 text-center rounded-md border border-gray-300 focus:border-blue-500"
            value="Glen ayienda"
            type="text"
            name="name"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
