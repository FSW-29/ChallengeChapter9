import React from "react";

function GameListByCategoryComponent(props) {
  return (
    <>
      <h1>{props.propsCategory}</h1>
      <div className="row align-items-start text-center pb-3">
        {props.propsHandleGame().map((el, idx) => (
          <div className="col-3" key={idx}>
            <button
              className="rounded-3"
              onClick={(e) => props.propsHandleDetail(e)}
              value={el.id}
              style={{
                background: `url(${el.image})`,
                backgroundSize: "100% 200px",
                backgroundRepeat: "none",
                width: "100%",
                height: "200px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GameListByCategoryComponent;
