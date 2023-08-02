import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { getLocaleString, DateTime } from '@/lib/dateTime';

export function AppBarDate() {
  const [currentDate, setCurrentDate] = useState<string | undefined>();

  /**
   * make sure that current date calculation is only executed on client side
   */
  useEffect(() => {
    setCurrentDate(getLocaleString(new Date(), DateTime.DATE_SHORT));
  }, []);

  return (
    <Typography sx={{ ml: 2, color: 'common.black' }}>{currentDate}</Typography>
  );
}
