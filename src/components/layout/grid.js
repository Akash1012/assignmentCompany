import React, { useState } from "react";
import styled from "styled-components";
import Like from "../beer-card/like-button";

const Image = styled.img`
  height: 100px;
  width: auto;
  display: block;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;
  margin-top: auto;
`;

const Grid = (props) => {
  const [active, setActive] = useState(false);

  const changeLike = () => {
    console.log("From Grid");
    setActive(!active);
  };

  return (
    <article className="card">
      <div className="card-content">
        <h2 style={{ fontWeight: "600" }}>{props.title}</h2>
        <p style={{ fontSize: "14px", fontWeight: "200" }}>
          {props.description}
        </p>
      </div>
      <br />
      <ImageWrapper>
        <Like liked={active} touch={changeLike} index={props.id} />
        <picture className="thumbnail">
          <Image src={props.image} alt="" />
        </picture>
      </ImageWrapper>
    </article>
  );
};

export default Grid;
