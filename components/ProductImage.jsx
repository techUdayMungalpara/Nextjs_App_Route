"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product, fill }) => {
  const [loading, setLoading] = useState(true);

  console.log(product);
  console.log(fill);

  const { image } = product;
  return (
    <>
      {fill ? (
        <Image
          onLoadingComplete={() => setLoading(false)}
          alt=" as og fhe"
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          src={product.image}
          fill
        />
      ) : (
        <Image
          src={image}
          width={400}
          height={1000}
          onLoadingComplete={() => setLoading(false)}
          alt=" as"
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
        />
      )}
    </>
  );
};

export default ProductImage;
