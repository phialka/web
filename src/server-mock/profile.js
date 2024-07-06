import { users } from './data_base'


export function mockProfileCreate(requestBody) {

    const record = {
        user_id: localStorage.getItem('lastUserId'),
        name: requestBody.name,
        description: requestBody.description,
        birthdate: requestBody.birthdate,
        photo: undefined,
        tag: requestBody.tag,
        login: requestBody.login,
        password: requestBody.password
    }

    localStorage.setItem('lastUserId', Number(localStorage.getItem('lastUserId')) + 1)

    users.push(record)
    console.log(users)
}

export function mockProfileGet(requestHeaders) {
    const user = users.find((user) => requestHeaders.auth_data.token == user.auth_data.token)

    return {
        user_id: user.user_id,
        name: user.name,
        description: user.description,
        birthdate: user.birthdate,
        photo: user.photo
    }
}