export const metadata = {
  title: "Site Under Maintenance | Ziqi Yang",
};

export default function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #fef9fb 0%, #f4cbc6 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem", maxWidth: 520 }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛠️</div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#565676",
            marginBottom: "0.75rem",
          }}
        >
          Site Under Maintenance
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#7a7a9a",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          Thanks for visiting! My website is temporarily offline for updates.
          <br />
          It will be back soon.
        </p>
        <a
          href="mailto:ziqiy30@uci.edu"
          style={{
            display: "inline-block",
            padding: "0.6rem 1.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#f4afab",
            color: "#565676",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
