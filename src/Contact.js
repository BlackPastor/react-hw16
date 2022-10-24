import React from "react";
import Male from "./images/man.svg"
import Female from "./images/woman.svg"

const List = ({ data }) => {
  data.map((e) => {
    if (e.gender) {
      if (e.gender === "male") {
        e.gender = <img src={Male}/>
      } if (e.gender === "female") {
        e.gender = <img src={Female}/>
      } 
    } 
  });
  return (
    <ul>
      <div className="section">
        {data.map((item) => (
          <li key={item.firstName + item.lastName}>
            <p className="name">
              {item.firstName} {item.lastName}
            </p>
            <p className="info">
             {item.gender} {item.phone} 
            </p>
            <hr className="hr"></hr>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default List;
