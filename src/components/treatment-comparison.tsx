import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TreatmentComparison() {
  return (
    <section data-testid="treatment-comparison-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        </div>
        
        <div className="overflow-x-auto">
          <Table data-testid="table-comparison" className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="px-6 py-4 text-left text-sm font-medium text-gray-900">Treatment</TableHead>
                <TableHead className="px-6 py-4 text-center text-sm font-medium text-gray-900">Our GLP-1</TableHead>
                <TableHead className="px-6 py-4 text-center text-sm font-medium text-gray-900">Brand GLP-1</TableHead>
                <TableHead className="px-6 py-4 text-center text-sm font-medium text-gray-900">Brand GLP-1</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-200">
              <TableRow>
                <TableCell data-testid="cell-price-label" className="px-6 py-4 text-sm font-medium text-gray-900">Price</TableCell>
                <TableCell data-testid="cell-semaglutide-price" className="px-6 py-4 text-center text-lg font-bold text-medical-blue">$112.49/mo</TableCell>
                <TableCell data-testid="cell-brand-price-1" className="px-6 py-4 text-center text-lg font-bold text-gray-600">$1700/mo</TableCell>
                <TableCell data-testid="cell-brand-price-2" className="px-6 py-4 text-center text-lg font-bold text-gray-600">$1900/mo</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="px-6 py-4 text-sm font-medium text-gray-900">Average Weight Loss</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">15-20%</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">15-20%</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">15-20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 text-sm font-medium text-gray-900">Type</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Weekly injection</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Weekly injection</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Weekly injection</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="px-6 py-4 text-sm font-medium text-gray-900">Method</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Works on 1 GLP Receptor</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Works on 1 GLP Receptor</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">Works on 1 GLP Receptor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 text-sm font-medium text-gray-900">Dosages Available</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">0.25mg up to 2.5mg</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">0.25mg up to 2.5mg</TableCell>
                <TableCell className="px-6 py-4 text-center text-sm text-gray-700">0.25mg up to 2.4mg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
