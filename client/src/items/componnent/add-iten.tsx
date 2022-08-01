import { Component, ReactNode } from "react";
import { Add } from "../../app/server-calls/function";
import { Item } from "../types";
import ItemForm from "./item-form";


class AddItem extends Component<AddItemProps, AddItemState> {
    constructor(props: AddItemProps) {
        super(props)
        this.state = {}
        this.AddItem = this.AddItem.bind(this)
    }
    AddItem(item: Item): void {
        Add("items", item)
    }
    render(): ReactNode {
        return (
            <div>
                add Item
                <ItemForm OnSubmitDoing={this.AddItem}></ItemForm>
            </div>
        )
    }

}

type AddItemProps = IAddItemProps
type AddItemState = IAddItemState
interface IAddItemProps { 
    items: Array<Item>
}
interface IAddItemState { }

export default AddItem
