import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ url }) => {
  // Transform URL into breadcrumb format
  const breadcrumb = url
    .replace("http://localhost:3000/", "")
    .split("/")
    .map((item, index, arr) => (
      <span key={index}>
        {item.replace("-", " ")} {/* Replace hyphens with spaces */}
        {index < arr.length - 1 && " > "} {/* Add ">" except for the last item */}
      </span>
    ));

  return (
    <div className="breadcrumb-container">
      <p className="breadcrumb-text">{breadcrumb}</p>
    </div>
  );
};

export default Breadcrumb;
