export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-3xl font-bold mt-2">45</p>
          <p className="text-sm text-muted-foreground mt-1">+180 this week</p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium">Active Users</h3>
          <p className="text-3xl font-bold mt-2">9</p>
          <p className="text-sm text-success mt-1">+12 this month</p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium">Inactive Users</h3>
          <p className="text-3xl font-bold mt-2">2</p>
          <p className="text-sm text-error mt-1">-2 this month</p>
        </div>
      </div>
    </div>
  );
}
