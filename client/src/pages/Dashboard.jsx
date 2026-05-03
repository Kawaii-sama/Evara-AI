import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setStats(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Total Tasks: {stats.totalTasks}</h3>

      <h3>Completed Tasks: {stats.completedTasks}</h3>

      <h3>Pending Tasks: {stats.pendingTasks}</h3>

      <h3>Overdue Tasks: {stats.overdueTasks}</h3>

    </div>
  );
}

export default Dashboard;