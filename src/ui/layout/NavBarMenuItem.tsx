import { useRouter } from 'next/router';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface NavBarMenuItemProps {
  label: string;
  href: string;
  onClick: MouseEventHandler | undefined;
}

export function NavBarMenuItem({ label, href, onClick }: NavBarMenuItemProps) {
  const { pathname } = useRouter();

  return (
    <MenuItem
      selected={pathname === href}
      onClick={onClick}
      component={Link}
      href={href}
    >
      <Typography textAlign="center">{label}</Typography>
    </MenuItem>
  );
}
