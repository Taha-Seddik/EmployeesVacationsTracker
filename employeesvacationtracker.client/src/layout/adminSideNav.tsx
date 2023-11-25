import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useSideNavState } from '../hooks/useSideNavState';
import { adminSideNavItems } from '../routing/adminNavItems';
import Drawer from '@mui/material/Drawer';
import { sideNavHeadColor, sideNavWidth } from '../utils/constants';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { ISideNavItem, ISideNavSubItem } from '../models/sideNavTypes';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@mui/material';

// const Container = styled(Box)(({ theme }) => ({
//   marginTop: theme.spacing(10),
//   paddingBottom: theme.spacing(5),
// }));

type IProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export const AdminSideNavPanel: React.FC<IProps> = ({ open }) => {
  const { navItems, handleItemClick, handleSubItemClick } = useSideNavState(adminSideNavItems);
  const navKeys = Object.keys(navItems);
  return (
    <Drawer
      open={open}
      variant='persistent'
      anchor='left'
      sx={{
        width: sideNavWidth,
        border: '0px !important',
        flexShrink: 0,
        '&  .MuiDrawer-paper': {
          border: '0px !important',
          width: sideNavWidth,
          boxSizing: 'border-box',
        },
      }}>
      <SideNavHeadSide />
      <Divider />
      {navKeys.map((itemKey) => (
        <List key={itemKey} disablePadding>
          {/* Item */}
          <NavLinkItem itemKey={itemKey} item={navItems[itemKey]} handleItemClick={handleItemClick} />
          {/* subItems */}
          <NavLinkItemSubs itemKey={itemKey} item={navItems[itemKey]} handleSubItemClick={handleSubItemClick} />
        </List>
      ))}
    </Drawer>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  background: sideNavHeadColor,
  minHeight: '130px !important',
}));

const SideNavHeadSide: React.FC<{}> = () => {
  //   const userData = useUserData();
  //   if (!userData) return <Box sx={{ height: 130 }}></Box>;
  return (
    <DrawerHeader className='flexCenterRow' sx={{ height: 130 }}>
      <div className='toolbar flexCenterCenterColumn'>
        <Avatar src='/images/adminPic.png' sx={{ mb: 1 }}></Avatar>
        <Typography variant='body1' textTransform='capitalize'>
          {/* {userData.firstName} {userData.lastName} */}
          Keita touré
        </Typography>
        <Typography variant='caption' gutterBottom>
          Administrateur
        </Typography>
      </div>
    </DrawerHeader>
  );
};
type ItemclickType = (event: any, itemKey: string) => void;

const NavLinkItem: React.FC<{ itemKey: string; item: ISideNavItem; handleItemClick: ItemclickType }> = ({
  item,
  itemKey,
  handleItemClick,
}) => {
  return (
    <ListItem onClick={(e) => handleItemClick(e, itemKey)}>
      <ListItemButton>
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={item.label} sx={{ fontWeight: 500 }} primaryTypographyProps={{ fontWeight: 500 }} />
        {item.items.length ? item.open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
    </ListItem>
  );
};

type SubItemclickType = (event: any, itemKey: string, subItemIndex: number) => void;

const NavLinkItemSubs: React.FC<{ itemKey: string; item: ISideNavItem; handleSubItemClick: SubItemclickType }> = ({
  itemKey,
  item,
  handleSubItemClick,
}) => {
  return (
    <>
      {item.items?.map((subItem, subIndex) => (
        <Collapse key={itemKey + subIndex} in={item.open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <NavSubItem
              itemKey={itemKey}
              subIndex={subIndex}
              subItem={subItem}
              handleSubItemClick={handleSubItemClick}
            />
          </List>
        </Collapse>
      ))}
    </>
  );
};

const NavSubItem: React.FC<{
  itemKey: string;
  subIndex: number;
  subItem: ISideNavSubItem;
  handleSubItemClick: SubItemclickType;
}> = ({ subItem, itemKey, handleSubItemClick, subIndex }) => {
  return (
    <ListItem onClick={(e) => handleSubItemClick(e, itemKey, subIndex)} sx={{ pt: 0, pb: 0, pl: 4 }}>
      <ListItemButton>
        <Typography variant='caption' mr={1}>
          -
        </Typography>
        <ListItemText primary={subItem.label} primaryTypographyProps={{ fontWeight: 500, variant: 'subtitle2' }} />
      </ListItemButton>
    </ListItem>
  );
};