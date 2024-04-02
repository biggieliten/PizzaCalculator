type Button = {
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonTitle: string;
  styling: string;
};

const Button = ({ ButtonTitle, ButtonClick, styling }: Button) => {
  return (
    <>
      <button className={styling} onClick={ButtonClick}>
        {ButtonTitle}{" "}
      </button>
    </>
  );
};

export default Button;
