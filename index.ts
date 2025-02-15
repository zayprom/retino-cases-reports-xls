import { generateExcelReport } from "./src/services/excelService";
import { fetchTickets } from "./src/services/api";

async function main() {
  try {
    const response = fetchTickets;
    await generateExcelReport(response.results);
  } catch (error) {
    console.error("Error in main process:", error);
  }
}

main();
