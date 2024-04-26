import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getNewProducts } from "./utils/ServerCalls";
import {
  ActivityIndicator,
  Button,
  DataTable,
  Modal,
  PaperProvider,
} from "react-native-paper";
import ProductModal from "./components/ProductModal";
import Pagination from "./components/Pagination";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState();
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const containerStyle = {
    padding: 20,
  };
  const currency = "SR"; //Saudi Rial
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getNewProducts();
      setCurrentProducts(products.slice(page * itemsPerPage, itemsPerPage));
      setLoading(false);
      setProducts(products);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // !loading to avoid initial entry
    !loading &&
      setCurrentProducts(
        products.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
      );
    setCurrentProduct(null);
  }, [page]);

  return (
    <PaperProvider>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title></DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Price</DataTable.Title>
              </DataTable.Header>
            </DataTable>

            {currentProducts.map((product, index) => (
              <DataTable.Row
                onPress={() => {
                  setCurrentProduct(product);
                }}
                key={index}
              >
                <DataTable.Cell>
                  <Image
                    source={{ uri: product.images[0]?.thumbnail }}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </DataTable.Cell>
                <DataTable.Cell>{product.title}</DataTable.Cell>
                <DataTable.Cell>
                  {product.price} {currency}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <Pagination
              setPage={setPage}
              page={page}
              itemsPerPage={itemsPerPage}
              products={products}
            />
          </ScrollView>
        )}
      </SafeAreaView>
      <ProductModal
        visible={currentProduct}
        onDismiss={() => {
          setCurrentProduct(false);
        }}
        contentContainerStyle={containerStyle}
        product={currentProduct}
      />
    </PaperProvider>
  );
}
