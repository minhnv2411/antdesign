import { styled } from '@mui/material/styles';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Footer } from './footer';
import { MainNavbar } from './main-navbar';
import { MainSidebar } from './main-sidebar';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 0,
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <MainLayoutRoot>
      <MainNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <MainSidebar onClose={(): void => setIsSidebarOpen(false)} open={isSidebarOpen} />
      {children}
      <Footer />
    </MainLayoutRoot>
  );
};
