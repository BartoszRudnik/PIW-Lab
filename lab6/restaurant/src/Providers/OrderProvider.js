import { Component, createContext } from "react";
import { firestore } from "../firebase";

export const OrderContext = createContext({ order: null });

class OrderProvider extends Component {
  state = {
    order: null,
  };

  componentDidMount = async () => {
    firestore
      .collection("orders")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const order = [];

          snapshot.forEach((doc) => {
            const data = doc.data();
            order.push(data);
          });

          this.setState({ order });
        }
      })
      .catch((error) => console.error("Error fetching orders", error));
  };

  render() {
    const { order } = this.state;

    return (
      <OrderContext.Provider value={order}>
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export default OrderProvider;
