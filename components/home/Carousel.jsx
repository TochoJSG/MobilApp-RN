import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors, SIZE } from '../../constants';

const Carousel = () => {
  const slides = [
    "https://tochamateriasprimas.com/imagenes/productos/6/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/7/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/8/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/10/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/11/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/14/principal.jpg",
    "https://tochamateriasprimas.com/imagenes/productos/15/principal.jpg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        autoplay
        loop
        dotColor={Colors.secondary}
        activeDotColor={Colors.primary}
        autoplayTimeout={3}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: slide }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    height:125,
    position:'relative',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZE.small,
  },
  image: {
    width: '95%',
    height: 117,
    borderRadius: SIZE.small,
  },
});

export default Carousel;