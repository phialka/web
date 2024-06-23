localStorage.setItem('lastUserId', 2)
localStorage.setItem('lastTokenAuth', 2)
localStorage.setItem('lastTokenRefresh', 2)

export const users = [{
    user_id: '0',
    name: 'Vadim',
    description: 'backender',
    birthdate: '1756-06-23',
    photo: undefined,
    tag: 'gorvadi',
    login: 'valentine',
    password: 'mega_backender228',
    auth_data: {
        token: '0',
        refresh: '0',
    }
},
{
    user_id: '1',
    name: 'Nikita',
    description: 'frontender',
    birthdate: '2025-12-08',
    photo: undefined,
    tag: 'notdead',
    login: 'ogolknev',
    password: 'i_love_js<3',
    auth_data: {
        token: '1',
        refresh: '1',
    }
}]