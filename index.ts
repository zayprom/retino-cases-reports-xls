import { createExcel } from "./src/services/excelService";

createExcel().catch((error) => console.error(error));
