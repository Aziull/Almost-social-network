import axios from 'axios'

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
    },
    savePhoto(photoFile) {
        var formData = new FormData();
        formData.append('iamge', photoFile)
        return instanse.put("profile/photo/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instanse.put('profile', profile);
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanse.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instanse.get(`security/get-captcha-url`)
    }
}

