import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown"; // ✨ Nama disamakan
import {
  transactions,
  bills as localBills, // ✨ Di-rename jadi localBills agar tidak bentrok dengan state bills
  expensesBreakdowns,
  balances,
  goals as localGoals,
  expensesStatistics,
} from "../data";
import { goalService, billService } from "../services/dataService"; // ✨ Menambahkan import billService
import { AuthContext } from "../Context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function dashboard() {
  const { logout } = useContext(AuthContext); // ✨ Menambahkan deklarasi logout agar tidak error saat terpanggil
  const [goals, setGoals] = useState({});
  const [bills, setBills] = useState([]);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
  try {
    const data = await goalService();
    console.log("Data Goals dari API:", data); // 🔍 Log 1: Cek apakah data masuk
    setGoals(data);
  } catch (err) {
    console.error("Error saat fetch goals:", err); // 🔍 Log 2: Cek apakah ada error API
    setSnackbar({
      open: true,
      message: "Gagal mengambil data goals",
      severity: "error",
    });
    if (err.status === 401 && logout) {
      logout();
    }
  }
};

  const fetchBills = async () => {
    try {
      const data = await billService();
      setBills(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data bills",
        severity: "error",
      });
      if (err.status === 401 && logout) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            {/* ✨ Nama disesuaikan dengan importnya (CardExpenseBreakdown) */}
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default dashboard;