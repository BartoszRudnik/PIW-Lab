import { Component, createContext } from "react";
import { firestore } from "../firebase";

export const PizzaContext = createContext({ pizza: null });

class PizzaProvider extends Component {
  state = {
    pizza: null,
  };

  componentDidMount = async () => {
    firestore
      .collection("pizzas")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const pizza = [];

          snapshot.forEach((doc) => {
            const data = doc.data();
            pizza.push(data);
          });

          this.setState({ pizza });
        }
      })
      .catch((error) => console.error("Error fetching pizzas", error));
  };

  render() {
    const { pizza } = this.state;

    return (
      <PizzaContext.Provider value={pizza}>
        {this.props.children}
      </PizzaContext.Provider>
    );
  }
}

export default PizzaProvider;
