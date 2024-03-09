import { buyerContent } from "@/utils";
const Buyer = () => {
  return (
    <div className="relative w-full h-96">
      {/* Image */}
      <div
        className="absolute inset-0 w-full h-full bg-contain bg-repeat bg-size-cover"
        style={{ backgroundImage: "url('/buyer/buyer-icons.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gray-600 opacity-70"></div>

      {/* Your content */}
      {/* Add your content here, for example: */}
      <div className="absolute inset-0 flex items-center justify-center">
        {buyerContent?.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-white text-5xl font-bold">
                {item.title}
              </h1>
              <h3 className="text-white text-2xl font-bold">{item.subTitle}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buyer;
