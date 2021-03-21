import {QueryClient} from 'react-query';
import orderby from 'lodash.orderby';
export const queryClient = new QueryClient();
export const orderQueryData = (queryClient, key, item, order) => {
  dataToSort = queryClient.getQueryData(key);
  queryClient.setQueryData(key, orderby(dataToSort, item, order));
};
