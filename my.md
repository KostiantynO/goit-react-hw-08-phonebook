```shell
cd pro/react
mkdir goit-react-hw-08-phonebook
cd goit-react-hw-08-phonebook
code .

start https://github.com/new

git init
gra https://github.com/KostiantynO/goit-react-hw-08-phonebook.git # git remote add origin https://
grv # git remote -v

gca "initial" # git add . && git commit "initial"
gph # git push -u origin HEAD

npm i -D prettier eslint prop-types

npm i react-router-dom axios styled-components react-icons react-toastify

ns # npm start
```

### `package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-08-phonebook/",

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,scss,md}": "prettier --write"
  }
```

### `index.js`

```js
<BrowserRouter basename="/goit-react-hw-08-phonebook/">
  <App />
</BrowserRouter>
```

### `2022-04-29`

```shell
npx mrm@2 lint-staged
npm i react-redux @reduxjs/toolkit redux-persist
```

### `2022-05-02`: Split code for Contacts into separate modules.

- [x] Filter
- [x] ContactList
- [x] Contact
- [ ] Add Contact Form
- [ ] Modal with Portal

```shell
npm i @mui/material @emotion/react @emotion/styled
```

### `2022-05-04`:

- [x] Add Contact Form
- [x] Modal with Portal

### `2022-05-06`: Homework errors after mentor review:

- [x] make redirect to /contacts
- [x] Invalidate whole LIST with RTK Query, not just one id
- [x] Make apparent, how to add contact
- [x] Remove upa
- [x] Make persist token and fetchUser on mount
- [x] Remove old files

### `2022-05-08`: Homework errors after mentor review:

- [x] Notifications - not correct login/password. "Please check you password."
- [ ] Keep one url from axios? // I do not know how to combine two approaches
      with axios.
