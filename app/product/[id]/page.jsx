import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";

async function ProductDetails({ params }) {
  try {
    console.log(params.id);
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();

    return (
      <div className=" mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-8 px-5 mt-48 pb-10 ">
        <ProductImage product={data} />
        <div className=" divide-y ">
          <div className=" space-y-2 pb-8 ">
            <h1 className=" text-2xl md:text-4xl font-bold ">{data.title}</h1>
            <h2 className=" text-gray-500 font-bold text-xl md:text-3xl ">
              ${data.price}
            </h2>
          </div>
          <div>
            <p className=" text-xs md:text-sm ">{data.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductDetails;
