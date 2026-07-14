import React, { useState } from "react";
import "./Dashboard.css";

const stats = [
  { label: "Total Revenue", value: "$48,290", change: "+12.4%", trend: "up" },
  { label: "Orders", value: "1,284", change: "+8.1%", trend: "up" },
  { label: "Customers", value: "932", change: "+3.6%", trend: "up" },
  { label: "Refund Rate", value: "1.8%", change: "-0.4%", trend: "down" },
];

const weeklySales = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 51 },
  { day: "Thu", value: 74 },
  { day: "Fri", value: 89 },
  { day: "Sat", value: 96 },
  { day: "Sun", value: 63 },
];

const topProducts = [
  { name: "Wireless Earbuds Pro", sales: 312, revenue: "$9,360", share: 82 },
  { name: "Minimalist Backpack", sales: 248, revenue: "$7,440", share: 65 },
  { name: "Ceramic Pour-Over Set", sales: 190, revenue: "$5,700", share: 50 },
  { name: "Desk Lamp — Walnut", sales: 134, revenue: "$4,020", share: 35 },
];

const recentOrders = [
  { id: "#8172", customer: "Maya Chen", product: "Wireless Earbuds Pro", amount: "$89.00", status: "Fulfilled" },
  { id: "#8171", customer: "Daniel Osei", product: "Desk Lamp — Walnut", amount: "$64.00", status: "Processing" },
  { id: "#8170", customer: "Priya Nair", product: "Minimalist Backpack", amount: "$120.00", status: "Fulfilled" },
  { id: "#8169", customer: "Liam Foster", product: "Ceramic Pour-Over Set", amount: "$45.00", status: "Pending" },
  { id: "#8168", customer: "Sara Kim", product: "Wireless Earbuds Pro", amount: "$89.00", status: "Fulfilled" },
];

const navItems = [
  { label: "Overview", icon: "◆" },
  { label: "Orders", icon: "▤" },
  { label: "Products", icon: "▣" },
  { label: "Customers", icon: "◍" },
  { label: "Settings", icon: "⚙" },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const maxSales = Math.max(...weeklySales.map((d) => d.value));

  return (
    <div className="dash-wrapper">

      <main className="dash-main">
        <header className="dash-header">
          <div>
            <h1>Sales Overview</h1>
            <p>Welcome back — here's how your store is performing.</p>
          </div>
          <div className="dash-header-actions">
            <input
              type="text"
              className="dash-search"
              placeholder="Search orders, products..."
            />
            <button className="dash-export-btn">Export</button>
          </div>
        </header>

        <section className="dash-stats-grid">
          {stats.map((stat) => (
            <div className="dash-stat-card" key={stat.label}>
              <div className="dash-stat-label">{stat.label}</div>
              <div className="dash-stat-value">{stat.value}</div>
              <div className={`dash-stat-change ${stat.trend}`}>
                {stat.trend === "up" ? "▲" : "▼"} {stat.change} vs last week
              </div>
            </div>
          ))}
        </section>

        <section className="dash-content-grid">
          <div className="dash-panel dash-chart-panel">
            <div className="dash-panel-header">
              <h2>Weekly Sales</h2>
              <span className="dash-panel-sub">Units sold per day</span>
            </div>
            <div className="dash-bar-chart">
              {weeklySales.map((d) => (
                <div className="dash-bar-col" key={d.day}>
                  <div className="dash-bar-track">
                    <div
                      className="dash-bar-fill"
                      style={{ height: `${(d.value / maxSales) * 100}%` }}
                    >
                      <span className="dash-bar-tooltip">{d.value}</span>
                    </div>
                  </div>
                  <span className="dash-bar-label">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-panel dash-products-panel">
            <div className="dash-panel-header">
              <h2>Top Products</h2>
              <span className="dash-panel-sub">By revenue this month</span>
            </div>
            <ul className="dash-product-list">
              {topProducts.map((p) => (
                <li className="dash-product-item" key={p.name}>
                  <div className="dash-product-info">
                    <span className="dash-product-name">{p.name}</span>
                    <span className="dash-product-sales">{p.sales} sold</span>
                  </div>
                  <div className="dash-product-bar-track">
                    <div
                      className="dash-product-bar-fill"
                      style={{ width: `${p.share}%` }}
                    ></div>
                  </div>
                  <span className="dash-product-revenue">{p.revenue}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dash-panel dash-orders-panel">
          <div className="dash-panel-header">
            <h2>Recent Orders</h2>
            <span className="dash-panel-sub">Last 24 hours</span>
          </div>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="dash-order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span
                      className={`dash-status dash-status-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}