import React, { Component, createRef } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import TodoForm from "../components/forms/TodoForm";
import TodoHeader from "../components/layout/header/TodoHeader";
import TodoCard from "../components/cards/TodoCard";
import { v4 } from "uuid";
import { toast } from "react-toastify";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.searchRef = createRef();
    this.state = {
      activeTab: "all",
      selected: null,
      category: "all",
      search: "",
      validated: false,
      datas: JSON.parse(localStorage.getItem("datas")) || [
        {
          id: 1,
          name: "Abror",
          surname: "Abduhakimov",
          number: "99-942-52-79",
          category: "family",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Sarvar",
          surname: "Abdukarimov",
          number: "94-713-09-07",
          category: "friends",
          isFavorite: false,
        },
        {
          id: 3,
          name: "Rasul",
          surname: "Odilov",
          number: "93-942-32-12",
          category: "other",
          isFavorite: false,
        },
        {
          id: 4,
          name: "Shahnoza",
          surname: "Karimova",
          number: "97-345-67-89",
          category: "family",
          isFavorite: true,
        },
        {
          id: 5,
          name: "Murod",
          surname: "Eshonov",
          number: "91-876-54-32",
          category: "family",
          isFavorite: false,
        },
        {
          id: 6,
          name: "Dilshod",
          surname: "Qodirov",
          number: "95-234-56-78",
          category: "friends",
          isFavorite: true,
        },
        {
          id: 7,
          name: "Gulnora",
          surname: "Tojiboyeva",
          number: "90-987-65-43",
          category: "family",
          isFavorite: false,
        },
        {
          id: 8,
          name: "Otabek",
          surname: "Jalilov",
          number: "99-123-45-67",
          category: "other",
          isFavorite: true,
        },
        {
          id: 9,
          name: "Zuhra",
          surname: "Mamatqulova",
          number: "98-765-43-21",
          category: "relatives",
          isFavorite: false,
        },
        {
          id: 10,
          name: "Davron",
          surname: "Nazarov",
          number: "93-456-78-90",
          category: "friend",
          isFavorite: true,
        },
      ],

      data: {
        name: "",
        surname: "",
        number: "",
        category: "",
        isFavorite: false,
      },
    };
  }

  render() {
    const { activeTab, datas, data, selected, search, category, validated } =
      this.state;

    const handleSearch = () => {
      this.setState({
        search: this.searchRef.current.value.trim().toLowerCase(),
      });
    };

    const changeTab = (key) => {
      this.setState({ activeTab: key });
    };
    const submit = (e) => {
      e.preventDefault();

      if (e.target.checkValidity()) {
        let newData = { ...data, id: v4() };
        let newDatas;
        if (selected === null) {
          newDatas = [...datas, newData];
          toast.success("Add new contact !");
        } else {
          newDatas = datas.map((data) => {
            if (data.id === selected) {
              return newData;
            }
            return data;
          });
          toast.info("Edit this contact !");
        }
        localStorage.setItem("datas", JSON.stringify(newDatas));
        this.setState({
          datas: newDatas,
          data: {
            name: "",
            surname: "",
            number: "",
            category: "",
            isFavorite: false,
          },
          selected: null,
          validated: false,
        });
      } else {
        this.setState({ validated: true });
      }
    };
    let allDatas = datas.filter((data) =>
      data.name.toLowerCase().includes(search)
    );

    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    if (category !== "all") {
      allDatas = allDatas.filter((data) => data.category === category);
    }
    const favorites = allDatas.filter((data) => data.isFavorite);
    const handleData = (e) => {
      console.log(e.target.id);
      console.log(e.target.value);

      this.setState({ data: { ...data, [e.target.id]: e.target.value } });
    };

    const handleFavorite = (id) => {
      let newDatas = datas.map((data) => {
        if (data.id === id) {
          data.isFavorite = true;
        }
        return data;
      });

      this.setState({ datas: newDatas });
      localStorage.setItem("datas", JSON.stringify(newDatas));
    };

    const handleDelete = (id) => {
      let newDatas = datas.filter((data) => data.id !== id);
      this.setState({ datas: newDatas });
      localStorage.setItem("datas", JSON.stringify(newDatas));
    };

    const handleEdit = (id) => {
      this.setState({ selected: id });
      let data = datas.find((data) => data.id === id);
      this.setState({ data });
    };
    return (
      <Container>
        <h2 className="text-center my-3 fw-bold">CONTACT APP</h2>

        <TodoForm
          data={data}
          submit={submit}
          selected={selected}
          validated={validated}
          handleData={handleData}
        />
        <TodoHeader
          category={category}
          searchRef={this.searchRef}
          handleSearch={handleSearch}
          handleCategory={handleCategory}
        />

        <Tabs
          fill
          variant="pills"
          activeKey={activeTab}
          onSelect={changeTab}
          id="uncontrolled-tab-example"
          className="mb-3 w-50 m-auto"
        >
          <Tab eventKey="all" title="All">
            <div>
              {allDatas.map((data, i) => (
                <TodoCard
                  handleDelete={handleDelete}
                  handleFavorite={handleFavorite}
                  handleEdit={handleEdit}
                  {...data}
                  key={i}
                />
              ))}
            </div>
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
