import { useRouterHistory } from 'react-router';

import { createHistory } from 'history'; // eslint-disable-line import/no-extraneous-dependencies

const history = useRouterHistory(createHistory)({
    basename: '/',
});

export default history;
