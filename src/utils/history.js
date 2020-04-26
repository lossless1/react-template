import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function scrollToTop() {
  window.scrollTo(0, 0);
}
history.listen(scrollToTop);

export { history };
