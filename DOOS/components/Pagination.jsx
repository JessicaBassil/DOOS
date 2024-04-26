import { View } from "react-native";
import { Button } from "react-native-paper";

const Pagination = ({ setPage, page, itemsPerPage, products }) => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Button
        style={{ width: "40%" }}
        icon={"step-backward"}
        disabled={page === 0}
        onPress={() => {
          setPage(page - 1);
        }}
      >
        Back
      </Button>
      <Button
        style={{ width: "40%" }}
        icon={"step-forward"}
        disabled={page + 1 === products.length / itemsPerPage}
        onPress={() => {
          setPage(page + 1);
        }}
      >
        Next
      </Button>
    </View>
  );
};

export default Pagination;
