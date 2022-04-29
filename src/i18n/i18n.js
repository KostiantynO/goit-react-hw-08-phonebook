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

    // RegistrationForm
    registrationForm: {
      name: 'name',
      email: 'email',
      phone: 'phone',
      password: 'password',
      formError: 'Please enter all fields',
      registerButtonText: 'Sign Up',
    },
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

    // RegistrationForm
    registrationForm: {
      name: "ім'я",
      email: 'пошта',
      phone: 'телефон',
      password: 'пароль',
      formError: 'Будь ласка, заповніть всі поля',
      registerButtonText: 'Зареєструватися',
    },
  },
};

export const i18n = {
  ids,
  entities,
};
