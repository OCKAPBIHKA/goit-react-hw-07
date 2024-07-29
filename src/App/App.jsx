import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSelectors";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.header}>Phone book</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading... Please wait</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
