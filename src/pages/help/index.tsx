import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { DashboardLayout } from '../../layouts/dashboard-layout';
import { gtm } from '../../libs/gtm';

const Account: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>Thông tin tài khoản</title>
      </Head>
      <main></main>
    </>
  );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
