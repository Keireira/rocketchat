import sidebar from 'bricks/Sidebar/gearbox/actions';
import locale from './locale';
import users from './users';

export const sidebarAct = sidebar;
export const localesAct = locale;
export const usersAct = users;

export default {
  ...locale,
  ...users,
  ...sidebar,
};
