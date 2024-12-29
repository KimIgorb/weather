function unix(dt: number, type: "week" | "day" | "month") {
  const milliseconds = dt * 1000;
  const data = new Date(milliseconds);

  let result =
    type == "month"
      ? data.toLocaleString("ru-RU", { month: "long" })
      : type == "week"
      ? data.toLocaleString("ru-RU", { weekday: "long" })
      : type == "day"
      ? data.toLocaleString("ru-RU", { day: "numeric" })
      : "";

  return result;
}

export function formatDay(dt: number) {
  let day = unix(dt, "day");
  return day;
}

export function formatWeek(dt: number) {
  let weekDay = unix(dt, "week");
  if (weekDay == "понедельник") {
    return "Пн";
  } else if (weekDay == "вторник") {
    return "Вт";
  } else if (weekDay == "среда") {
    return "Ср";
  } else if (weekDay == "четверг") {
    return "Чт";
  } else if (weekDay == "пятница") {
    return "Пт";
  } else if (weekDay == "суббота") {
    return "Сб";
  } else if (weekDay == "воскресенье") {
    return "Вс";
  } else {
    return weekDay;
  }
}

export function formatMonth(dt: number) {
  let month = unix(dt, "month");
  if (month == "январь") {
    return "янв";
  } else if (month == "февраль") {
    return "фев";
  } else if (month == "март") {
    return "мар";
  } else if (month == "апрель") {
    return "апр";
  } else if (month == "май") {
    return "май";
  } else if (month == "июнь") {
    return "июнь";
  } else if (month == "июль") {
    return "июль";
  } else if (month == "август") {
    return "авг";
  } else if (month == "сентябрь") {
    return "сен";
  } else if (month == "октябрь") {
    return "окт";
  } else if (month == "ноябрь") {
    return "нояб";
  } else if (month == "декабрь") {
    return "дек";
  } else {
    return month;
  }
}

export function descriptionImage (description: string) {
  if(description === 'ясно') {
    return '/sun.svg'
  } else if (description === 'небольшой дождь и солце') {
    return '/rain-sun.svg'
  } else if (description === 'дождь') {
    return '/rain.svg'
  } else if (description === 'небольшой дождь') {
    return '/small-rain.svg'
  } else {
    return '/cloud.svg'
  }
}
