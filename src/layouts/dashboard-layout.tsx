import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import PropTypes from "prop-types";

interface DashboardLayoutProps {
  children?: ReactNode;
    title?:String,
    desc?: String,
}

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 80,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children, title, desc } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar title={title} desc={desc} onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <DashboardSidebar onClose={(): void => setIsSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};


DashboardLayout.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};
