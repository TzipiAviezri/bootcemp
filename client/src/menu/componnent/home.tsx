import { Component } from "react";
import { Outlet } from "react-router-dom";
import ShowItems from "../../items/componnent/show-items";


class Home extends Component<HomeProps, HomeState>{
  constructor(props: HomeProps) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <ShowItems />
        <Outlet />
      </div>
    );
  }
}

type HomeProps = IHOmeProps;
type HomeState = IHOmeState
interface IHOmeProps { }
interface IHOmeState { }

export default Home;
