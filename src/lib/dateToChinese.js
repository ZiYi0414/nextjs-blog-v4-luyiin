export const dateToChinese = dateStr => {
  const dayArr = [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日'
  ];
  const newDay = new Date(dateStr).getDay();
  const dateArr = dateStr.split('-');
  return `${dateArr[1]}月${dateArr[2]}日 · ${dayArr[newDay]}`;
};
