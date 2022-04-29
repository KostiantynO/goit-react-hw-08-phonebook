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

    authForm: {
      name: 'name',
      email: 'email',
      phone: 'phone',
      password: 'password',
      formError: 'Please enter all fields',
    },

    // RegistrationForm
    registrationForm: {
      registerButtonText: 'Sign Up',
    },

    // LoginForm
    loginForm: {
      loginButtonText: 'Sign In',
    },

    registerView: {
      currentPage: 'Sign Up',
    },

    loginView: {
      currentPage: 'Sign In',
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

    authForm: {
      name: "ім'я",
      email: 'пошта',
      phone: 'телефон',
      password: 'пароль',
      formError: 'Будь ласка, заповніть всі поля',
    },

    // RegistrationForm
    registrationForm: {
      registerButtonText: 'Зареєструватися',
    },

    // LoginForm
    loginForm: {
      loginButtonText: 'Авторизуватися',
    },

    registerView: {
      currentPage: 'Реєстрація',
    },

    loginView: {
      currentPage: 'Авторизація',
    },
  },
};

export const i18n = {
  ids,
  entities,
};
