import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { MainLayout } from '../../layouts/main-layout';
import { gtm } from '../../libs/gtm';

const Home: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>Đăng ký làm giáo viên </title>
      </Head>
      <main></main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
