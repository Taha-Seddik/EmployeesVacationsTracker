import Drawer from '@mui/material/Drawer';
import { sideNavHeadColor, sideNavWidth } from '../utils/constants';
import { styled } from '@mui/material/styles';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';

export const SideNavDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? sideNavWidth : 0,
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: '0px !important',
  '& .MuiDrawer-paper': {
    border: '0px !important',
    width: open ? sideNavWidth : 0,
    boxSizing: 'border-box',
    background: 'transparent',
    color: 'white',
    height: '100%',
    padding: theme.spacing(1),
    paddingRight: 0,
  },
  '& .material-icons': {
    color: 'white',
  },
  '& .sideNavContent': {
    background: sideNavHeadColor,
    height: '100%',
    borderRadius: '5px',
    display: open ? '' : 'none',
  },
  '& .navItem': {
    borderRadius: '5px',
  },
  '& .navItem.Mui-selected': {
    background: 'rgb(17,24,39,0.7)',
  },
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  minHeight: '130px !important',
}));

type AppBarProps = MuiAppBarProps & {
  open?: boolean;
};

export const MainSideContainer = styled(Box, {
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

export const MainSideTopBar = styled(MuiAppBar)(({ theme }) => ({
  height: 68,
  padding: theme.spacing(0, 1),
  alignItems: 'center',
  justifyContent: 'center',
  '& .innerContent': {
    backgroundColor: sideNavHeadColor,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(1, 4),
  },
}));
