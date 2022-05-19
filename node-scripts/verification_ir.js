const {Token,VerificationCode} = require('sms-ir')
const token = new Token();
const verificationCode = new VerificationCode();

const APIKEY = process.env.apiKey;
const SECRETKEY = process.env.apiSecret;
// const JWT_SECRET = process.env.jwtSecret;

const result = await token.get(APIKEY, SECRETKEY)
console.log(result)

// your code

// when you need to use
const tokenResult = await token.get(APIKEY, SECRETKEY)
const verificationResult = await verificationCode.send(tokenResult, PHONENUMBER, CODE)
console.log(verificationResult)