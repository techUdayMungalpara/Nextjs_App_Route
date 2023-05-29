import Product from "@/components/Product";
export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log("datas");

  return (
    <main className="min-h-screen mx-auto px-8 max-w-7xl xl:px-0 mt-48 ">
      <section className=" flex flex-col space-y-2 pb-44 ">
        <h1 className=" text-5xl font-bold text-center ">Deal of day</h1>
        {/* products */}
        <div className=" grid grid-cols-1  sm:grid-cols-2 gap-x-6  gap-y-10 lg:grid-cols-3 xl:grid-cols-4 ">
          {data.map((a) => {
            return (
              <>
                <Product key={a.id} data={a} />
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}
