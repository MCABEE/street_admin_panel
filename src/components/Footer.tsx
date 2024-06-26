import mcabeeLogo from "@/assets/mcabee_logo.png";
import { Link } from "react-router-dom";

// footer component
const Footer = () => (
  <footer className="bg-white">
    <div className="max-w-screen-xl mx-auto sm:px-5 px-3 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
        <p>English</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <p className="text-secondary text-sm">
        All Rights Reserved to Street - 2024
      </p>

      <Link target="_blank" to="https://www.mcabee.in">
        <img src={mcabeeLogo} className="h-8 w-auto" alt="mcabee" />
      </Link>
    </div>
  </footer>
);

export default Footer;
