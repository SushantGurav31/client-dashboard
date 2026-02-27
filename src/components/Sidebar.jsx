function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        background: "#334155",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Clients</li>
      </ul>
    </div>
  );
}

export default Sidebar;