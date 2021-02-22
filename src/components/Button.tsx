import React from "react";

type Props = {
  children: any;
  onClick: any;
  href?: any;
};

const Button: React.FC<Props> = ({ children, onClick, href }) => {
  return (
    <button style={styles.container} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

const styles = {
  container: {
    border: "none",
    background: "#3f87e4",
    color: "white",
    borderRadius: 8,
    padding: "8px 20px",
    marginLeft: "20px",
  },
};
