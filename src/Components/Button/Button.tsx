type Button = {
  buttonTitle: string;
  ButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ buttonTitle, ButtonClick }: Button) => {
  return (
    <>
      <button onClick={ButtonClick}>{buttonTitle}</button>
    </>
  );
};

export default Button;
