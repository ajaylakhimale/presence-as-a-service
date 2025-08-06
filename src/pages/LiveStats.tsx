import { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, CheckCircle, Star, Zap, Calendar, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';

const LiveStats = () => {
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    activeClients: 0,
    ongoingProjects: 0,
    avgDeliveryTime: 0,
    satisfactionRate: 0,
    totalRevenue: 0,
    responseTime: 0,
    uptime: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  // Animated counter effect
  useEffect(() => {
    const targetStats = {
      projectsCompleted: 247,
      activeClients: 89,
      ongoingProjects: 23,
      avgDeliveryTime: 7.2,
      satisfactionRate: 98.5,
      totalRevenue: 892000,
      responseTime: 2.1,
      uptime: 99.9
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        projectsCompleted: Math.floor(targetStats.projectsCompleted * progress),
        activeClients: Math.floor(targetStats.activeClients * progress),
        ongoingProjects: Math.floor(targetStats.ongoingProjects * progress),
        avgDeliveryTime: Math.round(targetStats.avgDeliveryTime * progress * 10) / 10,
        satisfactionRate: Math.round(targetStats.satisfactionRate * progress * 10) / 10,
        totalRevenue: Math.floor(targetStats.totalRevenue * progress),
        responseTime: Math.round(targetStats.responseTime * progress * 10) / 10,
        uptime: Math.round(targetStats.uptime * progress * 10) / 10
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        setIsLoading(false);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const recentProjects = [
    { name: 'E-commerce Platform', client: 'Fashion Boutique', status: 'Completed', progress: 100, type: 'Pro' },
    { name: 'Healthcare Dashboard', client: 'Medical Center', status: 'In Review', progress: 95, type: 'Enterprise' },
    { name: 'Real Estate Portal', client: 'Premier Realty', status: 'Development', progress: 75, type: 'Pro' },
    { name: 'Restaurant Website', client: 'Bistro Local', status: 'Design', progress: 40, type: 'Growth' },
    { name: 'Portfolio Site', client: 'Creative Studio', status: 'Planning', progress: 15, type: 'Starter' }
  ];

  const monthlyMetrics = [
    { month: 'Jan', projects: 18, revenue: 52000, satisfaction: 97 },
    { month: 'Feb', projects: 22, revenue: 68000, satisfaction: 98 },
    { month: 'Mar', projects: 25, revenue: 78000, satisfaction: 99 },
    { month: 'Apr', projects: 28, revenue: 89000, satisfaction: 98 },
    { month: 'May', projects: 31, revenue: 95000, satisfaction: 99 },
    { month: 'Jun', projects: 35, revenue: 112000, satisfaction: 98 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success text-success-foreground';
      case 'In Review': return 'bg-accent-brand text-accent-brand-foreground';
      case 'Development': return 'bg-primary text-primary-foreground';
      case 'Design': return 'bg-warning text-warning-foreground';
      case 'Planning': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 overflow-hidden">
        {/* Particle Effects */}
        <ParticleEffect />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-large-title mb-6">
              Live <span className="text-primary">Statistics</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real-time insights into our operations, project progress, and performance metrics. 
              Transparency in everything we do.
            </p>
            <div className="flex items-center justify-center space-x-2 text-callout">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-success">Live Data • Updated in Real-time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Stats */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-elevated animate-fade-in-up">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-subhead font-medium text-muted-foreground">
                    Projects Completed
                  </CardTitle>
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-title-1 font-bold text-primary animate-count-up">
                  {stats.projectsCompleted}+
                </div>
                <p className="text-caption-1 text-muted-foreground">
                  All-time completed projects
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated animate-fade-in-up [animation-delay:0.1s]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-subhead font-medium text-muted-foreground">
                    Active Clients
                  </CardTitle>
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-title-1 font-bold text-primary animate-count-up">
                  {stats.activeClients}
                </div>
                <p className="text-caption-1 text-muted-foreground">
                  Currently working with
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated animate-fade-in-up [animation-delay:0.2s]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-subhead font-medium text-muted-foreground">
                    Avg Delivery Time
                  </CardTitle>
                  <Clock className="h-5 w-5 text-accent-brand" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-title-1 font-bold text-primary animate-count-up">
                  {stats.avgDeliveryTime} days
                </div>
                <p className="text-caption-1 text-muted-foreground">
                  From start to delivery
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated animate-fade-in-up [animation-delay:0.3s]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-subhead font-medium text-muted-foreground">
                    Satisfaction Rate
                  </CardTitle>
                  <Star className="h-5 w-5 text-accent-brand" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-title-1 font-bold text-primary animate-count-up">
                  {stats.satisfactionRate}%
                </div>
                <p className="text-caption-1 text-muted-foreground">
                  Client satisfaction score
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-surface">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-title-3 font-bold">{stats.ongoingProjects}</div>
                <div className="text-subhead text-muted-foreground">Ongoing Projects</div>
              </CardContent>
            </Card>

            <Card className="card-surface">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-title-3 font-bold">${(stats.totalRevenue / 1000).toFixed(0)}K</div>
                <div className="text-subhead text-muted-foreground">Total Revenue</div>
              </CardContent>
            </Card>

            <Card className="card-surface">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent-brand mx-auto mb-2" />
                <div className="text-title-3 font-bold">{stats.responseTime}h</div>
                <div className="text-subhead text-muted-foreground">Avg Response Time</div>
              </CardContent>
            </Card>

            <Card className="card-surface">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-title-3 font-bold">{stats.uptime}%</div>
                <div className="text-subhead text-muted-foreground">System Uptime</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Pipeline */}
            <div>
              <h2 className="text-title-2 mb-8">Current Project Pipeline</h2>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <Card key={project.name} className="card-surface animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-headline font-semibold">{project.name}</h3>
                          <p className="text-subhead text-muted-foreground">{project.client}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(project.status)} variant="secondary">
                            {project.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-subhead text-muted-foreground">Progress</span>
                          <span className="text-subhead font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Monthly Trends */}
            <div>
              <h2 className="text-title-2 mb-8">Monthly Performance</h2>
              <div className="space-y-4">
                {monthlyMetrics.map((metric, index) => (
                  <Card key={metric.month} className="card-surface animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-headline font-semibold">{metric.month} 2024</h3>
                        <Badge className="bg-primary/10 text-primary">
                          {metric.satisfaction}% satisfaction
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-title-3 font-bold text-primary">{metric.projects}</div>
                          <div className="text-subhead text-muted-foreground">Projects</div>
                        </div>
                        <div>
                          <div className="text-title-3 font-bold text-success">${(metric.revenue / 1000).toFixed(0)}K</div>
                          <div className="text-subhead text-muted-foreground">Revenue</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Indicators */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Performance Indicators</h2>
            <p className="text-body text-muted-foreground">
              Key metrics that show our commitment to quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-title-3 mb-2">On-Time Delivery</h3>
                <div className="text-title-1 font-bold text-success mb-2">97%</div>
                <p className="text-subhead text-muted-foreground">
                  Projects delivered on or before deadline
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-title-3 mb-2">Client Retention</h3>
                <div className="text-title-1 font-bold text-primary mb-2">94%</div>
                <p className="text-subhead text-muted-foreground">
                  Clients who return for additional projects
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-brand/10 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-accent-brand" />
                </div>
                <h3 className="text-title-3 mb-2">First Response</h3>
                <div className="text-title-1 font-bold text-accent-brand mb-2">&lt; 2h</div>
                <p className="text-subhead text-muted-foreground">
                  Average time to first response
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LiveStats;