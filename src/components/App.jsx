import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <ContactList />
    </Layout>
  );
};
