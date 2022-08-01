import { Component, ReactNode } from "react";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";
import { Outlet } from "react-router-dom";

import memoize from "memoize-one";


const ShowItems = WithRouter(
  ShellforServerCall(
    class ShowItemsWithoutRouter extends Component<ItemProps, ItaemState>{
      constructor(props: ItemProps) {
        super(props)
        this.state = {
          filterText: ""
        }
        this.searchInput = this.searchInput.bind(this)
      }
      filter = memoize(
        (list: Array<Item>, filterText: string) => {
          if (list)
            return list.filter(item => item.name.includes(filterText))
        }
      );
      
      searchInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setTimeout(() => this.filterItems(e), 400);
      }
      filterItems(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ filterText: e.target.value })
      }
      render(): ReactNode {
        const { navigate } = this.props
        const filterList = this.filter(this.props.items, this.state.filterText)
        return (
          <div>
            <input type="text" onChange={this.searchInput} />
            {filterList && filterList.map((x) => (
              <div key={x._id}>
                {x.name}  {x.price}
                <button onClick={() => { navigate(`/itemDetailse/${x._id}`)  }}>details</button>
                <button onClick={() => { navigate(`/editItem/${x._id}`, {state: {items: this.props.items}} )}}>edit</button>
              </div>
            ))
            }
            <Outlet />
          </div>
        );
      }
    }, "items"
  )
)

type ItemProps = IItemProps & IWithRouterProps & IShellforServerCall;
type ItaemState = IItemState;
interface IItemProps { }
interface IItemState {
  filterText: string
}

export default ShowItems;



