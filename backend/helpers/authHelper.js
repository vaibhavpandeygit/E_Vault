const bcrypt = require('bcrypt')

const hashPassword =async(password)=>{
    try {
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword;
    } catch (error) {
        console.log("error in hashPassword fun",error)
    }
}

const comparePassword=(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}

module.exports = {hashPassword,comparePassword}