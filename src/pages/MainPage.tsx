import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../store/productsSlice';
import { RootState } from '../store';
import MainTemplate from '../components/templates/MainTemplate';
import { StyleSheet, View, Alert } from 'react-native';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

const MainPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const handleAddProduct = useCallback(() => {
    if (productName && productPrice) {
      dispatch(
        addProduct({
          id: generateUniqueId(),
          name: productName,
          price: parseFloat(productPrice),
        })
      );
      setProductName('');
      setProductPrice('');
      setIsAddingProduct(false);
    } else if (!productName || !productPrice) {
      Alert.alert('Validation Error', 'You must fill both of fields');
      return;
    }
  }, [productName, productPrice, dispatch]);

  const handleDeleteProduct = useCallback((id: string) => {
    dispatch(removeProduct(id));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header title="Products List" />
      <MainTemplate
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        handleAddProduct={handleAddProduct}
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        isAddingProduct={isAddingProduct}
        setIsAddingProduct={setIsAddingProduct}
      />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const generateUniqueId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

export default MainPage;
