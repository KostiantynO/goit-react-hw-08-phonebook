const ids = { eng: 'eng', ukr: 'ukr' };

const entities = {
  [ids.eng]: {
    // Views
    main: 'main',
    todos: 'todos',
    register: 'register',
    login: 'login',
    contacts: 'contacts',

    // HomeView
    welcomeMessage: 'Welcome page of our service 💁‍♀️',

    // UserMenu
    avatar: 'avatar',
  },

  [ids.ukr]: {
    // pages
    main: 'головна',
    todos: 'замітки',
    register: 'реєстрація',
    login: 'логін',
    contacts: 'контакти',

    // HomeView
    welcomeMessage: 'Вітальна сторінка нашого сервісу 💁‍♀️',

    // UserMenu
    avatar: 'аватар',
  },
};

export const i18n = {
  ids,
  entities,
};
