import { Component, ReactNode } from "react";
import ShellforServerCall, { IShellforServerCall } from "../../app/server-calls/shell";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";


const ItemDetails = WithRouter(
  ShellforServerCall(
    class ItemDetailsWithoutRouter extends Component<ItemDetailsProps, ItemStateProps> {
      constructor(props: ItemDetailsProps) {
        super(props);
        const itemFromServer: Array<Item> = this.props.items
        this.state = {
          item: itemFromServer.find(x => x._id === +this.props.params.id!)!
        }
      }
      render(): ReactNode {
        const { navigate } = this.props
        const { item } = this.state
        return (
          <div>
            <button onClick={() => { navigate("/") }} >X</button>
            <br />
            id: {item._id}
            <br />
            name: {item.name}
            <br />
            price: {item.price}
          </div>
        );
      }

    }, "items")
)

type ItemDetailsProps = IWithRouterProps & IItemDetailsProps & IShellforServerCall
type ItemStateProps = IItemDetailsStase
interface IItemDetailsProps { }
interface IItemDetailsStase {
  item: Item
}

export default ItemDetails;

