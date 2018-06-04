const address = '0xE314023527cd7fb8E9bBD67508580bE9fFfF0C04';
const smartAbiData = '[{"constant":true,"inputs":[],"name":"minEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registeredUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_minEther","type":"uint256"}],"name":"setMinEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"ban","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_minEther","type":"uint256"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"},{"indexed":true,"name":"_user","type":"address"}],"name":"NewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"BanUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"},{"indexed":true,"name":"_user","type":"address"}],"name":"Withdraw","type":"event"}]'

const contract = window.web3.eth.contract(JSON.parse(smartAbiData)).at(address);
window.con = contract;
export default contract;
// contract.minEther((e, r) => console.log(r.c[0]));