import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import ProjectInfoForm, { ProjectFormData } from '@/components/ProjectInfoForm';
import { siteConfig } from '@/config/site';
import { 
  Bell, 
  Calendar, 
  CheckCircle, 
  Clock, 
  CreditCard, 
  Download, 
  FileText, 
  Globe, 
  HelpCircle, 
  Home, 
  LogOut, 
  MessageSquare, 
  Settings, 
  Star, 
  Upload, 
  User,
  ChevronRight,
  AlertCircle,
  Shield,
  Folder,
  Send,
  Eye,
  Edit3,
  ExternalLink,
  Plus,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { Label } from '@/components/ui/label';

const ClientDashboard = () => {
  const [clientEmail, setClientEmail] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectFormData, setProjectFormData] = useState<ProjectFormData | null>(null);
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

  const handleProjectFormSubmit = (data: ProjectFormData) => {
    setProjectFormData(data);
    setShowProjectForm(false);
    // Here you would typically send the data to your backend
    console.log('Project form submitted:', data);
  };

  const handleProjectFormCancel = () => {
    setShowProjectForm(false);
  };

  // Mock data for demonstration
  const projectData = {
    name: "Modern Portfolio Website",
    clientName: "Ajay Kumar",
    currentPhase: "Development",
    progress: 65,
    dueDate: "July 29, 2024",
    projectManager: "Sarah Chen"
  };

  const timelineSteps = [
    { name: "Onboarding", status: "completed", duration: "2 days", team: "PM Team" },
    { name: "Design", status: "completed", duration: "5 days", team: "Design Team" },
    { name: "Development", status: "in-progress", duration: "8 days", team: "Dev Team" },
    { name: "Testing", status: "pending", duration: "3 days", team: "QA Team" },
    { name: "Review", status: "pending", duration: "2 days", team: "Client" },
    { name: "Deployment", status: "pending", duration: "1 day", team: "DevOps" },
    { name: "Delivered", status: "pending", duration: "Final", team: "PM Team" }
  ];

  const milestones = [
    { 
      title: "Wireframes Ready", 
      status: "completed", 
      date: "July 15", 
      description: "Initial site structure and layout approved" 
    },
    { 
      title: "Design Mockups", 
      status: "completed", 
      date: "July 20", 
      description: "High-fidelity designs for all pages" 
    },
    { 
      title: "First Development Build", 
      status: "in-progress", 
      date: "July 25", 
      description: "Functional website with core features" 
    },
    { 
      title: "Client Review", 
      status: "pending", 
      date: "July 29", 
      description: "Final review and feedback collection" 
    }
  ];

  const files = [
    { name: "Design_Mockups_v2.figma", type: "design", date: "July 20", size: "2.4 MB" },
    { name: "Brand_Guidelines.pdf", type: "docs", date: "July 18", size: "1.2 MB" },
    { name: "Development_Build_1.zip", type: "dev", date: "July 23", size: "15.7 MB" },
    { name: "Logo_Assets.sketch", type: "design", date: "July 16", size: "3.1 MB" }
  ];

  const messages = [
    { 
      sender: "Sarah Chen (PM)", 
      message: "Hi Ajay! The development team has completed the homepage. Please review and let us know your thoughts.", 
      time: "2 hours ago",
      needsReply: true
    },
    { 
      sender: "Ajay Kumar", 
      message: "Looks great! Can we adjust the header font size slightly?", 
      time: "4 hours ago",
      needsReply: false
    },
    { 
      sender: "Mike Johnson (Developer)", 
      message: "Sure thing! I've updated the header styling. Check it out on the staging link.", 
      time: "1 day ago",
      needsReply: false
    }
  ];

  const invoices = [
    { id: "INV-001", title: "Initial Payment - 50%", amount: "$2,500", status: "paid", date: "July 10" },
    { id: "INV-002", title: "Milestone Payment - 30%", amount: "$1,500", status: "paid", date: "July 20" },
    { id: "INV-003", title: "Final Payment - 20%", amount: "$1,000", status: "pending", date: "July 30" }
  ];

  const navigationItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'timeline', icon: Calendar, label: 'Timeline' },
    { id: 'milestones', icon: CheckCircle, label: 'Milestones' },
    { id: 'files', icon: Folder, label: 'Files' },
    { id: 'communication', icon: MessageSquare, label: 'Communication' },
    { id: 'billing', icon: CreditCard, label: 'Billing' },
    { id: 'support', icon: HelpCircle, label: 'Support' },
    { id: 'domains', icon: Globe, label: 'Domains' },
    { id: 'feedback', icon: Star, label: 'Feedback' }
  ];

  const renderWelcomeBanner = () => (
    <div className="dashboard-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="large-title text-primary">Welcome back, {projectData.clientName}!</h1>
          <p className="body text-muted-foreground mt-1">
            {projectData.name} • {projectData.currentPhase} Phase
          </p>
        </div>
        <Button variant="outline" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          Need Help?
        </Button>
      </div>
      
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-4">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-accent" />
          <span className="callout text-accent">Your review is due by {projectData.dueDate}</span>
        </div>
      </div>
    </div>
  );

  const renderProjectStatusTracker = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Project Status Tracker</CardTitle>
        <CardDescription>Current progress: {projectData.progress}% complete</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={projectData.progress} className="mb-6" />
        
        <div className="space-y-4">
          {timelineSteps.map((step, index) => (
            <div key={step.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.status === 'completed' ? 'bg-success text-success-foreground' :
                step.status === 'in-progress' ? 'bg-accent text-accent-foreground' :
                'bg-muted text-muted-foreground'
              }`}>
                {step.status === 'completed' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : step.status === 'in-progress' ? (
                  <Clock className="h-4 w-4" />
                ) : (
                  <span className="caption-1">{index + 1}</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className="headline">{step.name}</div>
                <div className="caption-2">{step.duration} • {step.team}</div>
              </div>
              
              <Badge className={
                step.status === 'completed' ? 'status-completed' :
                step.status === 'in-progress' ? 'status-in-progress' :
                'status-pending'
              }>
                {step.status.replace('-', ' ')}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderMilestones = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Milestones & Approvals</CardTitle>
        <CardDescription>Key project deliverables and approval points</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.title} className="border border-border rounded-xl p-4 interactive-hover">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="headline">{milestone.title}</h4>
                <p className="caption-2 mt-1">{milestone.description}</p>
              </div>
              <Badge className={
                milestone.status === 'completed' ? 'status-completed' :
                milestone.status === 'in-progress' ? 'status-in-progress' :
                'status-pending'
              }>
                {milestone.status.replace('-', ' ')}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <span className="subhead text-muted-foreground">Due: {milestone.date}</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-3 w-3 mr-1" />
                  View Details
                </Button>
                {milestone.status === 'in-progress' && (
                  <Button size="sm">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Approve
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const renderFiles = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="title-2">Deliverables & Files</CardTitle>
            <CardDescription>Project files and shared assets</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between p-3 border border-border rounded-xl hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                file.type === 'design' ? 'bg-primary/10 text-primary' :
                file.type === 'dev' ? 'bg-accent/10 text-accent' :
                'bg-muted text-muted-foreground'
              }`}>
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <div className="subhead font-medium">{file.name}</div>
                <div className="caption-2">{file.date} • {file.size}</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const renderCommunication = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Communication Thread</CardTitle>
        <CardDescription>Chat with your project team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`p-3 rounded-xl ${
              msg.needsReply ? 'bg-accent/10 border border-accent/20' : 'bg-muted/50'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <span className="caption-1 text-primary">{msg.sender}</span>
                <span className="caption-2">{msg.time}</span>
              </div>
              <p className="subhead">{msg.message}</p>
              {msg.needsReply && (
                <Badge variant="secondary" className="mt-2">
                  Reply Needed
                </Badge>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <div className="flex gap-2">
            <Textarea placeholder="Type your message..." className="resize-none" rows={2} />
            <Button size="sm" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBilling = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Billing & Payments</CardTitle>
        <CardDescription>Invoice history and payment status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between p-4 border border-border rounded-xl">
            <div>
              <div className="headline">{invoice.title}</div>
              <div className="caption-2">Invoice {invoice.id} • Due: {invoice.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="title-3">{invoice.amount}</span>
              <Badge className={invoice.status === 'paid' ? 'status-completed' : 'status-pending'}>
                {invoice.status}
              </Badge>
              {invoice.status === 'pending' && (
                <Button size="sm">Pay Now</Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const renderQuickActions = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Quick Actions</CardTitle>
        <CardDescription>Frequently used actions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start" variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Request Update
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Meeting
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Globe className="h-4 w-4 mr-2" />
          View Live Site
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <MessageSquare className="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </CardContent>
    </Card>
  );

  const renderDomainManagement = () => (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="title-2">Domain & Hosting</CardTitle>
        <CardDescription>Domain status and hosting information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
          <div>
            <div className="headline">ajayportfolio.com</div>
            <div className="caption-2">Primary domain</div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-success" />
            <Badge className="status-completed">SSL Active</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 border border-border rounded-xl">
            <div className="caption-1 text-muted-foreground">Status</div>
            <div className="headline text-success">Live</div>
          </div>
          <div className="p-3 border border-border rounded-xl">
            <div className="caption-1 text-muted-foreground">Hosting</div>
            <div className="headline">WPaaS Cloud</div>
          </div>
        </div>
        
        <Button variant="outline" className="w-full">
          <ExternalLink className="h-4 w-4 mr-2" />
          Visit Live Site
        </Button>
      </CardContent>
    </Card>
  );

  const renderFeedback = () => (
    <div className="space-y-6">
      {showProjectForm ? (
        <ProjectInfoForm
          onSubmit={handleProjectFormSubmit}
          onCancel={handleProjectFormCancel}
          initialData={projectFormData || undefined}
        />
      ) : (
        <>
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="title-2">Project Showcase Information</CardTitle>
              <CardDescription>
                Help us showcase your project in our portfolio by providing detailed information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-headline font-semibold mb-2">Share Your Project Story</h3>
                    <p className="text-body text-muted-foreground mb-4">
                      By providing detailed information about your project, we can create a comprehensive showcase 
                      that highlights the value we delivered and helps other potential clients understand our capabilities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Showcase your project in our portfolio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Detailed project case study</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Client testimonial and review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Technical implementation details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-dashed border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-headline font-semibold mb-2">Project Information</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Provide comprehensive details about your project including features, challenges, and results
                    </p>
                    <Button 
                      onClick={() => setShowProjectForm(true)}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Fill Project Form
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-dashed border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-headline font-semibold mb-2">Project Images</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload screenshots and images of your project for the showcase gallery
                    </p>
                    <Button variant="outline" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Images
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {projectFormData && (
                <Card className="border-success/20 bg-success/5">
                  <CardHeader>
                    <CardTitle className="text-success flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Project Information Submitted
                    </CardTitle>
                    <CardDescription>
                      Your project information has been successfully submitted and is under review
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Project Title:</span>
                        <span className="text-sm">{projectFormData.title}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Industry:</span>
                        <span className="text-sm">{projectFormData.industry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Project Type:</span>
                        <span className="text-sm">{projectFormData.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Technologies:</span>
                        <span className="text-sm">{projectFormData.technologies.join(', ')}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setShowProjectForm(true)}
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Information
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setProjectFormData(null)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="title-2">Client Testimonials</CardTitle>
              <CardDescription>
                Share your experience and help other clients make informed decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="text-headline font-semibold mb-2">Write a Testimonial</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell us about your experience working with WPaaS and how the project turned out
                </p>
                <Textarea 
                  placeholder="Share your thoughts about the project, our team, and the overall experience..."
                  rows={4}
                />
                <div className="mt-3 flex gap-2">
                  <Button size="sm">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Testimonial
                  </Button>
                  <Button variant="outline" size="sm">
                    Save Draft
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="title-2">Feedback & Suggestions</CardTitle>
              <CardDescription>
                Help us improve our services by sharing your feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">How would you rate your overall experience?</Label>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-2xl text-muted-foreground hover:text-accent transition-colors"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">What went well?</Label>
                  <Textarea 
                    placeholder="Tell us what you liked about our service..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">What could we improve?</Label>
                  <Textarea 
                    placeholder="Share suggestions for improvement..."
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Would you recommend us to others?</Label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="recommend" value="yes" className="text-primary" />
                      <span className="text-sm">Yes, definitely</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="recommend" value="maybe" className="text-primary" />
                      <span className="text-sm">Maybe</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="recommend" value="no" className="text-primary" />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  const renderMainContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {renderWelcomeBanner()}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderProjectStatusTracker()}
              <div className="space-y-6">
                {renderQuickActions()}
                {renderDomainManagement()}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderCommunication()}
              {renderBilling()}
            </div>
          </div>
        );
      case 'milestones':
        return renderMilestones();
      case 'files':
        return renderFiles();
      case 'communication':
        return renderCommunication();
      case 'billing':
        return renderBilling();
      case 'feedback':
        return renderFeedback();
      default:
        return (
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="title-2">Coming Soon</CardTitle>
              <CardDescription>This section is under development</CardDescription>
            </CardHeader>
          </Card>
        );
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header - Fixed at top */}
      <header className="flex-shrink-0 z-40 glassmorphism border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="caption-1 font-bold text-primary-foreground">W</span>
            </div>
            <div>
              <h1 className="headline">{siteConfig.name} Dashboard</h1>
              <p className="caption-2">{clientEmail}</p>
            </div>
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
      </header>

      {/* Main Container - Takes remaining height */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation - Fixed width, no scroll */}
        <nav className="hidden lg:flex flex-col w-64 border-r border-white/10 glassmorphism flex-shrink-0">
          <div className="p-6 overflow-y-auto">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'hover:bg-white/20 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="subhead font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderMainContent()}
        </main>
      </div>

      {/* Mobile Tab Bar - Fixed at bottom */}
      <div className="lg:hidden flex-shrink-0 glassmorphism border-t border-white/10">
        <div className="grid grid-cols-4">
          {navigationItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center py-2 transition-all duration-200 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon className={`h-5 w-5 mb-1 ${isActive ? 'scale-110' : ''}`} />
                <span className="caption-2 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;