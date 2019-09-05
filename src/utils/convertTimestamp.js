const convertTimestamp = timestamp => {
  const date = new Date(timestamp * 1000);
  let day = date.getUTCDate();

  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthArray[date.getUTCMonth()];

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
