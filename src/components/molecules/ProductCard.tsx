import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from '../atoms/TextComponent';
import Button from '../atoms/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, onDelete }) => {
  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <TextComponent>{name}</TextComponent>
      </View>
      <View style={styles.column}>
        <TextComponent>${price.toFixed(2)}</TextComponent>
      </View>
      <View style={styles.column}>
        <Button title="Delete" onPress={handleDelete} color="#dc3545" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ProductCard;