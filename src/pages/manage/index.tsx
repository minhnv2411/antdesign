import type { NextPage } from 'next';
import type { ChangeEvent } from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../layouts/dashboard-layout';
import { gtm } from '../../libs/gtm';
import NextLink from "next/link";
import {Box, Tabs, Tab, Divider, Button} from "@mui/material";
import {MyClass} from "../../components/manage/myClass";
import {MySupport} from "../../components/manage/mySupport";
import {Plus as PlusIcon} from "../../icons/plus";

const tabs = [
    {
        label: 'Lớp tôi dạy',
        value: 'myClass'
    },
    {
        label: 'Lớp tôi trợ giảng',
        value: 'mySupport'
    }
];

const Manage: NextPage = () => {
    
    const [currentTab, setCurrentTab] = useState<string>('myClass');
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

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
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
                <NextLink
                    href="/manage/new"
                    passHref
                >
                    <Button
                        startIcon={<PlusIcon fontSize="small" />}
                        sx={{ '& .MuiSvgIcon-root': {
                            fontSize: '28px',
                                position: 'relative',
                                top: '6px',
                                left: '13px'
                            } }}
                        variant="contained"
                    >
                        Tạo lớp mới
                    </Button>
                </NextLink>
            </Box>

            <Divider sx={{ mb: 3 }} />
            {currentTab === 'myClass' && <MyClass />}
            {currentTab === 'mySupport' && <MySupport />}
        </Box>
      </main>
    </>
  );
};

Manage.getLayout = (page) => <DashboardLayout title="Quản lý lớp học" desc="Quản lý lớp học">{page}</DashboardLayout>;

export default Manage;
