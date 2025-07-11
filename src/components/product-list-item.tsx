import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { Product } from '../../assets/types/product';
import { Link } from 'expo-router';

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.slug}`} asChild>
      <Pressable style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>{product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  item: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemImageContainer: {
    borderRadius: 10,
    width: '100%',
    height: 150,
  },
  itemTextContainer: {
    padding: 8,
    gap: 4,
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontSize: 16,
    color: '#888',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
