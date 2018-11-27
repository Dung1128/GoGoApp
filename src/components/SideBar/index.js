import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { translate } from 'react-i18next';
import { Content, Text, ListItem, Left, View } from 'native-base';

import * as authActions from '../../store/actions/auth';
import * as commonActions from '../../store/actions/common';
import { getRouter } from '../../store/selectors/common';
import images from '../../assets/images';
import Icon from '../../elements/Icon';

import options from './options';
import styles from './styles';

const imagePickerOptions = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
@connect(
  state => ({
    router: getRouter(state).current
  }),
  { ...authActions, ...commonActions }
)
@translate('translations')
export default class extends PureComponent {
  onFanProfilePress() {
    const { forwardTo, closeDrawer } = this.props;
    closeDrawer();
    forwardTo('fanProfile');
  }

  _handleSuccessLogout() {
    const { forwardTo, setToast, removeAllCampaign } = this.props;
    // OneSignal.deleteTag("user_id")
    removeAllCampaign();
    forwardTo('login');
    setToast('Logout successfully!!!');
  }

  _handleFailLogout(error) {
    const { forwardTo, setToast, removeAllCampaign } = this.props;
    // OneSignal.deleteTag("user_id")
    removeAllCampaign();
    forwardTo('login');
    setToast(error.msg, 'error');
  }

  navigateTo(route) {
    const { forwardTo, closeDrawer, resetTo } = this.props;
    if (route === 'logout') {
      closeDrawer();
      this.props.Logout();

      setTimeout(() => {
        this.props.logout();
      }, 200);
    } else {
      if (route !== '') {
        forwardTo(route);
      }
    }
  }

  changeAvatar() {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: `data:image/jpeg;base64,${response.data}` };
        Alert.alert(
          'Change Avatar successfull',
          `Pick avatar successfull uri: ${source.uri}`,
          [
            {
              title: 'Ok'
            }
          ]
        );

        // this.setState({
        //   avatarSource: source
        // });
      }
    });
  }

  renderName(name, t) {
    switch (name) {
      case 'Home':
        return `${t('labels.home')}`;
      case 'Notification':
        return t('labels.notification');
      case 'Setting':
        return t('labels.setting');
      default:
        return '...';
    }
  }

  render() {
    const { router, t } = this.props;
    return (
      <Content bounces={false} style={styles.container}>
        <ListItem
          onPress={this.onFanProfilePress.bind(this)}
          style={styles.drawerCover}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.changeAvatar()}
          >
            <Image
              source={images.avatar}
              placeholder={<Icon name="image" style={styles.drawerImage} />}
              style={styles.drawerImage}
            />
          </TouchableOpacity>

          <Text large style={styles.text}>
            Name in sidebar
          </Text>
          <Text small style={styles.text}>
            example@example.com
          </Text>
        </ListItem>
        <View style={styles.listItemContainer}>
          {options.listItems.map((item, index) => {
            const isCurrent = router.routeName === item.route;
            return (
              <ListItem
                noBorder
                key={index}
                button
                onPress={() => this.navigateTo(item.route)}
              >
                <Left>
                  <Icon
                    name={item.icon}
                    style={[styles.icon, isCurrent && { color: '#E3B02B' }]}
                  />
                  <Text
                    style={[styles.iconText, isCurrent && { color: '#E3B02B' }]}
                  >
                    {this.renderName(item.name, t)}
                  </Text>
                </Left>
              </ListItem>
            );
          })}

          <ListItem noBorder button onPress={() => this.navigateTo(`logout`)}>
            <Left>
              <Icon name={'contact'} style={[styles.icon]} />
              <Text style={[styles.iconText]}>{t('labels.logout')}</Text>
            </Left>
          </ListItem>
        </View>
      </Content>
    );
  }
}