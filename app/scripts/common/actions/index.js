import * as localeTMP from './locale';
import * as usersTMP from './users';

export const locale = localeTMP;
export const users = usersTMP;

export default {
  ...locale,
  ...users,
};
