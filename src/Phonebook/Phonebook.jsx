import { Component } from "react";
import Contacts from "./Contacts/Contacts";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import s from "./Phonebook.module.scss";

class Phonebook extends Component {
  render() {
    // const { filter } = this.state;
    return (
      <div className={s.wrapper}>
        <h1>Phonebook</h1>
        <Form value={this.props.addContact} />
        <h1>Contacts</h1>
        <Filter
          value={this.props.filter}
          label={"Finde contact by name:"}
          onFilterChange={this.props.onFilterChange}
        />
        <ul>
          <Contacts
            contacts={this.props.contacts}
            delContact={this.props.delContact}
          />
        </ul>
      </div>
    );
  }
}

export default Phonebook;
