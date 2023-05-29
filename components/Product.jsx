import ProductImage from "@/components/ProductImage";
import Link from "next/link";
const Product = ({ data }) => {
  return (
    <>
      <Link
        prefetch={false}
        href={`/product/${data.id}`}
        className=" h-96 flex flex-col p-5 rounded border transition ease-out  group hover:scale-150"
      >
        <div className=" relative max-h-72 flex-1 ">
          <ProductImage product={data} fill={true} />
        </div>

        <div className=" font-semibold flex  items-center justify-between mb-1  mt-4">
          <h1 className=" w-44 truncate">{data.title}</h1>
          <p>${data.price}</p>
        </div>
        <p className=" italic text-xs bg-violet-300 line-clamp-2 w-64 ">
          {data.description}
        </p>
      </Link>
    </>
  );
};

export default Product;
//prefetch={false } do not prefetch all data it only prefetch  mouse on hover
