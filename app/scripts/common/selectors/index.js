import chatTMP from './chat';
import usersTMP from './users';
import localeTMP from './locale';
import sidebarTMP from 'bricks/Sidebar/gearbox/selectors';

export const chat = chatTMP;
export const users = usersTMP;
export const locale = localeTMP;
export const sidebar = sidebarTMP;

export default {
  ...chat,
  ...users,
  ...locale,
  ...sidebar,
};
