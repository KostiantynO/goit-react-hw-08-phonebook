const ids = { eng: 'eng', ukr: 'ukr' };

const entities = {
  [ids.eng]: {
    // Views
    main: 'main',
    todos: 'todos',
    register: 'register',
    login: 'login',
    contacts: 'contacts',
    upa: 'UPA',

    // HomeView
    welcomeMessage: 'Welcome page of our service 💁‍♀️',

    userMenu: {
      avatar: 'avatar',
      logOutButtonText: 'Log Out',
      greeting: 'welcome',
    },

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

    contactsView: {
      filterDesc: 'Filter by name/number',
    },

    upaView: {
      upa: 'Ukrainian Insurgent Army (resistance to the nkvd and the execution of civilians)',
    },
  },

  [ids.ukr]: {
    // pages
    main: 'головна',
    todos: 'замітки',
    register: 'реєстрація',
    login: 'логін',
    contacts: 'контакти',
    upa: 'УПА',

    // HomeView
    welcomeMessage: 'Вітальна сторінка нашого сервісу 💁‍♀️',

    userMenu: {
      avatar: 'аватар',
      logOutButtonText: 'Вийти',
      greeting: 'вітаємо',
    },

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

    contactsView: {
      filterDesc: 'Фільтрувати за іменем/номером',
    },

    upaView: {
      upa: 'Українська повстанська армія (спротив нквд та розстрілу мирного населення)',
    },
  },
};

export const i18n = {
  ids,
  entities,
};
