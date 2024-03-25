type Button = {
  //   buttonTitle: string;
  //   ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

const Button = ({ children, ButtonClick }: Button) => {
  return (
    <>
      <button className="bg-blue text-vanilla" onClick={ButtonClick}>
        {children}{" "}
      </button>
    </>
  );
};

export default Button;
