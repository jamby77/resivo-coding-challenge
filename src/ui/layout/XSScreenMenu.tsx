import { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { NavBarMenuItem } from '@/ui/layout/NavBarMenuItem';

interface XSScreenMenuProps {
  navAnchorElement: null | HTMLElement;
  onNavMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  onNavMenuClose: () => void;
}

export function XSScreenMenu({
  onNavMenuOpen,
  onNavMenuClose,
  navAnchorElement,
}: XSScreenMenuProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="menu button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onNavMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={navAnchorElement}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(navAnchorElement)}
        onClose={onNavMenuClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <NavBarMenuItem onClick={onNavMenuClose} label="Doors" href="/doors" />
      </Menu>
    </Box>
  );
}
