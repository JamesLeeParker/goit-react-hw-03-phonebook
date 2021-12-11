export default function Contacts({ contacts, delContact }) {
  const btnDelete = (e) => {
    const elemId = e.target.closest("li").getAttribute("id");
    return delContact(elemId);
  };

  return contacts.map(({ id, name, number }) => {
    return (
      <li id={id} key={id}>
        <span>{name}</span>: <span>{number}</span>
        <button type="button" onClick={btnDelete}>
          delete
        </button>
      </li>
    );
  });
}
