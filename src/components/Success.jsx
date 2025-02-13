// eslint-disable-next-line react/prop-types
function Success({ setAppState, AppStates }) {
  const formResetHandler = () => {
    localStorage.setItem("isFormSubmitted", false);
    // eslint-disable-next-line react/prop-types
    setAppState(AppStates.FormState);
  };

  return (
    <div>
      <img src="./assets/iamges/__Iphone-spinner-1.gif" alt="Loading" width="50" height="50">
      //<p>Success</p>
      <button onClick={formResetHandler}>Fill Form Again</button>
    </div>
  );
}

export default Success;
