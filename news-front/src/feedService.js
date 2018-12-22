import axios from 'axios';

const base_url = window.location.hostname === '/https://newz-app.herokuapp.com' ? 'https://newz-app.herokuapp.com' : 'http://localhost:3000';

export const createFeed = (feed, history) => {
    console.log(feed);
	axios
		.post(`${base_url}/api/feed`, feed)
		.then(res => {
			//   localStorage.setItem('token', res.data.token);
			//   localStorage.setItem('user', JSON.stringify(res.data.user));
			alert(res.data.msg);
			console.log(res);
			history.push('/');
		})
		.catch(err => {
			console.log('Error Creating Feed =====> ', err.response);
		});
};

export const getFeeds = (user) => {
    axios.get(`${base_url}/api/feed`, user
    )
    .then(res => {
        console.log("funciono",res.data.feeds)
        return (res.data.feeds);
    })
    .catch(err => {
        console.log('Error Getting Feeds =====> ', err.response);
    })
}

export const login = (user, history) => {
	axios
		.post(`${base_url}/api/auth/login`, user)
		.then(res => {
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user', JSON.stringify(res.data.user));
			alert(res.data.msg);
			console.log(res.data.user);
			history.push('/profile');
		})
		.catch(err => {
			console.log('Error Login =====> ', err);
		});
};

// export const upload = (user) => {
//   let formData = new FormData();
//   Object.keys(user).forEach(key => {
//     formData.append(key, user[key])
//   });
//   return axios.patch(`${base_url}/auth/upload`, formData)
// }

export const isLoggedIn = (user, history) => {};
