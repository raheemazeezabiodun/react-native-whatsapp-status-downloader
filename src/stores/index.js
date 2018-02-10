import { DEV_MODE } from '../constants';

if (DEV_MODE) {
    module.exports = require('./configurestore.dev'); // eslint-disable-line global-require
} else {
    module.exports = require('./configurestore.prod'); // eslint-disable-line global-require
}