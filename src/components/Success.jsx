// eslint-disable-next-line react/prop-types
function Success({ setAppState, AppStates }) {
  const formResetHandler = () => {
    localStorage.setItem("isFormSubmitted", false);
    // eslint-disable-next-line react/prop-types
    setAppState(AppStates.FormState);
  };

  return (
    <div>
      <p>Success</p>
      <button onClick={formResetHandler}>Fill Form Again</button>
    </div>
  );
}

export default Success;
