import "./App.css";
import data from "./data.json";
import CardComponent from "./components/card/cardComponent";
import { Component } from "react";
class App extends Component {
    constructor() {
        super();
        this.state = { listItem: [] };
    }
    componentDidMount() {
        this.setState({ listItem: data });
    }
    render() {
        const { listItem } = this.state;
        return (
            <div className="App">
                {listItem.map((item, index) => (
                    <CardComponent key={index} item={item} />
                ))}
            </div>
        );
    }
}
export default App;
