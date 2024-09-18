import "./Btn.css";

const Btn = ({ title, icon, clickEvent }) => {
  return (
    <>
      <button onClick={clickEvent} className="boton-elegante font-Vazir">
        {title}
        <span className="mr-4">{icon}</span>
      </button>
    </>
  );
};

export default Btn;
