import localeTMP from './locale';
import usersTMP from './users';
import sidebarTMP from 'bricks/Sidebar/gearbox/selectors';

export const users = usersTMP;
export const locale = localeTMP;
export const sidebar = sidebarTMP;

export default {
  ...users,
  ...locale,
  ...sidebar,
};
