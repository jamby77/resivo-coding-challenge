import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';

interface DetailPageItemProps {
  label: string;
}

export function DetailPageItem({
  label,
  children,
}: PropsWithChildren<DetailPageItemProps>) {
  return (
    <Box>
      <Typography>
        <strong>{label}</strong>
      </Typography>
      {children}
    </Box>
  );
}
