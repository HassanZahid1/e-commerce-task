import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ProductCard from '../molecules/ProductCard';
import { Product } from '../../store/productsSlice';

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ListEmptyComponent: React.FC = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>No products available</Text>
  </View>
);

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard
      id={item.id}
      name={item.name}
      price={item.price}
      onDelete={onDelete}
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
      contentContainerStyle={products.length === 0 ? styles.emptyList : undefined}
      ListEmptyComponent={ListEmptyComponent}  // Pass the component by reference
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    fontStyle: 'italic',
  },
});

export default ProductList;