import { DateTime, DateTimeFormatOptions } from 'luxon';

/**
 * get luxon DateTime either by JS Date object or ISO string
 */
export const getDateTimeByJSDateOrISO = (
  date?: Date | string | null,
): DateTime | undefined => {
  if (!date) {
    return undefined;
  }

  if (typeof date === 'string') {
    return DateTime.fromISO(date);
  }

  return DateTime.fromJSDate(date);
};

/**
 * Used to format date and time strings by respecting system locale
 */
export const getLocaleString = (
  date?: Date | string | null,
  format: DateTimeFormatOptions = DateTime.DATETIME_SHORT,
): string | undefined => {
  const dateTime = getDateTimeByJSDateOrISO(date);

  if (dateTime?.isValid) {
    return dateTime.toLocaleString(format);
  }

  return undefined;
};

export { DateTime };
