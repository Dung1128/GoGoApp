import React, { PureComponent } from 'react';
import { Button, Footer, FooterTab, Text, View } from 'native-base';
import { translate } from 'react-i18next';
import Icon from '../../elements/Icon';
import styles from './styles';
import options from './options';
import material from '../../theme/variables/material';

@translate('translations')
export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      route: props.route
    };
  }

  tabClick(route) {
    const { onTabClick } = this.props;
    onTabClick && onTabClick(this.state.type, route);
  }

  show(type, route) {
    this.setState({ type, route });
  }

  renderName(name, t) {
    switch (name) {
      case 'forYou':
        return t('labels.forYou');
      case 'news':
        return t('labels.news');
      case 'notifications':
        return t('labels.notification');
      case 'booking':
        return t('labels.booking');
      case 'user':
        return t('labels.user');
    }
  }

  renderFooterTabs(route) {
    const { t } = this.props;
    return (
      <View style={styles.viewBottom}>
        <Footer>
          <FooterTab>
            {options.footerItems.map((item, index) => {
              const isActivated = route === item.route;
              return (
                <Button
                  key={index}
                  transparent
                  style={styles.footer}
                  onPress={this.tabClick.bind(this, item.route)}
                >
                  <Icon
                    name={item.icon}
                    style={[
                      styles.icon,
                      isActivated && { color: material.airPrimaryColor }
                    ]}
                  />
                  <Text
                    style={{
                      color: isActivated ? material.airPrimaryColor : '#838383',
                      fontSize: material.textTiny,
                      textAlign: 'center'
                    }}
                  >
                    {this.renderName(item.name, t)}
                  </Text>
                </Button>
              );
            })}
          </FooterTab>
        </Footer>
      </View>
    );
  }

  render() {
    const { type, route } = this.state;
    // event will be invoke via pageInstance
    switch (type) {
      case 'none':
        return false;
      default:
        return this.renderFooterTabs(route);
    }
  }
}
