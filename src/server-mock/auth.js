import { users } from './data_base'

export function mockAuth(requestBody) {
    const user_i = users.findIndex((user) => requestBody.login == user.login)
    const user = users[user_i]

    
    
    if (user && user.password == requestBody.password) {

        const response = {
            token: localStorage.getItem('lastTokenAuth'),
            refresh: localStorage.getItem('lastTokenRefresh')
        }
        
        localStorage.setItem('lastTokenAuth', Number(localStorage.getItem('lastTokenAuth')) + 1)
        localStorage.setItem('lastTokenRefresh', Number(localStorage.getItem('lastTokenRefresh')) + 1)
        
        users[user_i].auth_data = response
        return response
    }
    else {
        console.error('401 - Ошибка аутентификации')
    }
}

export function mockAuthRefresh(requestBody) {
    const user = users.find((user) => requestBody.refresh == user.auth_data.refresh)
    if (user) {
        return mockAuth({login: user.login, password: user.password})
    }
    else {
        console.error('401 - Ошибка аутентификации')
    }
}   

