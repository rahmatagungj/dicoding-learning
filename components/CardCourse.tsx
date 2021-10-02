import React from "react";

const CardCourse = ({ item }: any) => {
  
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={item.logo} alt={item.name} width="100" height="100"/>
        </div>
        <div className="card-header">
            <h3>{item.name}</h3>
        </div>
        <div className="card-content">
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
