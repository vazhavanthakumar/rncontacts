import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loading}>Loading...</Text>}
      <View>
        <Image
          onLoadStart={onLoadStart}
          onError={onError}
          onLoadEnd={onLoadEnd}
          style={styles.detailPhoto}
          source={
            src ? {uri: src} : require('../../assets/images/no_image.jpg')
          }
        />
      </View>
    </View>
  );
};

export default ImageComponent;
