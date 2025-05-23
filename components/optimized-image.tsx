"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  lowQualitySrc?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  lowQualitySrc,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className || ""}`} style={props.style}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...props}
      />
      {!isLoaded && lowQualitySrc && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          className="absolute inset-0 blur-sm"
          fill
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  )
}
