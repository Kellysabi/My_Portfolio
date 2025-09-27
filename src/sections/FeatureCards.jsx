import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => (
      <div className="w-full px-4 md:px-8 lg:px-16 bg-black py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {abilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="border border-gray-700 rounded-xl p-8 flex flex-col gap-4 bg-gray-900"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-800">
                <img
                  src={imgPath}
                  alt={title}
                  className="w-16 h-16"
                  loading="lazy"
                  onError={(e) => {
                    e.target.alt = 'Icon unavailable';
                    e.target.style.opacity = '0.5';
                  }}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
              <p className="text-gray-300 text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    );


    export default FeatureCards;
   