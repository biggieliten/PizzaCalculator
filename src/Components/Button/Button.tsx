type Button = {
  //   buttonTitle: string;
  //   ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
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
// "bg-blue text-vanilla w-fit p-2"
