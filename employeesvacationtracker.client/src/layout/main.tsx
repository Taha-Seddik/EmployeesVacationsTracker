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
    <>
      <PageDecoration />
      <AdminSideNavPanel open={openNav} handleDrawerClose={handleDrawerClose} />
      <AdminMainSide />
    </>
  );
};

const BottomLeftImg = styled('img')(() => ({
  position: 'absolute',
  bottom: 0,
  left: '-70px',
  width: 450,
}));

const TopRightImg = styled('img')(() => ({
  position: 'absolute',
  top: '-40px',
  right: '-40px',
}));

const PageDecoration: React.FC<{}> = () => {
  return (
    <Box position='relative' width='100%' height='100%' overflow='hidden'>
      <TopRightImg src='/images/topRight.svg' alt='' />
      <BottomLeftImg src='/images/bottomLeft.svg' alt='' />
    </Box>
  );
};
