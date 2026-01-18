import { FilePlus, FileText, LayoutDashboard, Zap } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px" }}>Welcome to ContractX</h1>
        <p style={{ fontSize: "16px", color: "#6b7280", marginTop: "8px" }}>
          Create, manage, and track contracts with ease using a modern workflow.
        </p>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div className="stat-card">
          <h3>Blueprints</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>12</p>
        </div>

        <div className="stat-card">
          <h3>Contracts</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>48</p>
        </div>

        <div className="stat-card">
          <h3>Active Users</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>6</p>
        </div>

        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>92%</p>
        </div>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}
      >
        <div className="card">
          <FilePlus size={28} color="#4f46e5" />
          <h3>Create Blueprints</h3>
          <p style={{ color: "#6b7280" }}>
            Design reusable contract templates with custom fields.
          </p>
        </div>

        <div className="card">
          <FileText size={28} color="#4f46e5" />
          <h3>Generate Contracts</h3>
          <p style={{ color: "#6b7280" }}>
            Quickly create contracts from your saved blueprints.
          </p>
        </div>

        <div className="card">
          <LayoutDashboard size={28} color="#4f46e5" />
          <h3>Track Progress</h3>
          <p style={{ color: "#6b7280" }}>
            Monitor contract status and lifecycle in one dashboard.
          </p>
        </div>

        <div className="card">
          <Zap size={28} color="#4f46e5" />
          <h3>Fast & Secure</h3>
          <p style={{ color: "#6b7280" }}>
            Built with modern tech for speed, security, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
