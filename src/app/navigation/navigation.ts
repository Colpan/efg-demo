import { FuseNavigation } from '@fuse/types';

const home: FuseNavigation = {
  id   : 'home',
  title: 'Home',
  icon     : 'dashboard',
  type : 'item',
  url  : '/home'
}

export const navigation: FuseNavigation[] = [
  home,
];
