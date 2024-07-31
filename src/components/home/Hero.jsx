import { Link } from "react-router-dom";
import { Images } from "../../assets/images";

const Hero = () => {
  return (
    <section className="text-white px-4 min-h-screen flex items-center justify-center max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-[60%_auto] items-center gap-x-[100px] gap-y-6 py-10">
        <div className="text-center lg:text-start">
          <h1 className="xl:text-[100px] lg:text-[80px] md:text-[60px] text-4xl font-extrabold leading-[1]">
            Shop Without Limits
          </h1>
          <p className="text-gray text-xl mt-6 mb-8 max-w-[480px] mx-auto lg:max-w-[680px] lg:ms-0 leading-normal">
            Experience seamless shopping with our ad-free platform. Say goodbye
            to interruptions and enjoy unlimited access to millions of items.
            Shop now and elevate your new experience!
          </p>
          <Link to="" className="bg-amaranth h-[52px] px-6 rounded-lg inline-flex items-center justify-center text-base min-w-[140px] hover:opacity-85 transition-all ease-in-out duration-300">
            Sign Up
          </Link>
        </div>
        <div>
          <img className="w-full max-w-[320px] mx-auto lg:max-w-full lg:ms-0" src={Images.hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
