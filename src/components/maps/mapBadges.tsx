import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

import {color} from '../../theme';
import {Icon} from '../icon/Icon';
import {Text} from '../Text';

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.White,
    borderRadius: 8,
    paddingTop: 5,
    paddingRight: 14,
    paddingBottom: 5,
    paddingLeft: 5,
    marginHorizontal: 5,
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
  focus: {
    backgroundColor: color.Blue,
  },
});

const Container = styled.ScrollView`
  position: absolute;
  top: 10px;
`;

const IconWrapper = styled.View<{active: boolean; color: string}>`
  margin-right: 5px;
  background-color: ${props => (props.active ? props.color : color.White)};
  border-width: 1px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border-color: ${props => (props.active ? color.White : props.color)};
`;

type Data = {
  text: string;
  subtitle: string;
  id: string;
  color: string;
};

export const MapBadges: React.FC = () => {
  const {t} = useTranslation();
  const data: Data[] = [
    {
      text: t('restaurantsCafes'),
      subtitle: t('whereToEat'),
      id: 'restaurant',
      color: '#FF933B',
    },
    {
      text: t('api_cat.type.attraction.name'),
      subtitle: t('whereToGo'),
      id: 'attraction',
      color: '#8C7171',
    },

    {
      text: t('institutions'),
      subtitle: t('activeLeisure'),
      id: 'activity',
      color: '#27AE60',
    },
    {
      text: t('api_cat.type.public_place.name'),
      subtitle: t('goodToKnow'),
      id: 'public_place',
      color: '#943FFF',
    },
    {
      text: t('hotelsAndInns'),
      subtitle: t('whereToSleep'),
      id: 'accommodation',
      color: '#EB5757',
    },
  ];

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}>
      {data.map(item => {
        const active = false;
        const handlePress = async () => {};
        return (
          <Pressable
            style={[styles.badge, active && styles.focus]}
            key={item.id}
            onPress={handlePress}>
            <IconWrapper active={active} color={item.color}>
              <Icon
                name={item.id}
                size={15}
                color={active ? color.White : item.color}
              />
            </IconWrapper>
            <View>
              <Text variant="sixteen" color={active ? 'white' : 'primary'}>
                {item.text}
              </Text>
              <Text
                variant="eleven"
                color={active ? 'white1' : 'secondary'}
                mb="2">
                {item.subtitle}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </Container>
  );
};
