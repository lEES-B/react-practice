import { Component } from "react";

class Content extends Component {
    render() {
        let data = this.props.data;
        let lists = [];
        for (let i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}> {data[i].title}</a>
                </li>,
            );
        }
        const style = {
            fontSize: "20px",
        };
        return (
            <main>
                <ul style={style}>{lists}</ul>
            </main>
        );
    }
}

export default Content;
