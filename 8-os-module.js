const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime is seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), 
  freeMem: os.freemem()
}
console.log(currentOS);