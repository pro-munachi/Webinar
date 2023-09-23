import React from "react";
import ReactPlayer from "react-player";

export const Header = ({ submitted }) => {
  return (
    <div className="header">
      {submitted ? (
        <ReactPlayer
          width="100%"
          url="https://youtu.be/ATFXhBOGa1s?si=zAoJ8N30TyElh5R-"
        />
      ) : (
        <img className="header-img" src="/images/oluchi-madu.jpg" />
      )}
    </div>
  );
};
