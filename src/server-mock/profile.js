import mockAuth from "./auth"
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

    const response = {
        auth_data: mockAuth({login: record.login, password: record.password}),
        profile: {
            user_id: record.user_id,
            name: record.name,
            description: record.description,
            birthdate: record.birthdate,
            photo: record.photo
        }
    }

    return response
}