import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from 'connected-react-router';

const history = createBrowserHistory();

const routerReducer = connectRouter(history);
const routerMiddleware = createRouterMiddleware(history);

function scrollToTop() {
  window.scrollTo(0, 0);
}
history.listen(scrollToTop);

export { history, routerReducer, routerMiddleware };
