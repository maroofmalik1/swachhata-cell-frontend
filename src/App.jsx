import Form from "./components/Form";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div>
      <img src={logo} alt="Swachh Survekshan Survey" height="100" width="350" />
      <Form />
      <hr />
    </div>
  );
};

export default App;
