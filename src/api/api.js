import axios from 'axios'
import Login from '../components/Login/Login'

const instanse = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "be5c96f6-d618-4264-9a0a-7fa2d3b5f578"
   }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
       return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
           .then(response => {
               return response.data;
           });
   },
   follow(userId) {
       return instanse.post(`follow/${userId}`)
   },
   unfollow(userId) {
       return instanse.delete(`follow/${userId}`)
   },
   getProfile(userId) {
       console.warn('Obsolete method. Please profileAPI object.')
       return profileAPI.getProfile(userId);
   }
}

export const profileAPI = {
   getProfile(userId) {
       return instanse.get(`profile/` + userId);
   },
   getStatus(userId) {
       return instanse.get(`profile/status/` + userId);
   },
   updateStatus(status) {
       return instanse.put(`profile/status`, { status: status });
   }
}

export const authAPI = {
   me() {
       return instanse.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
       return instanse.post(`auth/login`, { email, password, rememberMe });
   },
   logout() {
       return instanse.delete(`auth/login`);
   }
}

