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
    title: 'Class',
    icon: 'layers-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/dslop/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/dslop/list',
      },
    ]
  },
  {
    title: 'Blocks',
    icon: 'flag-outline',
    link: '/pages/grade',
  },
  {
    title: 'Students',
    icon: 'person-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/student/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/student/list',
      }
    ]
  },
  {
    title: 'Parents',
    icon: 'people-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/parent/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/parent/list',
      }
    ]
  },
  {
    title: 'Subjects',
    icon: 'book-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/subject/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/subject/list',
      },
    ]
  },
  {
    title: 'Transcripts',
    icon: 'calendar-outline',
    children: [
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/bd/list',
      },
    ]
  },
  {
    title: 'School Year',
    icon: 'more-vertical-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/school-year/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/school-year/list',
      },
    ]
  },
  {
    title: 'Semester',
    icon: 'options-2-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/semester/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/semester/list',
      },
    ]
  },
  {
    title: 'Teachers',
    icon: 'person-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/teacher/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/teacher/list',
      }
    ]
  },
  {
    title: 'Teaching Assignment',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Add',
        icon: 'arrow-right',
        link: '/pages/assignment/add',
      },
      {
        title: 'List',
        icon: 'arrow-right',
        link: '/pages/assignment/list',
      }
    ]
  },

];
