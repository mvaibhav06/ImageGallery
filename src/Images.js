import React from "react";

const Images = ({ results }) => {
  const renderedImages = results.map((result) => {
    return (
      <div id={result.id} className="card image" style={{ width: "18rem" }}>
        <img
          src={result.previewURL}
          className="card-img-top"
          alt={result.tags}
        />
        <div className="card-body">
          <h3 className="card-title title">{`Photos by ${result.user}`}</h3>
          <h5>Views: {result.views}</h5>
          <h5>Downloads: {result.downloads}</h5>
          <h5>Likes: {result.likes}</h5>
        </div>
      </div>
    );
  });

  return <div className="images">{renderedImages}</div>;
};

export default Images;
