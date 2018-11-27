import { unionBy } from 'lodash';
import React from 'react';
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import { translate } from 'react-i18next';
import { Container, Content, Text } from 'native-base';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import Contacts from 'react-native-contacts';
import HeaderCustom from '../../components/HeaderCustom';
import Preload from '../Preload';
import material from '../../theme/variables/material';
import styles from './styles';
import ItemTicket from './ItemTicket';
import ItemNew from './ItemNew';

@translate('translations')
export default class extends React.Component {
  state = {
    loading: false,
    hasMore: true,
    paginate: 20,
    start: 0,
    imageArray: [
      {
        photo_url:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        photo_url:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        photo_url:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        photo_url:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      }
    ],
    arrayTicket: [
      {
        name: 'Vietnam',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'VietJet',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'Saigon',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'Vietnam',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'VietJet',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'Saigon',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        name: 'Saigon',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      }
    ],
    newsArray: [
      {
        title: 'Chém chết người vì đòi nợ không trả.',
        read: '100',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        title: 'Chém chết người vì đòi nợ không trả.',
        read: '100',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        title: 'Chém chết người vì đòi nợ không trả.',
        read: '100',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      },
      {
        title: 'Chém chết người vì đòi nợ không trả.',
        read: '100',
        img:
          'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
      }
    ],

    loadingSpiner: false
  };

  componentDidMount() {}

  renderSlideImage(photoUrl, index) {
    return (
      <Image
        key={index}
        style={styles.imageDemo}
        resizeMode="cover"
        source={{ uri: photoUrl }}
      />
    );
  }

  _renderDotIndicator(x) {
    return <PagerDotIndicator pageCount={x} />;
  }

  renderTitle(name, more) {
    return (
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>{name}</Text>
        <TouchableOpacity activeOpacity={0.5} transparent>
          <Text style={styles.textMore}>{more}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderItemTicket(data) {
    return <ItemTicket data={data} />;
  }

  renderItemTicketToday(data) {
    return <ItemTicket data={data} />;
  }

  renderItemNews(data) {
    return <ItemNew data={data} />;
  }

  render() {
    const { data, loading } = this.state;
    const { t } = this.props;
    if (loading) {
      return <Preload />;
    }

    return (
      <Container>
        <HeaderCustom
          onPress={() => console.log('search')}
          text="Booking.com"
          textStyle={{}}
        />
        <Content>
          {this.state.imageArray.length > 0 ? (
            <View>
              <IndicatorViewPager
                style={styles.imageDemo}
                indicator={this._renderDotIndicator(
                  this.state.imageArray.length
                )}
              >
                {this.state.imageArray.map((item, index) =>
                  this.renderSlideImage(item.photo_url, index)
                )}
              </IndicatorViewPager>
            </View>
          ) : null}
          <View style={styles.container}>
            {this.renderTitle(t('labels.ticketPopular'), t('labels.more'))}
            <FlatList
              style={styles.listTicket}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.arrayTicket}
              keyExtractor={(item, index) => index + '.'}
              renderItem={this.renderItemTicket.bind(this)}
            />
            {this.renderTitle(t('labels.cheapTickets'), t('labels.more'))}
            <FlatList
              numColumns={3}
              showsVerticalScrollIndicator={false}
              style={styles.listTicketToday}
              showsHorizontalScrollIndicator={false}
              data={this.state.arrayTicket}
              keyExtractor={(item, index) => index + '.'}
              renderItem={this.renderItemTicketToday.bind(this)}
            />
            {this.renderTitle(t('labels.newPopular'), t('labels.more'))}
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.listTicketToday}
              showsHorizontalScrollIndicator={false}
              data={this.state.newsArray}
              keyExtractor={(item, index) => index + '.'}
              renderItem={this.renderItemNews.bind(this)}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
