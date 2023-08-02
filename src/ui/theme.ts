import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';
import { gridClasses } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          [`& .${gridClasses.row}:hover`]: {
            cursor: 'pointer',
          },
        },
      },
    },
  },
});
