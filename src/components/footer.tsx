"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
          {// @ts-ignore
  }
            <Typography
              as="a"
              href="https://unte.moh.gov.mn/"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Улсын нэгдүгээр төв эмнэлэг
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Address : С.Зоригийн Гудамж 2 210648, SBD - 1 khoroo, Ulaanbaatar 14210
              <br />
              Tel : 80183000
              <br />
              Mail : Test@gmail.com
            </Typography>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <div className="flex flex-col gap-2">
            <Typography
              as="a"
              href="https://unte.moh.gov.mn/"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Conference зохион байгуулагч
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Address : С.Зоригийн Гудамж 2 210648, SBD - 1 khoroo, Ulaanbaatar 14210
              <br />
              Tel : 80183000
              <br />
              Mail : Test@gmail.com
            </Typography>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} All rights reserved.
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
