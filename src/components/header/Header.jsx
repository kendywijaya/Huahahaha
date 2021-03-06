/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import Button from "../button/Button";
// import styles from "./header.module.css";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 css={styles.headerTitle}>Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
