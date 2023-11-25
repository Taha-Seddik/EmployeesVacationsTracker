import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { AdminSideNavPanel } from './adminSideNav';
import { AdminMainSide } from './adminMainSide';
import { useState } from 'react';

// const Container = styled(Box)(({ theme }) => ({
//   marginTop: theme.spacing(10),
//   paddingBottom: theme.spacing(5),
// }));

export const AdminPageLayout: React.FC<{ children: React.ReactElement }> = () => {
  const [openNav, setOpenNav] = useState(true);

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  const handleDrawerClose = () => {
    setOpenNav(false);
  };

  return (
    <Box>
      <AdminSideNavPanel open={openNav} handleDrawerClose={handleDrawerClose} />
      <AdminMainSide />
    </Box>
  );
};
