import { Component, ReactNode } from "react";
import { Edit } from "../../app/server-calls/function";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import { Item } from "../types";
import ItemForm from "./item-form";


const EditItem = WithRouter(
    class EditItemWithoutRouter extends Component<EditItemProps, EditItemState> {
        constructor(props: EditItemProps) {
            super(props)
            this.state = {}
            this.EditItem = this.EditItem.bind(this)
        }
        EditItem(): void {
            Edit("items", this.props.params.id!)
        }
        render(): ReactNode {
            // console.log(this.props.location?.state!.items)

            const { params } = this.props
            return (
                <div>
                    id: {params.id}
                    {/* <ItemForm OnSubmitDoing={this.EditItem}></ItemForm> */}
                </div>
            )
        }
    }
)

type EditItemProps = IEditItemProps & IWithRouterProps
type EditItemState = IEditItemState
interface IEditItemProps {
    items: Array<Item>
}
interface IEditItemState { }

export default EditItem
