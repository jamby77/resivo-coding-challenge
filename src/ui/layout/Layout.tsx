import { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppBar } from '@/ui/layout/AppBar';

interface LayoutProps {
  title?: string;
}

export function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <AppBar />
      <Container component="main" sx={{ p: 3 }}>
        {!!title && (
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </>
  );
}
