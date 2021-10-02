import React from "react";

const CardCourse = ({ item }: any) => {
    console.log(item);
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card my-5 rounded">
        <img
          src={item.logo}
          alt={item.name}
          className="card-image-top image-fluid"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text my-2">{item.description}</p>
          <a href={item.link} title={item.name} className="btn btn-secondary rounded">
            Lihat
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
