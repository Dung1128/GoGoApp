import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import i18n from '../../utils/i18n';
import * as authSelectors from '../../store/selectors/auth';
import * as settingSelectors from '../../store/selectors/setting';
import * as settingActions from '../../store/actions/setting';
import styles from './styles';
import material from '../../theme/variables/material';

const mapStateToProps = state => ({
  language: settingSelectors.getLanguage(state),
  languages: settingSelectors.getLanguages(state),
  token: authSelectors.getToken(state)
});

const actions = {
  ...settingActions
};

@translate('translations')
@connect(
  mapStateToProps,
  actions
)
export default class Setting extends Component {
  getLanguages(locales) {
    i18n.changeLanguage(locales);
    this.props.changeLanguage(locales);
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <Content
          enableResetScrollToCoords={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.optionSelect}>
            <TouchableOpacity
              onPress={() => this.getLanguages('en')}
              activeOpacity={0.5}
              style={styles.itemLanguage}
            >
              <Text style={styles.textTitle}>{t('labels.english')}</Text>
              {this.props.language === 'vi' ? (
                <IconMaterialIcons
                  name="radio-button-unchecked"
                  style={{ ...styles.styleIcon, color: material.colorBorder }}
                />
              ) : (
                <IconMaterialIcons
                  name="radio-button-checked"
                  style={styles.styleIcon}
                />
              )}
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              onPress={() => this.getLanguages('vi')}
              activeOpacity={0.5}
              style={styles.itemLanguage}
            >
              <Text style={styles.textTitle}>{t('labels.vietnamese')}</Text>
              {this.props.language === 'vi' ? (
                <IconMaterialIcons
                  name="radio-button-checked"
                  style={styles.styleIcon}
                />
              ) : (
                <IconMaterialIcons
                  name="radio-button-unchecked"
                  style={{ ...styles.styleIcon, color: material.colorBorder }}
                />
              )}
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
