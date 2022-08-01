import { Component } from "react";
import './App.css';
import AppRouter from "./app/app-router";
import { Item } from "./items/types";

class App extends Component<AppProps, AppState>{
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

type AppProps = IAppProps
type AppState = IAppState
interface IAppProps { }
interface IAppState { items?: Array<Item> }

export default App;


