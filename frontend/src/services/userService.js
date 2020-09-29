
var users = [
    {
        _id:'1',
        userName: 'elad',
        userAge: 32,
        userWight: 95,
        userPassword: '123',
        userMail: 'elad@gmail.com',
        userProfileImg: 'www.ddd.ddd'
    },
    {
        _id:'2',
        userName: 'omrit',
        userAge: 34,
        userWight: 65,
        userPassword: '123',
        userMail: 'omrit@gmail.com',
        userProfileImg: 'www.ddd.ddd'
    },
]


async function login(userDetails) {
    const currUser = users.map(user.userMail === userDetails.userMail &&
        user.userPassword === userDetails.userPassword)
    return currUser
}

async function logout() {
    return {}
}

async function signup(userDetails) {
    users.unshift(userDetails)
    return userDetails
}

async function updateUser(userDetails) {
    const idx = users.findIdx(user => user.userMail === userDetails.userMail)
    user[idx] = userDetails
    return userDetails
}

