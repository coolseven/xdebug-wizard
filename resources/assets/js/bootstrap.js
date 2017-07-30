
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import jsCookie from 'js-cookie';
import axios from 'axios';

/**
 * Register the XSRFToken as a common header with Axios.
 *
 * Note:
 * We use XSRFToken instead of CSRFToken (Laravel's default)
 * So that we don't have to care about the meta section of the page
 */
let XSRFToken = jsCookie.get('XSRF-TOKEN');
if (XSRFToken) {
    axios.defaults.headers.common['X-XSRF-TOKEN'] = XSRFToken.content;
} else {
    console.error('XSRF token not found!');
}



