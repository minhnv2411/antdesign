import { Box, IconButton, Popover, Tooltip, Typography } from '@mui/material';
import type { FC } from 'react';

interface NotificationsPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  onUpdateUnread?: (value: number) => void;
  open?: boolean;
}

const getNotificationContent = (notification: any): JSX.Element => {
  return <Box></Box>;
};

export const NotificationsPopover: FC<NotificationsPopoverProps> = (props) => {
  const { anchorEl, onClose, onUpdateUnread, open, ...other } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 380 } }}
      transitionDuration={0}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
        }}
      >
        <Typography color="inherit" variant="h6">
          Notifications
        </Typography>
        <Tooltip title="Mark all as read">
          <IconButton size="small" sx={{ color: 'inherit' }}></IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2">There are no notifications</Typography>
      </Box>
    </Popover>
  );
};
