import { Component } from "react";
import { Outlet } from "react-router-dom";
import WithRouter, { IWithRouterProps } from "../../app/with-router";
import ShowItems from "../../items/componnent/show-items";

const Data = WithRouter(
    class DataWithoutRouter extends Component<DataProps, DataState>{
        constructor(props: DataProps) {
            super(props);
            this.state = {}
        }

        render() {
            const { navigate } = this.props
            return (
                <div>
                    <button onClick={() => { navigate("/addItem") }}>add item</button>
                    <ShowItems />
                    <Outlet />
                </div>
            );
        }
    }
)

type DataProps = IDataProps & IWithRouterProps;
type DataState = IDataState
interface IDataProps { }
interface IDataState { }

export default Data;
