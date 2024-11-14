/*
 * --- ABOUT ABSTRACT FACTORY METHOD ---
 *
 * Abstract Factory Method is a creational design pattern that provides an interface for creating group of related
 * objects without specifying their concrete classes, basically it's a factory of factories.
 * thanks to that approach, the code depends on abstractions (interfaces) rather than on concrete classes.
 * As a result we don't have to change the code when we add a new type of some factory, so it's keeping the "open for extension but closed for modification" SOLID principle.
 */

/*
 * --- BRIEF EXPLANATION OF EXAMPLE: ---
 *
 * This is example of Abstract Factory Method pattern
 * example is made for Report Generation System
 * that can create different types of reports
 * for different departments
 */

/**
 * --- Steps to implement abstract factory method pattern in context of Report Generation System ---
 *
 * 1. Create interfaces for different report types, like PDFReport, ExcelReport, etc.
 * 2. Create concrete classes for different report types, like SalesPDFReport, HRPDFReport, etc.
 * 3. Create a report factory interface with methods to create different report types.
 * 4. Create concrete factories for different departments like SalesFactory, HRFactory, etc., that implement the report factory interface.
 * 5. Use the concrete factories to create instances of reports.
 */

// PDFReport base class
abstract class PDFReport {
  abstract generate(): void;
}

// Sales PDF report
class SalesPDFReport extends PDFReport {
  generate(): void {
    console.log("Sales PDF report generated");
  }
}

// HR PDF report
class HRPDFReport extends PDFReport {
  generate(): void {
    console.log("HR PDF report generated");
  }
}

// ExcelReport base class
abstract class ExcelReport {
  abstract generate(): void;
}

// Sales Excel report
class SalesExcelReport extends ExcelReport {
  generate(): void {
    console.log("Sales Excel report generated");
  }
}

// HR Excel report
class HRExcelReport extends ExcelReport {
  generate(): void {
    console.log("HR Excel report generated");
  }
}

// HTMLReport base class
abstract class HTMLReport {
  abstract generate(): void;
}

// Sales HTML report
class SalesHTMLReport extends HTMLReport {
  generate(): void {
    console.log("Sales HTML report generated");
  }
}

// HR HTML report
class HRHTMLReport extends HTMLReport {
  generate(): void {
    console.log("HR HTML report generated");
  }
}

// Report factory base class
abstract class AbstractReportFactory {
  abstract createPDFReport(): PDFReport;
  abstract createExcelReport(): ExcelReport;
  abstract createHTMLReport(): HTMLReport;
}

// Sales report factory
class SalesReportFactory extends AbstractReportFactory {
  createPDFReport(): PDFReport {
    return new SalesPDFReport();
  }

  createExcelReport(): ExcelReport {
    return new SalesExcelReport();
  }

  createHTMLReport(): HTMLReport {
    return new SalesHTMLReport();
  }
}

// HR report factory
class HRReportFactory extends AbstractReportFactory {
  createPDFReport(): PDFReport {
    return new HRPDFReport();
  }

  createExcelReport(): ExcelReport {
    return new HRExcelReport();
  }

  createHTMLReport(): HTMLReport {
    return new HRHTMLReport();
  }
}

// Example usage
function someClientCode(factory: AbstractReportFactory) {
  const pdfReport = factory.createPDFReport();
  pdfReport.generate();

  const excelReport = factory.createExcelReport();
  excelReport.generate();

  const htmlReport = factory.createHTMLReport();
  htmlReport.generate();
}

someClientCode(new SalesReportFactory());
someClientCode(new HRReportFactory());

// output:
// Sales PDF report generated
// Sales Excel report generated
// Sales HTML report generated

// HR PDF report generated
// HR Excel report generated
// HR HTML report generated

// React example

// Report component that receives a factory via props and uses it to generate reports
/*
interface ReportProps {
  factory: AbstractReportFactory;
}

const ReportComponentRenderer: React.FC<ReportProps> = ({ factory }) => {
  const handleGeneratePDFReport = () => {
    const pdfReport = factory.createPDFReport();
    pdfReport.generate();
  };

  const handleGenerateExcelReport = () => {
    const excelReport = factory.createExcelReport();
    excelReport.generate();
  };

  const handleGenerateHTMLReport = () => {
    const htmlReport = factory.createHTMLReport();
    htmlReport.generate();
  };

  return (
    <div>
      <button onClick={handleGeneratePDFReport}>Generate PDF Report</button>
      <button onClick={handleGenerateExcelReport}>Generate Excel Report</button>
      <button onClick={handleGenerateHTMLReport}>Generate HTML Report</button>
    </div>
  );
};

const factoryMap: { [key: string]: AbstractReportFactory } = {
  sales: new SalesReportFactory(),
  hr: new HRReportFactory(),
};

// Container component that decides which report factory to use
const ReportContainer: React.FC = () => {
  const [reportType, setReportType] = React.useState<string>('sales');

  return (
    <div>
      <select onChange={(e) => setReportType(e.target.value)} value={reportType}>
        <option value="sales">Sales</option>
        <option value="hr">HR</option>
      </select>
      <ReportComponentRenderer factory={factoryMap[reportType]} />
    </div>
  );
};
*/
