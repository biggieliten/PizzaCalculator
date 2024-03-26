type Button = {
  //   buttonTitle: string;
  //   ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonTitle: string;
};

const Button = ({ ButtonTitle, ButtonClick }: Button) => {
  return (
    <>
      <button className="bg-blue text-vanilla" onClick={ButtonClick}>
        {ButtonTitle}{" "}
      </button>
    </>
  );
};

export default Button;
