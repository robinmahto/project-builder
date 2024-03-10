import { montAlt } from "@/app/layout";
import { heroContent } from "@/utils";

const Hero = () => {
  return (
    <div className={`w-1/2 ${montAlt.className}`}>
      {heroContent?.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <div>
              <h2 className={`text-4xl font-bold font-montsAlt text-center text-grey-100`}>
                {item.title}
              </h2>
              <h3 className={`text-4xl font-bold font-montsAlt text-center text-grey-100`}>
                {item.subTitle}
              </h3>
            </div>
            <p className="text-center text-base font-light text-grey-100">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
