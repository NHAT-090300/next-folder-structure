import React from 'react';
import Image from 'next/legacy/image';
import { twMerge } from 'tailwind-merge';

export function BlurImage({
  src = '',
  defaultImage = true,
  className = '',
  ...props
}: {
  src: string;
  defaultImage?: boolean;
  className?: string;
  objectFit?: string;
  objectPosition?: string;
  alt?: string;
  layout?: string;
}) {
  const url = defaultImage ? src || '/img/project/image_card_null.svg' : src;
  return (
    <div className={twMerge('relative w-full overflow-hidden h-full bg-gray_100', className)}>
      {url && (
        <Image
          alt=""
          src={url}
          {...props}
          objectPosition="center"
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={src || '/img/project/image_card_null.svg'}
          sizes="100vw"
          quality={100}
          loading="lazy"
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
