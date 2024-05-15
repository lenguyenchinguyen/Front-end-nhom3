import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Subject',
    icon: 'home',
    children: [
      {
        title:'List',
        link: '/pages/subject/list'
      },
      {
        title:'Add',
        link: '/pages/subject/add'
      }
    ]
  },
  {
    title: 'BD',
    icon: 'home',
    children: [
      {
        title:'List',
        link: '/pages/bd/list'
      },
    ]
  }

];
