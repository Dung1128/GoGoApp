import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { isIphoneX } from 'react-native-iphone-x-helper';
import numeral from 'numeral';
import moment from 'moment';
import { resetTo, forwardTo } from './src/store/actions/common';
import i18n from './src/utils/i18n';
import App from './src/App';
import localesResource from './src/assets/locales';
import { CHANGE_LANGUAGE } from './src/constants/types';
import Preload from './src/container/Preload';
import { configStore } from './src/store';

import material from './src/theme/variables/material';

const SafeView = ({ children }) => {
  const isiphoneX = isIphoneX();
  if (isiphoneX) {
    return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
  }
  return children;
};

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    configStore(store => {
      const { router, auth } = store.getState();
      const state = store.getState();
      // store.dispatch(resetTo('home'));
      console.log(auth.loggedIn);
      const firstRoute = auth.loggedIn ? 'home' : 'maps';
      if (
        auth.loggedIn &&
        router.current &&
        router.current.routeName &&
        __DEV__
      ) {
        store.dispatch(
          forwardTo(router.current.routeName, { ...router.current.params })
        );
      } else {
        store.dispatch(resetTo(firstRoute));
        // store.dispatch(forwardTo(router.current.routeName, { ...router.current.params }));
      }

      // init i18n
      i18n.init({
        fallbackLng: 'en',
        lng: state.setting.language,
        ns: ['translations'],
        defaultNS: 'translations',
        resources: localesResource,
        debug: true,

        // interpolation: {
        //   escapeValue: false, // not needed for react!!
        //   format(value, format, lng) {
        //     switch (format) {
        //       case 'uppercase':
        //         return value.toUpperCase();
        //       default:
        //         if (typeof value === 'number')
        //           return numeral(value).format(format);
        //         if (value instanceof Date) return moment(value).format(format);
        //         return value;
        //     }
        //   }
        // },
        react: {
          wait: true
        }
      });

      i18n.on('languageChanged', lng => {
        const currentLanguage = state.setting.language;
        if (currentLanguage !== lng) {
          store.dispatch({
            type: CHANGE_LANGUAGE,
            payload: lng
          });
        }
      });

      this.store = store;
      this.setState({ isLoading: false }, () => this.forceUpdate());
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  store = null;

  render() {
    if (!this.store || this.state.isLoading) {
      return (
        <SafeView>
          <Preload />
        </SafeView>
      );
    }
    return (
      <Provider store={this.store}>
        <SafeView>
          <App />
        </SafeView>
      </Provider>
    );
  }
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: material.safeAreaBackground
  }
};
console.disableYellowBox = true;

AppRegistry.registerComponent('GoGoApp', () => Root);
