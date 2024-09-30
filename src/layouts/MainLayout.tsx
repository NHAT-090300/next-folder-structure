import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
// components
import MainFooter from '@layouts/MainFooter';
import MainHeader from '@layouts/MainHeader';

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title = '', description = '' }: IProps) {
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
