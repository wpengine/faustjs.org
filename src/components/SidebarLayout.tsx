import * as React from 'react';
import { Box, Fab, Grid } from '@mui/material';
import { DocsSidebarMenuItemsFragmentFragment } from '__generated__/graphql';
import ListIcon from '@mui/icons-material/List';
import { DocsSidebar } from './DocsSidebar';
import { OverlayDialog } from './OverlayDialog';

export interface SidebarLayoutProps {
  menuItems: DocsSidebarMenuItemsFragmentFragment[];
  children: React.ReactNode;
}
const fabStyle = {
  position: 'fixed',
  bottom: 64,
  right: 32,
  display: { xs: 'block', md: 'none' },
};
export function SidebarLayout(props: SidebarLayoutProps) {
  const { menuItems, children } = props;
  const [open, setOpen] = React.useState(false);

  const handleSideBarOpen = () => {
    setOpen(true);
  };

  const handleSideBarClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Grid item xs={12} md={4}>
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
          <DocsSidebar menuItems={menuItems} />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        {children}
        <Fab
          color="secondary"
          sx={fabStyle}
          aria-label="docs-sidebar-mobile"
          onClick={handleSideBarOpen}>
          <ListIcon
            sx={{
              marginTop: '5px',
            }}
          />
        </Fab>
        <OverlayDialog open={open} onClose={handleSideBarClose}>
          <Box sx={{ padding: '1rem' }}>
            <DocsSidebar menuItems={menuItems} />
          </Box>
        </OverlayDialog>
      </Grid>
    </Grid>
  );
}
