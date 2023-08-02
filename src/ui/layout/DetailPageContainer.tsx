import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';

export function DetailPageContainer({ children }: PropsWithChildren) {
  return <Stack spacing={2}>{children}</Stack>;
}
