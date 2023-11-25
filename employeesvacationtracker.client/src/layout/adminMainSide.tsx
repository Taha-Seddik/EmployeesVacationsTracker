import { useState } from 'react';
import { Avatar, Button, ClickAwayListener, Fab, Popper, Typography, styled } from '@mui/material';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { RoutesMap } from '../routing/RoutesMap';
import Box from '@mui/material/Box';
import { sideNavHeadColor, sideNavWidth } from '../utils/constants';

type IProps = {
  openNav: boolean;
  toggleDrawer: () => void;
};

type AppBarProps = MuiAppBarProps & {
  open?: boolean;
};

const CustomContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${sideNavWidth}px)`,
    marginLeft: `${sideNavWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AdminMainSide: React.FC<IProps> = ({ toggleDrawer }) => {
  return (
    <CustomContainer>
      {/* Top bar  */}
      <TopBar toggleDrawer={toggleDrawer} />
    </CustomContainer>
  );
};

const TopBar: React.FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => {
  const [accountMenuBtnEL, setAccountMenuBtnEL] = useState(null);

  const handleClickOnAccountBtn = (ev: React.MouseEvent<any>) => {
    setAccountMenuBtnEL(ev.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAccountMenuBtnEL(null);
  };

  return (
    <>
      <MuiAppBar
        position='relative'
        color='transparent'
        elevation={0}
        sx={{ height: 68, px: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Toolbar sx={{ width: '100%' }}> */}
        <Box
          bgcolor={sideNavHeadColor}
          width='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          borderRadius='5px'
          mt={0.5}
          py={1}
          px={4}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, color: 'white' }}
            onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <span className='takeTheRest' />
          <AdminUserMenuButton clickHandler={handleClickOnAccountBtn} isForMobile={false} />
        </Box>
        {/* </Toolbar> */}
      </MuiAppBar>
      <AdminAccountMenu anchorEl={accountMenuBtnEL} handleClose={handleCloseAccountMenu} />
    </>
  );
};

type IAdminUserMenuButtonProps = {
  clickHandler: (ev: React.MouseEvent<any>) => void;
  isForMobile: boolean;
};

const AdminUserMenuButton: React.FC<IAdminUserMenuButtonProps> = ({ clickHandler, isForMobile }) => {
  // const userData = useUserData();
  // if (!userData) return null;
  return (
    <Box className='flexCenterRow' color='white' gap={1}>
      <Typography variant='button' textTransform='capitalize'>
        {/* {userData.firstName} {userData.lastName} */}
        Keita touré
      </Typography>
      <Fab size='small' color='inherit' onClick={clickHandler}>
        {/* <AdminPanelSettingsIcon fontSize={isForMobile ? 'small' : 'medium'} color='primary' /> */}
        <Avatar src='/images/adminPic.png'></Avatar>
      </Fab>
    </Box>
  );
};

type IAdminAccountMenuProps = { anchorEl: Element | null; handleClose: () => void };

const AdminAccountMenu: React.FC<IAdminAccountMenuProps> = ({ anchorEl, handleClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(RoutesMap.signIn.path);
  };

  return (
    <Popper id='account-menu-user' anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-end' sx={{ p: 1 }}>
      <ClickAwayListener onClickAway={handleClose}>
        <Box display='flex' flexDirection='column'>
          <Button className='fullW' variant='contained' sx={{ width: '90%', my: 2, mx: 'auto' }} onClick={handleLogout}>
            SignOut
          </Button>
        </Box>
      </ClickAwayListener>
    </Popper>
  );
};
