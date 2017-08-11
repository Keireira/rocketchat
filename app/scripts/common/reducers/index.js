import chat from 'reducers/chat';
import users from 'reducers/users';
import locale from 'reducers/locale';
import sidebar from 'bricks/Sidebar/gearbox/reducer';

const rootReducer = {
  chat,
  users,
  locale,
  sidebar,
};

export default rootReducer;
