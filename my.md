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

# `package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-08-phonebook/",

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,scss,md}": "prettier --write"
  }
```

# `index.js`

```js
<BrowserRouter basename="/goit-react-hw-08-phonebook/">
  <App />
</BrowserRouter>
```

# `2022-04-29`

```shell
npx mrm@2 lint-staged
npm i react-redux @reduxjs/toolkit redux-persist
```
