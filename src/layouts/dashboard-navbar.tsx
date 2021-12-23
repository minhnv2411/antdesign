import type { AppBarProps } from '@mui/material';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    ButtonBase, Divider,
    IconButton,
    Toolbar,
    Tooltip, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { Bell as BellIcon } from '../icons/bell';
import { Menu as MenuIcon } from '../icons/menu';
import { Search as SearchIcon } from '../icons/search';
import { Help as HelpIcon } from '../icons/help';
import { AccountPopover } from './account-popover';
import { NotificationsPopover } from './notifications-popover';
import { ContentSearchDialog } from "../components/dashboard/content-search-dialog";
import PropTypes from "prop-types";


interface DashboardNavbarProps {
    title:String,
    desc: String
    onOpenSidebar?: () => void;
}

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: 'none',
      }
    : {
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
      }),
}));


const ContentSearchButton = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleOpenSearchDialog = (): void => {
        setOpenDialog(true);
    };

    const handleCloseSearchDialog = (): void => {
        setOpenDialog(false);
    };

    return (
        <>
            <Tooltip title="Search">
                <IconButton
                    onClick={handleOpenSearchDialog}
                    sx={{ ml: 1 }}
                >
                    <SearchIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <ContentSearchDialog
                onClose={handleCloseSearchDialog}
                open={openDialog}
            />
        </>
    );
};


const NotificationsButton = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [unread, setUnread] = useState<number>(0);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  // Unread notifications should come from a context and be shared with both this component and
  // notifications popover. To simplify the demo, we get it from the popover

  const handleOpenPopover = (): void => {
    setOpenPopover(true);
  };

  const handleClosePopover = (): void => {
    setOpenPopover(false);
  };

  const handleUpdateUnread = (value: number): void => {
    setUnread(value);
  };

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton ref={anchorRef} sx={{
            ml: 2,
            mr: 1,
            '& .MuiSvgIcon-root': {
                top: '3px',
                position: 'relative',
                left: '4px'
            },
        }} onClick={handleOpenPopover}>
          <Badge color="error" badgeContent={unread}>
            <BellIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        onUpdateUnread={handleUpdateUnread}
        open={openPopover}
      />
    </>
  );
};

const AccountButton = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/mock/avatar.png',
    name: 'Anika Visser',
  };

  const handleOpenPopover = (): void => {
    setOpenPopover(true);
  };

  const handleClosePopover = (): void => {
    setOpenPopover(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 2,
        }}
      >
          <Typography color="#1F2738" sx={{mr: 2}}>
              Trần Hà
          </Typography>
        <Avatar
          sx={{
            height: 54,
            width: 54,
              border: '3px solid #DFE0EB',
              padding: '3px',
              borderRadius: '50%',
              background: 'white',
              '& img':{
                  borderRadius: '50%'
              }
          }}
          src={user.avatar}
        >

         <img src="/images/user01.webp"/>
        </Avatar>
      </Box>
      <AccountPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
      />
    </>
  );
};

export const DashboardNavbar: FC<DashboardNavbarProps> = (props) => {
  const { title, desc, onOpenSidebar, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
            height: '80px',
          width: {
            lg: 'calc(100% - 280px)',
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            height: 80,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} >
             <Typography variant="h5" color="#1F2738" sx={{display: 'flex', alignItems: 'center'}}>
                 {title ? title + ' ': ''}
                 {desc ? (<Tooltip  title={desc}><HelpIcon sx={{ml: 1}}/>
                 </Tooltip>) : '' }
             </Typography>

          </Box>
          <ContentSearchButton />
          <NotificationsButton />
            <Divider
                sx={{
                    width: '32px',
                    borderColor: '#DFE0EB',
                    transform: 'rotate(90deg)'
                }}
            />
          <AccountButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};
