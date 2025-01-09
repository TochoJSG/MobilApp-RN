import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import React from 'react';
import { Colors, SIZE } from '../../constants';
import styles from './carousel.style.js';

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
        <View style={ styles.carouselContainer }>
            <SliderBox 
                images = { slides }
                dotColor = { Colors.primary }
                inactiveDotColor = { Colors.secondary }
                imageLoadingColor = "#FF5733"
                ImageComponentStyle = {{ borderRadius:SIZE.small, width:'95%', marginTop:16 }}
                autoplay
                circleLoop
            />
        </View>
    )
};
/*
ImageComponentStyle = {{ }}
*/
export default Carousel;


