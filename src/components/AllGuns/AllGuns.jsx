import React, { useEffect, useState } from "react";
import "./AllGuns.css";
import SingleGun from "../SingleGun/SingleGun";

const AllGuns = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);
  console.log(guns);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="my-4">
        <h1 className="text-4xl text-center font-bold mt-4">
          Welcome To Guns Store!!!
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          consequuntur cupiditate pariatur ipsum eum sapiente voluptatibus
          explicabo qui ipsam, nesciunt labore atque commodi quae, facere
          doloremque voluptatum. Deleniti rem nihil sequi non est!
        </p>
      </div>

      {/* {guns.map((gun) => {
        return <h1 key={gun.id}>{gun.name}</h1>;
      })} */}

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guns.map((gun) => (
          <SingleGun key={gun.id} gun={gun} countIncrease={countIncrease} />
        ))}
      </div>
    </div>
  );
};

export default AllGuns;
