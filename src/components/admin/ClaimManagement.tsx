import React from 'react';
import { Search, Filter, MoreVertical, FileText, CheckCircle, XCircle } from 'lucide-react';

const claims = [
  {
    id: 'CLM-001',
    farmer: 'John Doe',
    date: '2024-02-28',
    type: 'Flood Damage',
    status: 'Pending',
    amount: '$5,000',
  },
  {
    id: 'CLM-002',
    farmer: 'Jane Smith',
    date: '2024-02-27',
    type: 'Drought Impact',
    status: 'Approved',
    amount: '$3,500',
  },
  {
    id: 'CLM-003',
    farmer: 'Mike Johnson',
    date: '2024-02-26',
    type: 'Pest Damage',
    status: 'Rejected',
    amount: '$2,800',
  },
  // Add more claims as needed
];

export default function ClaimManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Claims Management</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search claims..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Claims Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Claim ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Farmer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {claims.map((claim) => (
              <tr key={claim.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    {claim.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{claim.farmer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{claim.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{claim.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    claim.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : claim.status === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {claim.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{claim.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center space-x-3">
                    <button className="text-green-600 hover:text-green-900">
                      <CheckCircle className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <XCircle className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}