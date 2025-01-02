import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import TodoForm from "../components/forms/TodoForm";
import TodoHeader from "../components/layout/header/TodoHeader";
import TodoCard from "../components/cards/TodoCard";

export class HomePage extends Component {
  render() {
    const datas = [
      {
        id: 1,
        name: "Abror",
        surname: "Abduhakimov",
        number: "99-942-52-79",
        category: "family",
      },
      {
        id: 2,
        name: "Sarvar",
        surname: "Abdukarimov",
        number: "94-713-09-07",
        category: "friend",
      },
      {
        id: 3,
        name: "Rasul",
        surname: "Odilov",
        number: "93-942-32-12",
        category: "other",
      },
    ];
    return (
      <Container>
        <h2 className="text-center my-3 fw-bold">CONTACT APP</h2>

        <TodoForm />
        <TodoHeader />

        <Tabs
          fill
          variant="pills"
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            All
          </Tab>
          <Tab eventKey="favorite" title="Favorite">
            Favorite
          </Tab>
        </Tabs>
        <TodoCard />
      </Container>
    );
  }
}

export default HomePage;
