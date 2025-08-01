"use client";
import React from 'react'
import Image from "next/image";

const RoundedImage = ({ src, alt, width, height }) => {
  const srcURL = process.env.NEXT_PUBLIC_BASE_URL + {src};
  return (
    <Image 
      className="rounded-[20px] shadow-md/40"
      src = {srcURL}
      alt = {alt}
      width = {width}
      height = {height}
    />
  )
}

export default RoundedImage