import React, { Component, ReactNode } from "react";
import ShellforServerCall, { IShellforServerCall } from "../../app/server-calls/shell";
import WithRouter, { IWithRouterProps } from "../../app/with-router"
import { Item } from "../types";


const ItemForm = WithRouter(
  ShellforServerCall(
    class ItemFormWithout extends Component<EditOrAddItemProps, EditOrAddItemState>{
      constructor(props: EditOrAddItemProps) {
        super(props)
        this.state = {
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
      }
      handleFormChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const newItem: Item = { ...this.state.item! }
        switch (e.target.name) {
          case ("name"):
            newItem.name = e.target.value
            this.setState({ item: newItem });
            break;
          case ("price"):
            newItem.price = +e.target.value
            this.setState({ item: newItem })
        }
      }
      handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        this.props.OnSubmitDoing()
        this.props.navigate("/Data")
      }
      render(): ReactNode {
       
      const items:Array<Item> = this.props.items ? this.props.items : []
        
        const item: Item = items.find(x => x._id === +this.props.params.id!)!
        return (
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" placeholder="name" value={item?.name} onChange={this.handleFormChange} name="name" />
            <input type="number" placeholder="price" value={item?.price} onChange={this.handleFormChange} name="price" />
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }, "items"
  )
)

type EditOrAddItemProps = ItemFormProps & IWithRouterProps & IShellforServerCall
type EditOrAddItemState = ItemFormState
interface ItemFormProps {
  OnSubmitDoing: (params?: any) => void
}
interface ItemFormState {
  item?: Item
}

export default ItemForm
