import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../atoms/InputField';
import ProductList from '../organisms/ProductList';
import { Product } from '../../store/productsSlice';
import Button from '../atoms/Button';

interface MainTemplateProps {
  productName: string;
  setProductName: (text: string) => void;
  productPrice: string;
  setProductPrice: (text: string) => void;
  handleAddProduct: () => void;
  products: Product[];
  handleDeleteProduct: (id: string) => void;
  isAddingProduct: boolean;
  setIsAddingProduct: (text: boolean) => void;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  handleAddProduct,
  products,
  handleDeleteProduct,
  isAddingProduct,
  setIsAddingProduct,
}) => {
  return (
    <View style={styles.container}>
            {!isAddingProduct && (
        <Button title="Add Product" onPress={() => setIsAddingProduct(true)} />
      )}
      {isAddingProduct && (
        <>
          <InputField
            placeholder="Product Name"
            value={productName}
            onChangeText={setProductName}
          />
          <InputField
            placeholder="Product Price"
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
          />
          <Button title="Submit" onPress={handleAddProduct} />
        </>
      )}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
});

export default MainTemplate;