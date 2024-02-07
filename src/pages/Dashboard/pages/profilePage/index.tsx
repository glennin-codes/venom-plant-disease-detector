import React from "react";

function Profile() {
  console.log(Math.floor(Math.random() * 100) + 1);
  const url: string = `https://randomuser.me/api/portraits/men/${
    Math.floor(Math.random() * 100) + 1
  }.jpg`;

  return (
    <div className="px-8">
      <h2 className="text-center font-medium mb-16">Profile</h2>
      <div className="flex flex-row justify-center items-center gap-6 w-full pl-16 mb-16">
        <div className="">
          <img
            className="h-auto max-w-full rounded-full"
            src={url}
            alt="profile"
          />
        </div>
        <div className="flex flex-col  w-full ">
          <h1 className="text-2xl  text-greenMain font-bold">Glen Ayienda</h1>
          <h4 className="text-l font-bold">
            
            Location bla bla
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md2:grid-cols-2  gap-4 md2:px-16 w-full ">
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
      <div className="flex justify-center items-center mt-24">
         <button className="py-2 px-4 text-center bg-greenMain hover:bg-darkGreen text-white cursor-pointer outline-none rounded-md"> Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;
