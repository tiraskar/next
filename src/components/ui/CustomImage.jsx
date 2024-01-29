
'use client'

import Image from 'next/image'
import React from 'react'

const CustomImage = ({ src, alt, className }) => {
   return <Image
      src={src}
      width={500}
      height={500}
      alt={alt}
      quality={40}
      className={`${className}`}
   />

}

export default CustomImage