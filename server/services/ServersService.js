/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* servers List servers to be checked
* returns List
* */
const serversGET = ({ servers }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        servers,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  serversGET,
};
