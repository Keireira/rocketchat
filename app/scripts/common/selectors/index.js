import localeTMP from './locale';
import sidebarTMP from 'bricks/Sidebar/gearbox/selectors';

export const locale = localeTMP;
export const sidebar = sidebarTMP;

export default {
  ...locale,
  ...sidebar,
};
