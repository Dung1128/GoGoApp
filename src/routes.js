import Home from './container/Home';
import Search from './container/Search';
import Notification from './container/Notification';
import Setting from './container/Setting';
import Login from './container/Login';
import Register from './container/Register';
import Booking from './container/Booking';
import News from './container/News';
import User from './container/User';
import Map from './container/Map';

export default {
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'none',
    footerType: 'home',
    cache: true
  },
  search: {
    title: 'Search',
    Page: Search,
    headerType: 'back',
    footerType: 'none'
  },
  notification: {
    title: 'Notification',
    Page: Notification,
    headerType: 'back',
    footerType: 'home'
  },
  notFound: {
    title: 'home',
    Page: Home,
    headerType: 'none',
    footerType: 'none',
    cache: true
  },
  setting: {
    title: 'Setting',
    Page: Setting,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  login: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none',
    cache: false
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'back',
    footerType: 'none',
    cache: false
  },
  user: {
    title: 'User',
    Page: User,
    headerType: 'back',
    footerType: 'home',
    cache: false
  },
  booking: {
    title: 'Booking',
    Page: Booking,
    headerType: 'none',
    footerType: 'home',
    cache: false
  },
  news: {
    title: 'News',
    Page: News,
    headerType: 'back',
    footerType: 'home',
    cache: false
  },
  maps: {
    title: 'Map',
    Page: Map,
    headerType: 'none',
    footerType: 'none',
    cache: false
  }
};
