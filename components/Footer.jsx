import { footerContent } from "@/utils";
import Image from "next/image";

footerContent;
const Footer = () => {
  return (
    <div className="bg-black p-8">
      {footerContent?.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-between">
            <h3 className="text-white font-bold text-sm">{item.title}</h3>
            <div>
              <Image
                src='/white-logo.png'
                alt="footerLogo"
                width={100}
                height={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
