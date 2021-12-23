import type { ListItemProps } from '@mui/material';
import { Box, Button, Collapse, ListItem } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { ChevronDown as ChevronDownIcon } from '../icons/chevron-down';
import { ChevronRight as ChevronRightIcon } from '../icons/chevron-right';

interface DashboardSidebarItemProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  chip?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

export const DashboardSidebarItem: FC<DashboardSidebarItemProps> = (props) => {
  const {
    active,
    children,
    chip,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title,
    ...other
  } = props;
  const [open, setOpen] = useState<boolean>(openProp);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 24;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'block',
          mb: 0.5,
          py: 0,
          px: 0,
        }}
        {...other}
      >
        <Button
          endIcon={
            !open ? <ChevronRightIcon fontSize="small" /> : <ChevronDownIcon fontSize="small" />
          }
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
              color: active ? 'sidebarColor.active' : 'sidebarColor.main',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
              height: 56,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(159,162,180,0.2)',
            },
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400',
            },
            '& .MuiButton-endIcon': {
              color: 'neutral.400',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={open} sx={{ mt: 0.5 }}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 0,
      }}
    >
      <NextLink href={path} passHref>
        <Button
          component="a"
          startIcon={icon}
          endIcon={chip}
          disableRipple
          sx={{
            backgroundColor: active && 'rgba(159,162,180,0.2)',
            color: active ? 'sidebarColor.active' : 'sidebarColor.main',
              borderLeft: active ? '3px solid #AEB7FF' : '3px solid transparent',
              borderRadius: 0,
              my: 0,
              height: 56,
              fontWeight: 'normal',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon .MuiSvgIcon-root': {
              fontSize: 25,
              color: active ? 'secondary.main' : 'neutral.400',
                marginTop: 1
            },
              '& .MuiButton-startIcon .MuiSvgIcon-root path': {
                  fill: active ? 'rgba(159,162,180,1)' : 'rgba(159,162,180,0.4)',
              },
            '&:hover': {
              backgroundColor: 'rgba(159,162,180,0.2)',
                color: 'sidebarColor.active',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
      </NextLink>
    </ListItem>
  );
};

DashboardSidebarItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  icon: PropTypes.node,
  info: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DashboardSidebarItem.defaultProps = {
  active: false,
  open: false,
};
