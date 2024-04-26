// axios.get(
//     "https://doos.tababa.app/api/v1/users/products/whats_new",
//     {
//       headers: {
//         StoreID: "2",
//         UserAddressID: "72934",
//         "Content-Type": "application/json",
//         "Accept-Language": "en",
//         Language: "en",
//         Authorization: `7beb843ce470d1ed37e763440c893f49`,
//       },
//     }
//   );

import axios from "axios";

axios.defaults.headers = {
  StoreID: "2",
  UserAddressID: "72934",
  "Content-Type": "application/json",
  "Accept-Language": "en",
  Language: "en",
  Authorization: `7beb843ce470d1ed37e763440c893f49`,
};

const getNewProducts = async () => {
  try {
    const response = await axios.get(
      "https://doos.tababa.app/api/v1/users/products/whats_new"
    );

    return response.data.data.items;
  } catch (err) {
    console.log(err);
  }
};

export { getNewProducts };
