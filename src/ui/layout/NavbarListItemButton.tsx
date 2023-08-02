import { useRouter } from 'next/router';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

interface NavbarListItemButtonProps {
  label: string;
  href: string;
}

export function NavbarListItemButton({
  label,
  href,
}: NavbarListItemButtonProps) {
  const { pathname } = useRouter();

  return (
    <ListItemButton
      selected={pathname === href}
      sx={{ color: 'common.black', mr: 2, flexGrow: 'initial' }}
      LinkComponent={Link}
      href={href}
    >
      <Typography>{label}</Typography>
    </ListItemButton>
  );
}
