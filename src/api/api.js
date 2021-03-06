import * as axios from "axios";


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'e461530d-4a3e-45c9-9ebc-987e2c8fb19f'
	}
});

export const usersAPI = {
	getUsers(pageNumber = 1, pageSize = 5) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
			.then(response => response.data);
	},
	getUserProfile(userId = 5518) {
		console.warn('Oboslate method! Please use profileAPI');
		return profileAPI.getUserProfile(userId);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => response.data);
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	}
};

export const profileAPI = {
	getUserProfile(userId = 5518) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},
	getUserProfileStatus(userId = 5518) {
		return instance.get(`profile/status/${userId}`).then(response => response.data);
	},
	updateUserProfileStatus(status) {
		return instance.put(`profile/status/` , {status}).then(response => response.data);
	}
};

export const authAPI = {
	login(email, password, rememberMe = false, captcha = false) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha})
			.then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => response.data);
	},
	me() {
		return instance.get(`auth/me`)
			.then(response => response.data);
	}
};

