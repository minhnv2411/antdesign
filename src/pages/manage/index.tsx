import type { NextPage } from 'next';
import type { ChangeEvent } from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../layouts/dashboard-layout';
import { gtm } from '../../libs/gtm';
import {Box, Tabs, Tab, Grid} from "@mui/material";


const tabs = [
    {
        label: 'Lớp tôi dạy',
        value: 'all'
    },
    {
        label: 'Lớp tôi trợ giảng',
        value: 'canceled'
    }
];

const Manage: NextPage = () => {

    const [currentTab, setCurrentTab] = useState<string>('all');
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
    const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
        setCurrentTab(value);
    };

  return (
    <>
      <Head>
        <title>Quản lý lớp học</title>
      </Head>
      <main>
        <Box sx={{px: 3}}>
            <Tabs
                onChange={handleTabsChange}
                indicatorColor="primary"
                scrollButtons="auto"
                textColor="primary"
                value={currentTab}
                sx={{ mt: 3,
                '& button': {
                    minWidth: '180px'
                }
                }}
                variant="scrollable"
            >
                {tabs.map((tab) => (
                    <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                    />
                ))}
            </Tabs>
        </Box>
      </main>
    </>
  );
};

Manage.getLayout = (page) => <DashboardLayout title="Quản lý lớp học" desc="Quản lý lớp học">{page}</DashboardLayout>;

export default Manage;
