import { HOTTEST_SALES } from "../../data/mockData";

const HotSales = () => {
  return (
    <section className="px-4 text-white py-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-start max-w-[800px] mx-auto text-center">
          <h2 className="lg:text-[60px] md:text-[40px] text-2xl leading-[1.1] font-extrabold mb-8">
            The Hottest Sales Of The Week: Only On Glide
          </h2>
          <p className="text-gray max-w-[600px] mx-auto">
            Elevate Your Everyday with Exceptional Finds – Enjoy Top Brands,
            Great Discounts, and a Shopping Experience Like No Other!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-16">
          {HOTTEST_SALES?.map((item, index) => (
            <div
              className="border-[1px] border-white/15 border-solid rounded-xl p-6 flex flex-col justify-between"
              key={index}
            >
              <img className="w-full" src={item.image} alt="" />
              <div>
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                <div>{item.noOfSales}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotSales;
