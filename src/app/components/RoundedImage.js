"use client";
import React from 'react'
import Image from "next/image";

const RoundedImage = ({ src, alt, width, height }) => {
  return (
    <Image 
      className="rounded-[20px] shadow-md/40"
      src = {src}
      alt = {alt}
      width = {width}
      height = {height}
    />
  )
}

export default RoundedImage