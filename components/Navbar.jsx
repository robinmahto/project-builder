import { navlistContent } from "@/utils";

const Navbar = () => {
  return (
    <>
      {navlistContent?.map((navItem, index) => {
        return <li key={index} className=" hover:text-teal-700 cursor-pointer">{navItem}</li>;
      })}
    </>
  );
};

export default Navbar;
