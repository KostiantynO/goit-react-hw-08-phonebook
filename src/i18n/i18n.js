const ids = { eng: 'eng', ukr: 'ukr' };

const entities = {
  eng: {
    // Views
    main: 'main',
    todos: 'todos',
    register: 'register',
    login: 'login',
    contacts: 'contacts',
    upload: 'upload',

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
      registerError: 'Please try different name or email',
    },

    loginView: {
      currentPage: 'Sign In',
      loginError: 'Please check your mail or password',
    },

    contactsView: {
      filter: {
        clearFilterButtonLabel: 'Clear',
        desc: 'Filter by name/number',
      },

      title: 'Contacts',
      createContactButtonLabel: 'Add contact',
      createContactForm: {
        nameLabel: 'Name',
        numberLabel: 'Number',
      },
    },

    uploadView: {
      addFileInputLabel: 'Choose file',
      addFileButtonLabel: 'Upload',
    },
  },

  ukr: {
    // pages
    main: 'головна',
    todos: 'замітки',
    register: 'реєстрація',
    login: 'логін',
    contacts: 'контакти',
    upload: 'завантажити',

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
      registerError: "Будь ласка, спробуйте ввести інше ім'я або пошту",
    },

    // lang.loginView.loginError`Please check your email and password`
    loginView: {
      currentPage: 'Авторизація',
      loginError: 'Будь ласка, перевірте свою пошту або пароль',
    },

    contactsView: {
      filter: {
        clearFilterButtonLabel: 'Очистити',
        desc: 'Фільтрувати за іменем/номером',
      },
      title: 'Контакти',
      createContactButtonLabel: 'Додати контакт',
      createContactForm: {
        nameLabel: "Ім'я",
        numberLabel: 'Номер',
      },
    },

    uploadView: {
      addFileInputLabel: 'Обрати файл',
      addFileButtonLabel: 'Завантажити',
    },
  },
};

export const i18n = {
  ids,
  entities,
};
