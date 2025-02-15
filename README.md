# retino-cases-reports-xls

A simple utility for exporting Retino tickets to Excel format (using [Bun](https://bun.sh) and [ExcelJS](https://github.com/exceljs/exceljs)). Fetches ticket data from Retino API and generates a formatted XLSX report.

## Prerequisites

- [Bun](https://bun.sh) installed
- Retino API token

## Installation

```bash
bun install retino-cases-reports-xls
```

## Setup

1. Create a new file in your project
2. Add your Retino API token:

```typescript
const TOKEN_KEY = "YOUR_TOKEN_KEY";
```

## Usage

```bash
# Run the export
bun start
```

This will generate a `tickets.xlsx` file in your current directory with the following columns:

- ID
- Code
- Order ID
- Type (Complaint/Return)
- Product Name
- Customer Name
- Order Date
- Created At
- Lifetime (days)
- Closed At
- Country

## Development

```bash
# Install dependencies
bun install

# Run the script
bun start

# Run tests
bun test
```

## Dependencies

- exceljs: ^4.4.0
- typescript: ^5.0.0 (peer dependency)
