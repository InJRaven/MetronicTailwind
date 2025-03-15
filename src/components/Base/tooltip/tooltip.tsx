import { FC } from 'react';
import DefaultTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip: FC<TooltipProps> = ({ className, ...props }) => {
  return (
    <DefaultTooltip
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

export default Tooltip;
