export default function Footer(props) {
  const { handleToggleModal, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOP PROJECT</h1>
        <h2>{data?.title || "No Title Available"}</h2>
        <p>{data?.explanation || "No Description Available"}</p>
        
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
