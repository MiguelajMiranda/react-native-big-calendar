import { ThemeInterface } from './ThemeInterface'

export const defaultTheme: ThemeInterface = {
  isRTL: false,
  palette: {
    primary: {
      main: 'rgb(66, 133, 244)',
      contrastText: '#EDF3FF',
    },
    nowIndicator: '#8AB5FF',
    gray: {
      // 50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      // 400: '#bdbdbd',
      500: '#9e9e9e',
      // 600: '#757575',
      // 700: '#616161',
      800: '#424242',
      // 900: '#212121',
    },
    moreLabel: '#000000',
  },
  eventCellOverlappings: [
    { main: '#E26245', contrastText: '#EDF3FF' }, // orange
    { main: '#4AC001', contrastText: '#EDF3FF' }, // green
    { main: '#5934C7', contrastText: '#EDF3FF' }, // purple
  ],
  typography: {
    xs: {
      fontSize: 10,
    },
    sm: {
      fontSize: 12,
    },
    xl: {
      fontSize: 22,
    },
    moreLabel: {
      fontSize: 11,
      fontWeight: 'bold',
    },
  },
}
