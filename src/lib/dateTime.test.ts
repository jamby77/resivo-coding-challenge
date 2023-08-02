import { DateTime, Settings } from 'luxon';
import { getLocaleString, getDateTimeByJSDateOrISO } from './dateTime';

Settings.defaultZone = 'Europe/Zurich';
Settings.defaultLocale = 'de';

describe('dateTime', () => {
  describe('getDateTimeByJSDateOrISO', () => {
    it('returns a luxon DateTime when a string is passed', () => {
      const result = getDateTimeByJSDateOrISO('2000-01-01');
      expect(result).toBeInstanceOf(DateTime);
      expect(result?.toISODate()).toEqual('2000-01-01');
    });

    it('returns undefined when undefined is passed', () => {
      expect(getDateTimeByJSDateOrISO(undefined)).toBeUndefined();
    });

    it('returns undefined when null is passed', () => {
      expect(getDateTimeByJSDateOrISO(null)).toBeUndefined();
    });
  });

  describe('getLocaleString', () => {
    it('should handle Date object and return formatted short date string', () => {
      const date = new Date('2023-02-12T14:30:20.124');
      const formattedDate = getLocaleString(date, DateTime.DATE_SHORT);

      expect(formattedDate).toEqual('12.2.2023');
    });

    it('should handle Date object and return formatted short time string', () => {
      const date = new Date('2023-02-12T14:30:20.124');
      const formattedDate = getLocaleString(date, DateTime.TIME_SIMPLE);

      expect(formattedDate).toEqual('14:30');
    });

    it('should handle Date object and return formatted short date and time string', () => {
      const date = new Date('2023-02-12T14:30:20.124');
      const formattedDate = getLocaleString(date, DateTime.DATETIME_SHORT);

      expect(formattedDate).toEqual('12.2.2023, 14:30');
    });

    it('should handle Date object and return formatted short date and time string by default', () => {
      const date = new Date('2023-02-12T14:30:20.124');
      const formattedDate = getLocaleString(date);

      expect(formattedDate).toEqual('12.2.2023, 14:30');
    });

    it('should handle ISO string and return formatted short date and time string', () => {
      const formattedDate = getLocaleString(
        '2023-02-12T14:30:20.124',
        DateTime.DATETIME_SHORT,
      );

      expect(formattedDate).toEqual('12.2.2023, 14:30');
    });

    it('should return `null` when `undefined` date is passed', () => {
      const formattedDate = getLocaleString(undefined);

      expect(formattedDate).toBeUndefined();
    });

    it('should return `null` when `null` date is passed', () => {
      const formattedDate = getLocaleString(null);

      expect(formattedDate).toBeUndefined();
    });

    it('should return `null` when empty string date is passed', () => {
      const formattedDate = getLocaleString('');

      expect(formattedDate).toBeUndefined();
    });
  });
});
