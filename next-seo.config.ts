import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | MetaDAP Mall',
  defaultTitle: 'MetaDAP Mall',
  description:
    'MetaDAP có sứ mệnh #tiên phong để xây dựng một nền tảng số hóa Tài sản và hỗ trợ đa kết nối để mở ra cánh cửa phục vụ cho nền Kinh tế số.',
  canonical: 'https://mall.metadap.io',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@mall.metadap.io',
    site: '@mall.metadap.io',
  },
  openGraph: {
    url: 'https://mall.metadap.io',
    title: 'MetaDAP - Nền tảng Tài sản số đầu tiên tại Việt Nam.',
    description:
      'MetaDAP có sứ mệnh #tiên phong để xây dựng một nền tảng số hóa Tài sản và hỗ trợ đa kết nối để mở ra cánh cửa phục vụ cho nền Kinh tế số.',
    images: [
      {
        url: 'https://res.cloudinary.com/dfbbhslan/image/upload/v1725678255/Congainer_mygtbt.jpg',
      },
    ],
  },
};
