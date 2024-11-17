import React from 'react';
import { BarChart as BarChartIcon, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', claims: 40 },
  { name: 'Feb', claims: 30 },
  { name: 'Mar', claims: 20 },
  { name: 'Apr', claims: 27 },
  { name: 'May', claims: 18 },
  { name: 'Jun', claims: 23 },
];

const stats = [
  {
    name: 'Total Claims',
    value: '158',
    icon: BarChartIcon,
    change: '+12.5%',
    changeType: 'positive',
  },
  {
    name: 'Active Farmers',
    value: '2,420',
    icon: Users,
    change: '+3.2%',
    changeType: 'positive',
  },
  {
    name: 'Pending Claims',
    value: '45',
    icon: AlertTriangle,
    change: '-8%',
    changeType: 'negative',
  },
  {
    name: 'Approved Claims',
    value: '113',
    icon: CheckCircle,
    change: '+28.3%',
    changeType: 'positive',
  },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className={`mt-2 text-sm ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Claims Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="claims" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">New claim submitted</p>
                  <p className="text-sm text-gray-600">Farmer ID: F-{1000 + item}</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}