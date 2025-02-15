import ExcelJS from "exceljs";
import { formatDate, calculateDaysDifference } from "../utils/dateUtils";
import { type ResultsType } from "../types";
import { response } from "./api";

export async function createExcel() {
  const results: ResultsType[] = response.results;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Tickets");

  if (results && results.length > 0) {
    worksheet.columns = [
      { header: "ID", key: "id", width: 20 },
      { header: "Code", key: "code", width: 20 },
      { header: "Order ID", key: "order_id", width: 20 },
      { header: "type", key: "type", width: 20 },
      { header: "Product Name", key: "product_name", width: 20 },
      { header: "Customer Name", key: "customer_name", width: 20 },
      { header: "Order Date", key: "order_date", width: 20 },
      { header: "Created At", key: "created_at", width: 20 },
      { header: "Lifetime", key: "lifetime", width: 20 },
      { header: "Closed At", key: "closed_at", width: 20 },
      { header: "Country", key: "country", width: 10 },
    ];

    results.forEach((row) => {
      if (row.type === "fb21dbfe-00f5-4197-8f66-d2b7006b020b") {
        row.type = "Reklamace";
      } else if (row.type === "7eaa311a-42ab-47e1-8a79-0081d9136aac") {
        row.type = "Vratka";
      }

      const orderDate = new Date(row.order_date);
      const createdDate = new Date(row.created_at);
      const closed_at = row.closed_at ? new Date(row.closed_at) : null;

      // Format dates to DD.MM.YYYY
      row.order_date = formatDate(orderDate);
      row.created_at = formatDate(createdDate);
      row.closed_at = closed_at ? formatDate(closed_at) : "Not closed";

      const daysDifference = calculateDaysDifference(orderDate, createdDate);

      worksheet.addRow({
        id: row.id,
        code: row.code,
        order_id: row.order_id,
        type: row.type,
        product_name: row.products.map((product) => product.name).join(", "),
        customer_name: row.customer.name,
        order_date: row.order_date,
        created_at: row.created_at,
        lifetime: `${daysDifference}`,
        closed_at: row.closed_at,
        country: row.country,
      });
    });

    await workbook.xlsx.writeFile("tickets.xlsx");
    console.log("Excel file created successfully");
  }
}
