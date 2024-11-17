import React from 'react';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

const claims = [
  {
    id: 'CLM-001',
    date: '2024-02-28',
    type: 'Flood Damage',
    status: 'In Progress',
    amount: '$5,000',
    progress: 60,
  },
  {
    id: 'CLM-002',
    date: '2024-02-25',
    type: 'Drought Impact',
    status: 'Approved',
    amount: '$3,500',
    progress: 100,
  },
  {
    id: 'CLM-003',
    date: '2024-02-20',
    type: 'Pest Damage',
    status: 'Rejected',
    amount: '$2,800',
    progress: 100,
  },
];

export default function ClaimStatus() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Claims</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-semibold">1</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-2xl font-semibold">1</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Claims History</h2>
        </div>
        <div className="divide-y">
          {claims.map((claim) => (
            <div key={claim.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{claim.type}</h3>
                    <p className="text-sm text-gray-600">Claim ID: {claim.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{claim.amount}</p>
                  <p className="text-sm text-gray-600">{claim.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full ${
                    claim.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : claim.status === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {claim.status}
                  </span>
                  <span className="text-gray-600">{claim.progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      claim.status === 'Approved'
                        ? 'bg-green-500'
                        : claim.status === 'Rejected'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                    }`}
                    style={{ width: `${claim.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}