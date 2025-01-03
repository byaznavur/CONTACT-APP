import React, { Component, createRef } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import TodoForm from "../components/forms/TodoForm";
import TodoHeader from "../components/layout/header/TodoHeader";
import TodoCard from "../components/cards/TodoCard";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.searchRef = createRef();
    this.state = {
      activeTab: "all",
      datas: [
        {
          id: 1,
          name: "Abror",
          surname: "Abduhakimov",
          number: "99-942-52-79",
          category: "family",
          isFaforite: true,
        },
        {
          id: 2,
          name: "Sarvar",
          surname: "Abdukarimov",
          number: "94-713-09-07",
          category: "friend",
          isFaforite: false,
        },
        {
          id: 3,
          name: "Rasul",
          surname: "Odilov",
          number: "93-942-32-12",
          category: "other",
          isFaforite: false,
        },
      ],
    };
  }

  render() {
    const { activeTab, datas } = this.state;

    const handleSearch = () => {
      // console.log(this.searchRef.current.value);
    };

    const changeTab = (key) => {
      this.setState({ activeTab: key });
    };
    const submit = (e) => {
      console.log(e);
    };
    const favorites = datas.filter((data) => data.isFaforite);

    return (
      <Container>
        <h2 className="text-center my-3 fw-bold">CONTACT APP</h2>

        <TodoForm submit={submit} />
        <TodoHeader handleSearch={handleSearch} searchRef={this.searchRef} />

        <Tabs
          fill
          variant="pills"
          activeKey={activeTab}
          onSelect={changeTab}
          id="uncontrolled-tab-example"
          className="mb-3 w-50 m-auto"
        >
          <Tab eventKey="all" title="All">
            {datas.map((data, i) => (
              <TodoCard {...data} key={i} />
            ))}
          </Tab>
          <Tab eventKey="favorite" title="Favorite">
            <div>
              {favorites.map((data, i) => (
                <TodoCard {...data} key={i} />
              ))}
            </div>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default HomePage;
