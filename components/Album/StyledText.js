import glamorous from 'glamorous-native';

export const Album = glamorous.text({
  fontSize: 18,
  color: '#000', // Black or dark
  marginBottom: 4,
});

export const Title = glamorous.text({
  fontSize: 24,
  color: '#333', // Dark gray
  fontWeight: 'bold',
  marginBottom: 6,
});

export const URL = glamorous.text({
  fontSize: 12,
  color: '#888', // Lighter gray
  marginBottom: 2,
});

export const ThumbnailURL = glamorous.text({
  fontSize: 12,
  color: '#5a9', // Different color (like greenish-blue)
  marginBottom: 10,
});

