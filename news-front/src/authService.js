import axios from 'axios';

const base_url = window.location.hostname === '/https://newz-app.herokuapp.com' ? 'https://newz-app.herokuapp.com':'http://localhost:3000';



export const signup = (user, history) => {
  axios.post(`${base_url}/api/auth/signup`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      console.log(res)
      history.push('/login')
    })
    .catch((err) => {
      console.log('Error Signup =====> ', err.response);
    })
}

export const login = (user, history) => {
    console.log("===>",window.location.host)
  axios.post(`${base_url}/api/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      console.log(res.data.user)
      history.push('/')
    })
    .catch(err => {
      console.log('Error Login =====> ', err);
    });
}


// export const upload = (user) => {
//   let formData = new FormData();
//   Object.keys(user).forEach(key => {
//     formData.append(key, user[key])
//   });
//   return axios.patch(`${base_url}/auth/upload`, formData)
// }

export const isLoggedIn = (user, history) => {
  
}