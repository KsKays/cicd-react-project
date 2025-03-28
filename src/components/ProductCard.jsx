import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white shadow-lg flex flex-col h-full">
      {/* รูปสินค้า */}
      <figure className="relative">
        <img
          src={product.images}
          alt={product.productName}
          className="w-full h-60 object-cover"
        />

        {/* Badge "โฆษณา" */}
        <div className="absolute top-2 left-2">
          <span className="badge badge-warning gap-2 px-3 py-1 text-xs font-semibold">
            🔥 โฆษณา
          </span>
        </div>
      </figure>

      {/* รายละเอียดสินค้า */}
      <div className="card-body p-4 flex flex-col grow">
        {/* ชื่อสินค้า */}
        <h3 className="text-sm font-semibold min-h-[48px] line-clamp-2">
          {product.productName}
        </h3>

        {/* ราคา */}
        <p className="text-lg font-bold text-gray-900 mt-auto">
          ฿ {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
