import { generateExcelReport } from "./src/services/excelService";

generateExcelReport().catch((error) => console.error(error));
