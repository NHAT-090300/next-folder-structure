import React, { CSSProperties } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
  onClick?: () => void;
}

export function AppImage(props: Props) {
  const {
    src = '/img/project/image_card_null.svg',
    className = '',
    style = {},
    alt = 'image',
    onClick = () => {},
  } = props;

  return (
    <div onClick={onClick} className={`relative ${className}`} style={style}>
      <Image fill src={src} alt={alt} loading="lazy" quality="100" />
    </div>
  );
}
