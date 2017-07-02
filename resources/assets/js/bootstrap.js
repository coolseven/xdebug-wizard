
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
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 *
 * Note:
 * Register the XSRFToken as a common header with Axios
 * Instead of CSRFToken(in the meta section of the page)(Laravel's default)
 * Thus we don't have to care about the meta section of the page
 */
let XSRFToken = jsCookie.get('XSRF-TOKEN');
if (XSRFToken) {
    axios.defaults.headers.common['X-XSRF-TOKEN'] = XSRFToken.content;
} else {
    console.error('XSRF token not found!');
}



