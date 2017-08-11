import sidebar from 'bricks/Sidebar/gearbox/actions';
import locale from './locale';
import users from './users';
import chat from './chat';

export const sidebarAct = sidebar;
export const localesAct = locale;
export const usersAct = users;
export const charAct = chat;

export default {
  ...locale,
  ...users,
  ...sidebar,
  ...chat,
};
