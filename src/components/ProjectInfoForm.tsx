import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Upload, 
  Plus, 
  X, 
  Save, 
  Send,
  Image as ImageIcon,
  FileText,
  Star,
  Calendar,
  Users,
  Code,
  Palette,
  Zap,
  Globe,
  CreditCard,
  CheckCircle
} from 'lucide-react';

interface ProjectInfoFormProps {
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
  initialData?: Partial<ProjectFormData>;
}

export interface ProjectFormData {
  // Basic Project Information
  title: string;
  description: string;
  fullDescription: string;
  industry: string;
  type: string;
  deliveryTime: string;
  startDate: string;
  endDate: string;
  
  // Client Information
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone: string;
  
  // Technical Details
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  
  // Team Information
  teamMembers: string[];
  
  // Project Process
  process: ProcessPhase[];
  
  // Media & Assets
  images: string[];
  logo: string;
  
  // Testimonials & Reviews
  clientQuote: string;
  rating: number;
  
  // Additional Information
  liveUrl: string;
  githubUrl: string;
  caseStudy: string;
  tags: string[];
  
  // Business Impact
  businessImpact: string;
  metrics: string[];
  
  // Future Plans
  futurePlans: string;
  maintenance: string;
}

interface ProcessPhase {
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
}

const ProjectInfoForm = ({ onSubmit, onCancel, initialData }: ProjectInfoFormProps) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    fullDescription: '',
    industry: '',
    type: '',
    deliveryTime: '',
    startDate: '',
    endDate: '',
    clientName: '',
    clientRole: '',
    clientCompany: '',
    clientEmail: '',
    clientPhone: '',
    technologies: [],
    features: [],
    challenges: [],
    solutions: [],
    results: [],
    teamMembers: [],
    process: [
      { phase: 'Discovery', description: '', duration: '', deliverables: [] },
      { phase: 'Design', description: '', duration: '', deliverables: [] },
      { phase: 'Development', description: '', duration: '', deliverables: [] },
      { phase: 'Launch', description: '', duration: '', deliverables: [] }
    ],
    images: [],
    logo: '',
    clientQuote: '',
    rating: 5,
    liveUrl: '',
    githubUrl: '',
    caseStudy: '',
    tags: [],
    businessImpact: '',
    metrics: [],
    futurePlans: '',
    maintenance: '',
    ...initialData
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [newTechnology, setNewTechnology] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newChallenge, setNewChallenge] = useState('');
  const [newSolution, setNewSolution] = useState('');
  const [newResult, setNewResult] = useState('');
  const [newTeamMember, setNewTeamMember] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newMetric, setNewMetric] = useState('');

  const industries = [
    'Technology', 'Food & Beverage', 'Creative', 'Retail', 'Healthcare', 
    'Real Estate', 'Education', 'Finance', 'Manufacturing', 'Non-profit', 'Other'
  ];

  const projectTypes = [
    'Landing Page', 'Business Website', 'Portfolio', 'E-commerce', 
    'Web Application', 'Mobile App', 'Dashboard', 'Blog', 'Other'
  ];

  const commonTechnologies = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Vue.js',
    'Angular', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'WordPress',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Vercel', 'Netlify',
    'Stripe', 'PayPal', 'Auth0', 'Sanity', 'Contentful', 'Framer Motion'
  ];

  const handleInputChange = (field: keyof ProjectFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayAdd = (field: keyof ProjectFormData, value: string, setter: (value: string) => void) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [field]: [...(prev[field] as string[]), value.trim()]
      }));
      setter('');
    }
  };

  const handleArrayRemove = (field: keyof ProjectFormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleProcessChange = (index: number, field: keyof ProcessPhase, value: any) => {
    setFormData(prev => ({
      ...prev,
      process: prev.process.map((phase, i) => 
        i === index ? { ...phase, [field]: value } : phase
      )
    }));
  };

  const handleProcessDeliverableAdd = (index: number, value: string) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        process: prev.process.map((phase, i) => 
          i === index ? { ...phase, deliverables: [...phase.deliverables, value.trim()] } : phase
        )
      }));
    }
  };

  const handleProcessDeliverableRemove = (phaseIndex: number, deliverableIndex: number) => {
    setFormData(prev => ({
      ...prev,
      process: prev.process.map((phase, i) => 
        i === phaseIndex ? { 
          ...phase, 
          deliverables: phase.deliverables.filter((_, j) => j !== deliverableIndex) 
        } : phase
      )
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-title-2 mb-4">Basic Project Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., TechStart Landing Page"
            />
          </div>
          <div>
            <Label htmlFor="industry">Industry *</Label>
            <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="type">Project Type *</Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="deliveryTime">Delivery Time *</Label>
            <Input
              id="deliveryTime"
              value={formData.deliveryTime}
              onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
              placeholder="e.g., 4 days"
            />
          </div>
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="description">Short Description *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Brief description for showcase cards (2-3 sentences)"
            rows={3}
          />
        </div>
        
        <div className="mt-4">
          <Label htmlFor="fullDescription">Full Description *</Label>
          <Textarea
            id="fullDescription"
            value={formData.fullDescription}
            onChange={(e) => handleInputChange('fullDescription', e.target.value)}
            placeholder="Comprehensive project description for the details page"
            rows={5}
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-title-2 mb-4">Client Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="clientName">Client Name *</Label>
            <Input
              id="clientName"
              value={formData.clientName}
              onChange={(e) => handleInputChange('clientName', e.target.value)}
              placeholder="e.g., Sarah Chen"
            />
          </div>
          <div>
            <Label htmlFor="clientRole">Client Role *</Label>
            <Input
              id="clientRole"
              value={formData.clientRole}
              onChange={(e) => handleInputChange('clientRole', e.target.value)}
              placeholder="e.g., CEO & Founder"
            />
          </div>
          <div>
            <Label htmlFor="clientCompany">Company Name *</Label>
            <Input
              id="clientCompany"
              value={formData.clientCompany}
              onChange={(e) => handleInputChange('clientCompany', e.target.value)}
              placeholder="e.g., TechStart Inc."
            />
          </div>
          <div>
            <Label htmlFor="clientEmail">Client Email</Label>
            <Input
              id="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={(e) => handleInputChange('clientEmail', e.target.value)}
              placeholder="client@company.com"
            />
          </div>
          <div>
            <Label htmlFor="clientPhone">Client Phone</Label>
            <Input
              id="clientPhone"
              value={formData.clientPhone}
              onChange={(e) => handleInputChange('clientPhone', e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <Label htmlFor="rating">Client Rating *</Label>
            <Select value={formData.rating.toString()} onValueChange={(value) => handleInputChange('rating', parseInt(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {[5, 4, 3, 2, 1].map(rating => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating} {rating === 1 ? 'Star' : 'Stars'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="clientQuote">Client Testimonial *</Label>
          <Textarea
            id="clientQuote"
            value={formData.clientQuote}
            onChange={(e) => handleInputChange('clientQuote', e.target.value)}
            placeholder="What did the client say about the project?"
            rows={3}
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-title-2 mb-4">Technical Details</h3>
        
        <div className="space-y-4">
          <div>
            <Label>Technologies Used *</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="gap-1">
                  {tech}
                  <button
                    onClick={() => handleArrayRemove('technologies', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select value={newTechnology} onValueChange={setNewTechnology}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select technology" />
                </SelectTrigger>
                <SelectContent>
                  {commonTechnologies.map(tech => (
                    <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => handleArrayAdd('technologies', newTechnology, setNewTechnology)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Key Features *</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="gap-1">
                  {feature}
                  <button
                    onClick={() => handleArrayRemove('features', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add a feature"
                className="flex-1"
              />
              <Button
                onClick={() => handleArrayAdd('features', newFeature, setNewFeature)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Challenges Faced</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.challenges.map((challenge, index) => (
                <Badge key={index} variant="outline" className="gap-1">
                  {challenge}
                  <button
                    onClick={() => handleArrayRemove('challenges', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newChallenge}
                onChange={(e) => setNewChallenge(e.target.value)}
                placeholder="Add a challenge"
                className="flex-1"
              />
              <Button
                onClick={() => handleArrayAdd('challenges', newChallenge, setNewChallenge)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Solutions Implemented</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.solutions.map((solution, index) => (
                <Badge key={index} variant="outline" className="gap-1">
                  {solution}
                  <button
                    onClick={() => handleArrayRemove('solutions', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newSolution}
                onChange={(e) => setNewSolution(e.target.value)}
                placeholder="Add a solution"
                className="flex-1"
              />
              <Button
                onClick={() => handleArrayAdd('solutions', newSolution, setNewSolution)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Results & Impact</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.results.map((result, index) => (
                <Badge key={index} variant="outline" className="gap-1">
                  {result}
                  <button
                    onClick={() => handleArrayRemove('results', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newResult}
                onChange={(e) => setNewResult(e.target.value)}
                placeholder="Add a result"
                className="flex-1"
              />
              <Button
                onClick={() => handleArrayAdd('results', newResult, setNewResult)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-title-2 mb-4">Team & Process</h3>
        
        <div className="space-y-4">
          <div>
            <Label>Team Members</Label>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {formData.teamMembers.map((member, index) => (
                <Badge key={index} variant="secondary" className="gap-1">
                  {member}
                  <button
                    onClick={() => handleArrayRemove('teamMembers', index)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTeamMember}
                onChange={(e) => setNewTeamMember(e.target.value)}
                placeholder="e.g., Frontend Developer"
                className="flex-1"
              />
              <Button
                onClick={() => handleArrayAdd('teamMembers', newTeamMember, setNewTeamMember)}
                size="sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Development Process</Label>
            <div className="space-y-4 mt-2">
              {formData.process.map((phase, index) => (
                <Card key={index} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <Label>Phase Name</Label>
                      <Input
                        value={phase.phase}
                        onChange={(e) => handleProcessChange(index, 'phase', e.target.value)}
                        placeholder="e.g., Discovery"
                      />
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Input
                        value={phase.duration}
                        onChange={(e) => handleProcessChange(index, 'duration', e.target.value)}
                        placeholder="e.g., 1 day"
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Input
                        value={phase.description}
                        onChange={(e) => handleProcessChange(index, 'description', e.target.value)}
                        placeholder="Brief description"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Deliverables</Label>
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <Badge key={deliverableIndex} variant="outline" className="gap-1">
                          {deliverable}
                          <button
                            onClick={() => handleProcessDeliverableRemove(index, deliverableIndex)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add deliverable"
                        className="flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const target = e.target as HTMLInputElement;
                            handleProcessDeliverableAdd(index, target.value);
                            target.value = '';
                          }
                        }}
                      />
                      <Button size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-title-2 mb-4">Additional Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="liveUrl">Live URL</Label>
            <Input
              id="liveUrl"
              value={formData.liveUrl}
              onChange={(e) => handleInputChange('liveUrl', e.target.value)}
              placeholder="https://example.com"
            />
          </div>
          <div>
            <Label htmlFor="githubUrl">GitHub URL</Label>
            <Input
              id="githubUrl"
              value={formData.githubUrl}
              onChange={(e) => handleInputChange('githubUrl', e.target.value)}
              placeholder="https://github.com/username/repo"
            />
          </div>
        </div>

        <div className="mt-4">
          <Label>Project Tags</Label>
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            {formData.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="gap-1">
                {tag}
                <button
                  onClick={() => handleArrayRemove('tags', index)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a tag"
              className="flex-1"
            />
            <Button
              onClick={() => handleArrayAdd('tags', newTag, setNewTag)}
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <Label>Business Impact Metrics</Label>
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            {formData.metrics.map((metric, index) => (
              <Badge key={index} variant="outline" className="gap-1">
                {metric}
                <button
                  onClick={() => handleArrayRemove('metrics', index)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={newMetric}
              onChange={(e) => setNewMetric(e.target.value)}
              placeholder="e.g., 40% increase in conversion rate"
              className="flex-1"
            />
            <Button
              onClick={() => handleArrayAdd('metrics', newMetric, setNewMetric)}
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="businessImpact">Business Impact Description</Label>
          <Textarea
            id="businessImpact"
            value={formData.businessImpact}
            onChange={(e) => handleInputChange('businessImpact', e.target.value)}
            placeholder="Describe the overall business impact of this project"
            rows={3}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="caseStudy">Case Study</Label>
          <Textarea
            id="caseStudy"
            value={formData.caseStudy}
            onChange={(e) => handleInputChange('caseStudy', e.target.value)}
            placeholder="Detailed case study of the project (optional)"
            rows={5}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="futurePlans">Future Plans</Label>
          <Textarea
            id="futurePlans"
            value={formData.futurePlans}
            onChange={(e) => handleInputChange('futurePlans', e.target.value)}
            placeholder="Plans for future development or maintenance"
            rows={3}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="maintenance">Maintenance & Support</Label>
          <Textarea
            id="maintenance"
            value={formData.maintenance}
            onChange={(e) => handleInputChange('maintenance', e.target.value)}
            placeholder="Information about ongoing maintenance and support"
            rows={3}
          />
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return renderStep1();
    }
  };

  const steps = [
    { number: 1, title: 'Basic Info', icon: FileText },
    { number: 2, title: 'Client Info', icon: Users },
    { number: 3, title: 'Technical', icon: Code },
    { number: 4, title: 'Team & Process', icon: Calendar },
    { number: 5, title: 'Additional', icon: Plus }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-title-1">Project Information Form</CardTitle>
        <CardDescription>
          Provide detailed information about your project for our showcase and project details pages
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isActive ? 'bg-primary border-primary text-primary-foreground' :
                  isCompleted ? 'bg-success border-success text-success-foreground' :
                  'bg-muted border-border text-muted-foreground'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    isCompleted ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        <Separator />

        {/* Form Content */}
        <div className="min-h-[400px]">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            {currentStep < 5 ? (
              <Button onClick={() => setCurrentStep(currentStep + 1)}>
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                <Save className="h-4 w-4 mr-2" />
                Submit Project Info
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectInfoForm; 