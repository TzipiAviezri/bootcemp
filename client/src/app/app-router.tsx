import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Menu from "../menu/componnent/menu";
import Home from "../menu/componnent/home";
import Data from "../menu/componnent/data";
import ItemDetailsWithRouter from "../items/componnent/item-details";
import EditItem from "../items/componnent/edit-item";
import AddItem from "../items/componnent/add-iten";
import NotDefindeMenuChild from "../menu/componnent/not-definde-menu-child";


class AppRouter extends Component<AppRouterProps, AppRouterState>{
    render() {
        return (
            <div >
                <Router>
                    <Routes>
                        <Route path='/' element={<Menu />} key="menu" children={[
                            <Route path='/' element={<Home />} key="home" />,
                            <Route path="/Data" element={<Data />} key="data" />,
                            <Route path='/itemDetailse/:id' element={<ItemDetailsWithRouter />} key="itemDetailse" />,
                            <Route path='/editItem/:id' element={<EditItem items={[]} />} key="editItem" />,
                            <Route path="/addItem"
                                element={<AddItem  items={[]} />}
                                key="addItem" />,
                            <Route path="/notDefindeMenuChild" element={<NotDefindeMenuChild />} key="notDefindeMenuChild" />
                        ]} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

type AppRouterProps = IAppRouterProps
type AppRouterState = IAppRouterState
interface IAppRouterProps { }
interface IAppRouterState { }

export default AppRouter;
