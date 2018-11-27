import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BackHandler,
  UIManager,
  StatusBar,
  View,
  Platform
} from 'react-native';
import { Drawer, StyleProvider, Container } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import Navigator from './components/Navigator';
import Header from './components/Header';
import Footer from './components/Footer';
import AfterInteractions from './components/AfterInteractions';
import Toasts from './components/Toasts';
import SideBar from './components/SideBar';
import Browser from './components/Browser';
import Gallery from './components/Gallery';

import Preload from './container/Preload';

import getTheme from './theme/components';
import material from './theme/variables/material';

import { getDrawerState, getRouter } from './store/selectors/common';
import * as commonActions from './store/actions/common';
import * as accountActions from './store/actions/account';
import * as notificationActions from './store/actions/notification';

import routes from './routes';

const getPage = route => {
  const match = routes[route.routeName];
  match && Object.assign(match, route);
  return match;
};

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

@connect(
  state => ({
    router: getRouter(state),
    isPlayingGallery: state.ui.gallery.isPlaying,
    drawerState: getDrawerState(state)
  }),
  { ...commonActions, ...accountActions, ...notificationActions }
)
export default class App extends Component {
  constructor(props) {
    super(props);

    this.firstTime = true;
    this.pageInstances = new Map();
  }

  // componentWillMount() {
  //   OneSignal.init('fbbebc8a-b14c-478c-8c2e-0712260203cd');

  //   OneSignal.addEventListener('received', this.onReceived);
  //   OneSignal.addEventListener('opened', this.onOpened);

  //   OneSignal.addEventListener('ids', this.onIds);
  //   OneSignal.inFocusDisplaying(2);
  // }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { router, goBack, isPlayingGallery, closeGallery } = this.props;
      // close gallery if exist
      if (isPlayingGallery) {
        closeGallery();
        return true;
      }
      // exit app
      if (router.stack.length === 0) {
        return false;
      }
      // go back
      goBack();
      return true;
    });

    SplashScreen.hide();
  }

  _logout() {
    if (this.extraNavigator) {
      this.extraNavigator.clearAllScenes();
    }
  }

  handleShowHeaderFooter(ref, footerType, routeName) {
    if (!ref) {
      return;
    }
    let element = ref;
    let whatdog = 10;
    while (element._reactInternalFiber && whatdog > 0) {
      if (element.show) {
        element.show(footerType, routeName);
        break;
      }
      element =
        element._reactInternalFiber.child &&
        element._reactInternalFiber.child.stateNode;
      whatdog--;
    }
  }

  // replace view from stack, hard code but have high performance
  componentWillReceiveProps({ router, drawerState }) {
    // process for route change only
    if (router.current.routeName !== this.props.router.current.routeName) {
      const route = getPage(router.current);
      if (route) {
        // show header and footer, and clear search string
        this.navigator.navigate(route);
        // this.header.show(route.headerType, route.title);
        this.handleShowHeaderFooter(this.header, route.headerType, route.title);
        // this.footer.show(route.footerType, route.routeName);
        this.handleShowHeaderFooter(
          this.footer,
          route.footerType,
          route.routeName
        );
      } else {
        // no need to push to route
        this.props.setToast(
          `Scene not found: ${router.current.routeName}`,
          'danger'
        );
      }
    }

    // check drawer
    if (drawerState !== this.props.drawerState) {
      this.drawer._root[drawerState === 'opened' ? 'open' : 'close']();
    }
  }

  // we handle manually to gain performance
  shouldComponentUpdate() {
    return false;
  }

  _transitionScene = (prevIndex, index, thisNavigator) => {
    thisNavigator.enable(prevIndex, false);
    thisNavigator.transitionBetween(prevIndex, index, 0);
    thisNavigator.enable(index);
  };

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this.onReceived);
  //   OneSignal.removeEventListener('opened', this.onOpened);
  //   OneSignal.removeEventListener('ids', this.onIds);
  // }

  // onReceived(notification) {
  //   console.log('Notification received: ', notification);
  // }

  // onOpened(openResult) {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);
  // }

  // onIds(device) {
  //   console.log('Device info: ', device);
  // }

  // we can use events to pass between header and footer and page via App container or store
  _renderPage = route => {
    const component = (
      <AfterInteractions
        firstTime={this.firstTime}
        placeholder={route.Preload || <Preload />}
      >
        <route.Page
          route={route}
          app={this}
          ref={ref => this.pageInstances.set(route.routeName, ref)}
        />
      </AfterInteractions>
    );

    this.firstTime = false;
    return component;
  };

  _onLeftClick = type => {
    const { openDrawer, goBack } = this.props;
    switch (type) {
      case 'none':
        return false;
      case 'back':
      case 'searchBack':
        return goBack();
      default:
        return openDrawer();
    }
  };

  _onTabClick = (type, route) => {
    const { forwardTo } = this.props;
    switch (type) {
      case 'none':
        return false;
      default:
        return forwardTo(route);
    }
  };

  handleFocusableComponent(ref, focus = true) {
    if (!ref) {
      return;
    }
    // do not loop forever
    let element = ref;
    const method = focus ? 'componentWillFocus' : 'componentWillBlur';
    let whatdog = 10;
    while (element._reactInternalFiber && whatdog > 0) {
      if (element[method]) {
        element[method]();
        break;
      }
      element =
        element._reactInternalFiber.child &&
        element._reactInternalFiber.child.stateNode;
      whatdog--;
    }
  }

  _handlePageWillBlur = ({ routeName, cache }) => {
    if (cache)
      this.handleFocusableComponent(this.pageInstances.get(routeName), false);
    else this.pageInstances.delete(routeName);
  };

  _handlePageWillFocus = route => {
    this.handleFocusableComponent(
      this.pageInstances.get(route.routeName),
      true
    );
  };

  render() {
    const { router, drawerState, closeDrawer, openDrawer } = this.props;
    const route = getPage(router.current) || routes.notFound;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <MyStatusBar
            backgroundColor={material.colorDark2}
            barStyle="light-content"
          />
          <Drawer
            ref={ref => (this.drawer = ref)}
            open={drawerState === 'opened'}
            type="displace"
            negotiatePan
            tweenDuration={300}
            tweenEasing="easeOutCubic"
            useInteractionManager
            content={<SideBar Logout={this._logout.bind(this)} />}
            onClose={closeDrawer}
            onOpen={openDrawer}
          >
            <Header
              type={route.headerType}
              title={route.title}
              onLeftClick={this._onLeftClick}
              onItemRef={ref => (this.header = ref)}
            />

            <Navigator
              onRef={ref => (this.extraNavigator = ref)}
              ref={ref => (this.navigator = ref)}
              initialRoute={route}
              renderScene={this._renderPage}
              onFocus={this._handlePageWillFocus}
              onBlur={this._handlePageWillBlur}
              transition={this._transitionScene}
              Logout={this._logout.bind(this)}
            />

            <Footer
              type={route.footerType}
              route={route.routeName}
              onTabClick={this._onTabClick}
              ref={ref => (this.footer = ref)}
            />

            <Toasts />
          </Drawer>
          <Gallery />
          <Browser />
        </Container>
      </StyleProvider>
    );
  }
}

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = {
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
};
