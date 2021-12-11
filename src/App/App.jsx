import { Component } from "react";
import { nanoid } from "nanoid";
import Phonebook from "../Phonebook/Phonebook";
import * as storage from "../services/localStorage";

const STORAGE_KEY = "contacts";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = storage.get(STORAGE_KEY);
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save(STORAGE_KEY, contacts);
    }
  }

  getAddContacts = (value) => {
    return this.setState((prevState) => {
      return { contacts: [...prevState.contacts, value] };
    });
  };

  inputValue = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: e.target[0].value,
      number: e.target[1].value,
    };

    e.target[0].value = "";
    e.target[1].value = "";

    if (
      this.state.contacts.find(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    )
      return alert("NO!");
    return this.getAddContacts(contact);
  };

  deleteContact = (id) => {
    return this.setState((prevState) => {
      const newArr = prevState.contacts.filter((contact) => contact.id !== id);
      return { contacts: newArr };
    });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };

  render() {
    return (
      <div>
        <Phonebook
          contacts={this.getFilteredContact()}
          addContact={this.inputValue}
          delContact={this.deleteContact}
          onFilterChange={this.handleFilterChange}
        />
      </div>
    );
  }
}
