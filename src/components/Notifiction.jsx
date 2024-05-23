import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notifiction = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg--9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} width={60} alt="image" className="rounded-xl" />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((itm, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={itm}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={itm}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notifiction;
