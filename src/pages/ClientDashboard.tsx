import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { BarChart3, FileText, Settings, User, LogOut, Calendar, Bell, TrendingUp } from 'lucide-react';

const ClientDashboard = () => {
  const [clientEmail, setClientEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('clientLoggedIn');
    const email = localStorage.getItem('clientEmail');
    
    if (!isLoggedIn) {
      navigate('/client-login');
      return;
    }
    
    if (email) {
      setClientEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('clientLoggedIn');
    localStorage.removeItem('clientEmail');
    navigate('/');
  };

  const stats = [
    { title: 'Total Projects', value: '12', icon: FileText, trend: '+2 this month' },
    { title: 'Active Campaigns', value: '8', icon: TrendingUp, trend: '+15% growth' },
    { title: 'Team Members', value: '24', icon: User, trend: '3 new members' },
    { title: 'This Month Revenue', value: '$45,280', icon: BarChart3, trend: '+12% vs last month' },
  ];

  const recentActivities = [
    { title: 'Project Alpha launched', time: '2 hours ago', type: 'success' },
    { title: 'New team member added', time: '5 hours ago', type: 'info' },
    { title: 'Campaign Beta completed', time: '1 day ago', type: 'success' },
    { title: 'Monthly report generated', time: '2 days ago', type: 'info' },
  ];

  return (
    <Layout showMobileTabBar={false}>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
        {/* Header */}
        <div className="bg-background/80 backdrop-blur-xl border-b border-border-subtle">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Client Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {clientEmail}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest project updates and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border-subtle rounded-lg">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <Badge variant={activity.type === 'success' ? 'default' : 'secondary'}>
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Project
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Manage Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientDashboard;