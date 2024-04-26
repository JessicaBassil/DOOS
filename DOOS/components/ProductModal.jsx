import { ScrollView } from "react-native";
import { Card, Chip, Modal, Text, Title } from "react-native-paper";

const ProductModal = ({
  product,
  visible,
  onDismiss,
  contentContainerStyle,
}) => {
  if (!product) return;
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={contentContainerStyle}
    >
      <Card>
        <Card.Content>
          <Title
            onPress={() => {
              Linking.openURL(article.url);
            }}
          >
            {product.title}
          </Title>
          <Card.Cover source={{ uri: product.images[0]?.large }} />
          <Text style={{ marginTop: 10, marginBottom: 10 }}>
            Qty: {product.quantity}
          </Text>
          <ScrollView horizontal>
            {product.categories.map((category, index) => (
              <Chip
                style={{ marginHorizontal: 5 }}
                mode="flat"
                key={"cat" + index}
              >
                {category.title}
              </Chip>
            ))}
          </ScrollView>
        </Card.Content>
      </Card>
    </Modal>
  );
};

export default ProductModal;
