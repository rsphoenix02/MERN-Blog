import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-x-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              The
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Thinking Pen
              </span>
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">

          </div> */}
        </div>
        <Footer.Divider></Footer.Divider>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by='rsphoenix02' year={new Date().getFullYear()}></Footer.Copyright>
           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsFacebook}></Footer.Icon>
                <Footer.Icon href='#' icon={BsInstagram}></Footer.Icon>
                <Footer.Icon href='#' icon={BsTwitter}></Footer.Icon>
                <Footer.Icon href='https://www.github.com/rsphoenix02' icon={BsGithub}></Footer.Icon>
                <Footer.Icon href='#' icon={BsDribbble}></Footer.Icon>
           </div>
        </div>
      </div>
    </Footer>
  );
}
