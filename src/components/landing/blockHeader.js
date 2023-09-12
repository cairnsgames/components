import React from "react";

const BlockHeader = ({ title, body }) => (
  <div className="pricing-header px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
    <h1 className="display-4">{title}</h1>
    <p className="lead">{body}</p>
  </div>
);

export default BlockHeader;
