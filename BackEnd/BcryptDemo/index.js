const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(10); //솔트 숫자를 늘릴수록 처리속도가 느려진다.
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 10)
    console.log(hash);
}

// login 함수
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result) {
        console.log('Logged you In!');
    } else {
        console.log('Try again.')
    }
}

// hashPassword('monkey');
login('monky', '$2b$10$YruXVGPYpYue4NGFf30ige4dhX/qeK7gA95V.Yk0CsgYgyAkye2Om')