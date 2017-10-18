const moment = require.requireActual('moment');

// mock fixed point in time
export default (timestamp = 0) => {
  return moment(timestamp);
};
