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
    link: '/pages/dslop/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/dslop/list',
    //   },
    // ]
  },
  {
    title: 'Blocks',
    icon: 'flag-outline',
    link: '/pages/grade/list',
  },
  {
    title: 'Students',
    icon: 'person-outline',
    link: '/pages/student/list',
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/student/list',
    //   }
    // ]
  },
  {
    title: 'Parents',
    icon: 'people-outline',
    link: '/pages/parent/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/parent/list',
    //   }
    // ]
  },
  {
    title: 'Subjects',
    icon: 'book-outline',
    link: '/pages/subject/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/subject/list',
    //   },
    // ]
  },
  {
    title: 'Transcripts',
    icon: 'calendar-outline',
    link: '/pages/bd/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/bd/list',
    //   },
    // ]
  },
  {
    title: 'School Year',
    icon: 'more-vertical-outline',
    link: '/pages/school-year/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/school-year/list',
    //   },
    // ]
  },
  {
    title: 'Semester',
    icon: 'options-2-outline',
    link: '/pages/semester/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/semester/list',
    //   },
    // ]
  },
  {
    title: 'Teachers',
    icon: 'person-outline',
    link: '/pages/teacher/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/teacher/list',
    //   }
    // ]
  },
  {
    title: 'Teaching Assignment',
    icon: 'briefcase-outline',
    link: '/pages/assignment/list'
    // children: [
    //   {
    //     title: 'List',
    //     icon: 'arrow-right',
    //     link: '/pages/assignment/list',
    //   }
    // ]
  },

];
