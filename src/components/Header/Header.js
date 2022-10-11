import React from 'react';

const Header = () => {
  return (
    <div>
      <div id="item1" className="carousel-item w-full">
        <img src="../../images/ass.png" className="w-64 h-64" />
      </div>
      <div className="mt-14">
        <h1 className="text-6xl text-orange-400 mb-5">
          Learning Courses Online
        </h1>
        <p className="w-9/12 m-auto">
          Many of us have special memories of the books that have inspired us,
          and have learned the profound effect that reading the right book can
          have at the right moment.Books have the power to transport us to new
          worlds and different times, but they can also take us back to the
          important moments in our own lives.
        </p>
        <button className="bg-orange-400 p-2 rounded text-white mt-5">
          START A COURSE
        </button>
      </div>
    </div>
  );
};

export default Header;