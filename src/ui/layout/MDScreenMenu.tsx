import List from '@mui/material/List';
import { NavbarListItemButton } from '@/ui/layout/NavbarListItemButton';

interface MDScreenMenuProps {
  onNavMenuClose: () => void;
}

export function MDScreenMenu({ onNavMenuClose }: MDScreenMenuProps) {
  return (
    <List
      onClick={onNavMenuClose}
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        flexGrow: 1,
      }}
    >
      <NavbarListItemButton label="Doors" href="/doors" />
    </List>
  );
}
