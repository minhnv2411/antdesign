import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export type SeverityPillColor =
  | 'statusSuccess'
  | 'statusWaiting';

interface SeverityPillProps {
  children?: ReactNode;
  color?: SeverityPillColor;
  style?: {};
  sx?: SxProps<Theme>;
}

interface SeverityPillRootProps {
  ownerState: {
    color: SeverityPillColor;
  };
}

const SeverityPillRoot = styled('span')<SeverityPillRootProps>(
  ({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color].statusBG;
    const color = theme.palette[ownerState.color].statusTXT;

    return {
      alignItems: 'center',
      backgroundColor,
      borderRadius: 12,
      color,
      cursor: 'default',
      display: 'inline-flex',
      flexGrow: 0,
      flexShrink: 0,
      marginTop:  theme.spacing(1),
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: 'center',
      letterSpacing: 0.5,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      whiteSpace: 'nowrap'
    };
  }
);

export const SeverityPill: FC<SeverityPillProps> = (props) => {
  const { color = 'statusSuccess', children, ...other } = props;

  const ownerState = { color };

  return (
    <SeverityPillRoot
      ownerState={ownerState}
      {...other}
    >
      {children}
    </SeverityPillRoot>
  );
};

SeverityPill.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
      'statusSuccess',
      'statusWaiting'
  ])
};
