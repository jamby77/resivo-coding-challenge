import { useState, useCallback, MouseEvent } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { AppBarLogo } from '@/ui/layout/AppBarLogo';
import { XSScreenMenu } from '@/ui/layout/XSScreenMenu';
import { MDScreenMenu } from '@/ui/layout/MDScreenMenu';
import { AppBarDate } from '@/ui/layout/AppBarDate';

export function AppBar() {
  const [navAnchorElement, setNavAnchorElement] = useState<null | HTMLElement>(
    null,
  );

  const handleNavMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setNavAnchorElement(event.currentTarget);
  }, []);

  const handleNavMenuClose = useCallback(() => {
    setNavAnchorElement(null);
  }, []);

  return (
    <MuiAppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <AppBarLogo />

          <XSScreenMenu
            navAnchorElement={navAnchorElement}
            onNavMenuOpen={handleNavMenuOpen}
            onNavMenuClose={handleNavMenuClose}
          />

          <MDScreenMenu onNavMenuClose={handleNavMenuClose} />

          <AppBarDate />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
