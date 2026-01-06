function Header() {
  return (
    <header style={styles.header}>
      <h1>My App</h1>
      <nav>
        <a href="#" style={styles.link}>
          Home
        </a>
        <a href="#" style={styles.link}>
          About
        </a>
        <a href="#" style={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#282c34",
    color: "white",
  },
  link: {
    marginLeft: "12px",
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
