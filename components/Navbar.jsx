import { navlistContent } from "@/utils";

const Navbar = () => {
  return (
    <>
      {navlistContent?.map((navItem, index) => {
        return (
          <li
            key={index}
            className=" hover:text-purple-100 ease-in-out duration-300 cursor-pointer font-medium"
          >
            {navItem}
          </li>
        );
      })}
    </>
  );
};

export default Navbar;
