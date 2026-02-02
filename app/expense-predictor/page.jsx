"use client";
import ExpensePredictor from "@/components/expense-predictor/expense-predictor";

export default function ExpensePredictorPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Expense Predictor</h1>
      <ExpensePredictor />
      <button
        style={{
          background: "#fff",
          color: "#000",
          border: "1px solid #000",
          borderRadius: "12px",
          marginLeft: "10px",
          padding: "10px 20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => window.open("/expense-prediction", "_blank")}
      >
        Expense Prediction
      </button>
    </div>
  );
}
