import { FC } from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

const DefaultTooltip: FC<TooltipProps> = ({ className, ...props }) => {
  return (
    <Tooltip
      TransitionProps={{ timeout: 300 }}
      {...props}

      classes={{
        popper: className,
        tooltip:
          '!text-white !rounded-md !text-xs !font-normal !bg-[--tw-tooltip-background-color] !box-shadow[--tw-tooltip-box-shadow] !border[--tw-tooltip-border] !px-2 !py-1.5'
      }}
    />
  );
};

export default DefaultTooltip;
