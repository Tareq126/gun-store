import React from "react";

const SingleGun = (props) => {
  const { action, bullet, category, img, name, price } = props.gun;
  const { countIncrease } = props;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-52" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-action">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="mt-4 ">
              <button
                onClick={() => countIncrease()}
                class="btn btn-sm btn-info mr-2"
              >
                Add to cart
              </button>
              <button class="btn btn-sm btn-success">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
