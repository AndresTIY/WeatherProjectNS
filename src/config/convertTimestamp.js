const convertTimestamp = timestamp => {
  const date = new Date(timestamp * 1000);
  console.log('');
  let day = date.getUTCDate();

  const monthPairs = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  const month = monthPairs[date.getUTCMonth()];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayOfWeek = days[date.getDay()];

  switch (day) {
    case day >= 11 && day <= 13:
      day = day + 'th';
      break;
    default:
      switch (day % 10) {
        case 1:
          day = day + 'st';
          break;
        case 2:
          day = day + 'nd';
          break;
        case 3:
          day = day + 'rd';
          break;
        default:
          day = day + 'th';
          break;
      }
  }

  return {month, day, dayOfWeek};
};

export default convertTimestamp;
