import { ISideNavItem } from '../models/sideNavTypes';
import { RoutesMap } from './RoutesMap';

export const adminSideNavItems: { [key: string]: ISideNavItem } = {
  Dashboard: {
    index: 0,
    label: 'Dashboard',
    open: false,
    icon: 'dashboard',
    route: RoutesMap.home.path,
    items: [],
  },
};
