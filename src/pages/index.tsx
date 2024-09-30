import PageLayout from '@layouts/MainLayout';
import { useEffect } from 'react';
import { bannerApi } from '@apis/index';

function HomePage() {
  useEffect(() => {
    const fetchBanners = async () => {
      const a = await bannerApi.getBanners();
      console.log(a);
    };
    fetchBanners();
  }, []);

  return <div />;
}

HomePage.getLayout = function getLayout(page) {
  return <PageLayout title="Home">{page}</PageLayout>;
};

export default HomePage;
