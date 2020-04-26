import { matchPath } from 'react-router-dom';

export const isMatch = (pathname, path, isExact = true) => {
  const matched = matchPath(pathname, { path });
  return isExact ? matched && matched.isExact : matched;
};
