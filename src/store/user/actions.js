export function register({ commit, state }, data) {
  // post url eg: /api/v1/user/create
  return new Promise((resolve, reject) => {
    $axios
      .post('https://jsonplaceholder.typicode.com/users', {
        surname: data.surname,
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        gender: data.gender,
      })
      .then(({ data }) => {
        console.log(data)
        // set the user data to state
        commit('SET_REGISTER', data)
        resolve(data) // Let the calling function know that http is done. You may send some data back
      })
      .catch(err => {
        // http failed, let the calling function know that action did not work out
        reject(error)
      })
  })
}

export function login({ commit, state }, data) {
  // post url eg: /api/v1/user/create
  return new Promise((resolve, reject) => {
    $axios
      .post('https://jsonplaceholder.typicode.com/users', {
        identity: data.identity,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      .then(({ data }) => {
        console.log(data)
        // set the user data to state
        commit('SET_REGISTER', data)
        resolve(data) // Let the calling function know that http is done. You may send some data back
      })
      .catch(err => {
        // http failed, let the calling function know that action did not work out
        reject(error)
      })
  })
}
