import { HistoryGrouping, HistoryListItem } from '../models';

export const getGroupedHistoryListItems = (items: HistoryListItem[]): HistoryGrouping[] => {
  const groupedMap = groupHistoryListItems(items);
  return getHistoryGroupingsFromMap(groupedMap);
};

const groupHistoryListItems = (list: HistoryListItem[]): Map<string, HistoryListItem[]> => {
  const map: Map<string, HistoryListItem[]> = new Map();
  list.forEach((item) => {
    const key = getDateFromHistoryListItem(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const getHistoryGroupingsFromMap = (map: Map<string, HistoryListItem[]>): HistoryGrouping[] => {
  let groupings: HistoryGrouping[] = [];
  map.forEach((value: HistoryListItem[], key: string) => {
    const newGrouping = <HistoryGrouping>{
      date: key,
      historyItems: value
    };
    groupings = [...groupings, newGrouping];
  });
  return groupings;
};

const getDateFromHistoryListItem = (item: HistoryListItem): string => {
  const date = new Date(item.startTime);
  return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();
};
