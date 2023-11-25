import { useRef, useState } from 'react';
import { Avatar, Button, ClickAwayListener, Fab, Paper, Popper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { RoutesMap } from '../routing/RoutesMap';
import Box from '@mui/material/Box';
import { MainSideContainer, MainSideTopBar } from './layout.styles';
import { sideNavHeadColor } from '../utils/constants';

type IProps = {
  openNav: boolean;
  toggleDrawer: () => void;
};

export const AdminMainSide: React.FC<IProps> = ({ toggleDrawer }) => {
  return (
    <MainSideContainer>
      {/* Top bar  */}
      <TopBar toggleDrawer={toggleDrawer} />
    </MainSideContainer>
  );
};

const TopBar: React.FC<{ toggleDrawer: () => void }> = ({ toggleDrawer }) => {
  const [accountMenuBtnEL, setAccountMenuBtnEL] = useState<HTMLElement | null>(null);
  const userMenuAnchor = useRef<HTMLElement | null>(null);

  const handleClickOnAccountBtn = () => {
    setAccountMenuBtnEL(userMenuAnchor.current);
  };

  const handleCloseAccountMenu = () => {
    setAccountMenuBtnEL(null);
  };

  return (
    <>
      <MainSideTopBar position='relative' color='transparent' elevation={0} ref={userMenuAnchor}>
        <Box className='innerContent'>
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
      </MainSideTopBar>
      <AdminAccountMenu anchorEl={accountMenuBtnEL} handleClose={handleCloseAccountMenu} />
    </>
  );
};

type IAdminUserMenuButtonProps = {
  clickHandler: (ev: React.MouseEvent<any>) => void;
  isForMobile: boolean;
};

const AdminUserMenuButton: React.FC<IAdminUserMenuButtonProps> = ({ clickHandler }) => {
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

type IAdminAccountMenuProps = { anchorEl: HTMLElement | null; handleClose: () => void };

const AdminAccountMenu: React.FC<IAdminAccountMenuProps> = ({ anchorEl, handleClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(RoutesMap.signIn.path);
  };

  return (
    <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-end' sx={{ p: 1 }}>
      <ClickAwayListener onClickAway={handleClose}>
        <Paper sx={{ width: 230, mt: -1, background: sideNavHeadColor }}>
          <Box display='flex' flexDirection='column'>
            <Button
              className='fullW'
              variant='contained'
              sx={{ width: '90%', my: 2, mx: 'auto' }}
              onClick={handleLogout}>
              SignOut
            </Button>
          </Box>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};
