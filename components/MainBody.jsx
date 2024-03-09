import { mainContent } from "@/utils";
import Image from "next/image";

const MainBody = () => {
  return (
    <div className="mx-20 flex flex-col gap-5">
      {mainContent?.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className={`flex items-center ${
                item.id % 2 == 0
                  ? "flex-row-reverse justify-around"
                  : "justify-between px-10"
              }`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-base font-bold mb-2 bg-yellow p-2">
                  {item.headingTitle1}
                </h1>
                <h1 className="text-xl font-bold mb-2">{item.headingTitle2}</h1>
                <h1 className="text-sm mb-2">{item.headingTitle3}</h1>
                <div>
                  <button className="px-5 py-2 border-2 border-grey-100 transform hover:scale-110 transition-transform duration-300 hover:border-purple-100 hover:text-purple-100">
                    {item.buttonName}
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt={item.headingTitle1}
                  height={400}
                  width={400}
                />
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default MainBody;
