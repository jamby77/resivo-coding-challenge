import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';

export function AppBarLogo() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
      <Link href="/">
        <Image src="/logo.png" alt="dormakaba logo" width="269" height="30" />
      </Link>
    </Box>
  );
}
