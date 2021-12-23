import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { MainLayout } from '../layouts/main-layout';
import { gtm } from '../libs/gtm';
import {BannerHomePage} from "../components/home/banner";
import {Reason} from "../components/home/reason";
import {BlockAds} from "../components/home/blockAds";
import {StepRegister} from "../components/home/stepRegister";
import {DownloadApp} from "../components/home/downloadApp";

const Home: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>Ant Learning</title>
        <meta name="description" content="Ant Learning"></meta>
      </Head>
      <main>
        <BannerHomePage  />
        <Reason />
        <BlockAds />
        <StepRegister />
        <DownloadApp />
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
