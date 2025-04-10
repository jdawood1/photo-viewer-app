import React from 'react';
import { LogBox, SafeAreaView, StyleSheet, Button, Image } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux';
import { Album, Title, URL, ThumbnailURL } from './components/Album/StyledText';
import { addPhoto } from './redux/photos/actions';

LogBox.ignoreAllLogs(true);

const photosMap = {
  first: {
    id: 100,
    albumId: 1,
    album: 'Solitude Trails',
    title: 'Edge of Light',
    url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=60',
  },
  second: {
    id: 101,
    albumId: 1,
    album: 'Modern Living',
    title: 'Evening Welcome',
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=60',
  },
  third: {
    id: 102,
    albumId: 1,
    album: 'Coastal Serenity',
    title: 'Morning Tides',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60',
  },
};

const InnerApp = () => {
  const photos = useSelector((state) => state.photos.photos);
  const currentPhoto = photos.length > 0 ? photos[photos.length - 1] : {};
  const dispatch = useDispatch();
  const photoKeys = ['first', 'second', 'third'];
  const [index, setIndex] = React.useState(0);
  const [cycled, setCycled] = React.useState(false);

  const handleAddPhoto = () => {
    const key = photoKeys[index];
    dispatch(addPhoto(photosMap[key]));

    const nextIndex = index + 1;
    if (nextIndex >= photoKeys.length) {
      setCycled(true);
    }

    setIndex(nextIndex % photoKeys.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Album>{currentPhoto.album}</Album>
      <Title>{currentPhoto.title}</Title>
      <URL>{currentPhoto.url}</URL>
      <ThumbnailURL>{currentPhoto.thumbnailUrl}</ThumbnailURL>

      {currentPhoto.thumbnailUrl && (
        <Image
          source={{ uri: currentPhoto.thumbnailUrl }}
          style={styles.image}
        />
      )}

      <Button
        title={cycled ? 'Next' : 'Add Photo'}
        onPress={handleAddPhoto}
      />
    </SafeAreaView>
  );
};

const App = () => (
  <Provider store={store}>
    <InnerApp />
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 12,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});


