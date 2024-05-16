"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import serviceDetail from "@/data/music_courses.json";
import Link from "next/link";

function Card() {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Hiring Me
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="mt-20 text-center">
        <Link
          href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Card;
