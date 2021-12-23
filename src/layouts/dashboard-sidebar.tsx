import { Box, Divider, Drawer, Theme, Typography, useMediaQuery } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import { ReactNode, useMemo } from 'react';
import { Scrollbar } from '../components/scrollbar';
import { DashboardSidebarSection } from './dashboard-sidebar-section';
interface DashboardSidebarProps {
  onClose: () => void;
  open: boolean;
}
import {User as UserIcon} from '../icons/sidebar/user';
import {Chat as ChatIcon} from '../icons/sidebar/chat';
import {Payment as PaymentIcon} from '../icons/sidebar/payment';
import {Test as TestIcon} from '../icons/sidebar/test';
import {Learn as LearnIcon} from '../icons/sidebar/learn';
import {Class as ClassIcon} from '../icons/sidebar/class';
import {Trop as TropIcon} from '../icons/sidebar/trop';
import {Marketing as MarketingIcon} from '../icons/sidebar/marketing';
import {Turnover as TurnoverIcon} from '../icons/sidebar/turnover';
import {Support as SupportIcon} from '../icons/sidebar/support';
import {Logout as LogoutIcon} from '../icons/sidebar/logout';
interface Item {
  title: string;
  children?: Item[];
  chip?: ReactNode;
  icon?: ReactNode;
  path?: string;
}

interface Section {
  items: Item[];
}

const getSections = (): Section[] => [
  {
    items: [
      {
        icon: <UserIcon/>,
        title: 'Thông tin tài khoản',
        path: '/dashboard',
      },
      {
        icon: <ChatIcon/>,
        title: 'Tin nhắn',
        path: '/payment',
      },
      {
        icon: <PaymentIcon/>,
        title: 'Thông tin thanh toán',
        path: '/tests',
      },
      {
        icon: <TestIcon/>,
        title: 'Đánh giá năng lực',
        path: '/tests',
      },
    ],
  },
  {
    items: [
      {
        icon: <LearnIcon/>,
        title: 'Dạy học',
        path: '/teaching',
      },
      {
        icon: <ClassIcon/>,
        title: 'Quản lý lớp học',
        path: '/manage',
      },
      {
        icon: <TropIcon/>,
        title: 'Danh hiệu giáo viên',
        path: '/achievement',
      },
    ],
  },
  {
    items: [
      {
        icon: <MarketingIcon/>,
        title: 'Thu hút học viên',
        path: '/marketting',
      },
      {
        icon: <TurnoverIcon/>,
        title: 'Doanh thu',
        path: '/income',
      },
    ],
  },
  {
    items: [
      {
        icon: <SupportIcon/>,
        title: 'Trung tâm trợ giúp',
        path: '/help',
      },
      {
        icon: <LogoutIcon/>,
        title: 'Thoát',
        path: '/help',
      },
    ],
  },
];

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });
  const sections = useMemo(() => getSections(), []);

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  const content = (
    <>
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ p: 3 }}>
            <NextLink href="/dashboard" passHref={false}>
              <Box component="a" sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/images/logoAdmin.webp" alt=""/>
                <Typography variant="h5" color="#A4A6B3" sx={{ px: 2 }}>
                  Ant Learning
                </Typography>
              </Box>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section, idx) => (
              <DashboardSidebarSection
                key={idx}
                title=""
                path={router.asPath}
                sx={{
                  pt: 0,
                  borderTop: '1px solid rgba(223,224,235,0.06)',
                  '& + &': {
                    pt: 1,
                  },
                  '&:first-child': {
                   border: 'none'
                  },
                }}
                {...section}
              />
            ))}
          </Box>
        </Box>
      </Scrollbar>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.sidebar',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme) => (theme.palette.mode === 'dark' ? 1 : 0),
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
