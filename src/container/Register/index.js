import React from 'react';
import { TextInput, Image } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as authActions from '../../store/actions/auth';
import * as commonActions from '../../store/actions/common';
import styles from '../Login/styles';
import CustomButton from '../../components/CustomButton';
import material from '../../theme/variables/material';
import image from '../../assets/images';

@connect(
  null,
  {
    ...commonActions,
    ...authActions
  }
)
@translate('translations')
export default class Register extends React.PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={{ marginTop: material.paddingHeader }}>
            <Text style={styles.subTitle}>{t(`labels.email`)}</Text>
            <View style={styles.viewInput}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputField}
                placeholder={t(`labels.email`)}
              />
            </View>
            <Text style={styles.subTitle}>{t(`labels.password`)}</Text>
            <View
              style={{
                ...styles.viewInput,
                marginBottom: material.paddingSmall
              }}
            >
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputField}
                placeholder={t(`labels.password`)}
                secureTextEntry={true}
              />
            </View>
            <Text style={styles.subTitle}>{t(`labels.rePassword`)}</Text>
            <View
              style={{
                ...styles.viewInput,
                marginBottom: material.paddingSmall
              }}
            >
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.inputField}
                placeholder={t(`labels.rePassword`)}
                secureTextEntry={true}
              />
            </View>

            <CustomButton
              style={{
                ...styles.btnLogin,
                marginVertical: material.paddingNormal
              }}
              onPress={() => console.log('register')}
              requestKey="login"
              text={t('labels.register')}
              upperCase={false}
              textStyle={styles.textLogin}
              buttonType="border"
            />
          </View>
        </Content>
      </Container>
    );
  }
}
