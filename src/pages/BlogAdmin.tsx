import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}

const BlogAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const categories = ['Strategy', 'Design', 'Technology', 'Branding', 'E-commerce', 'UX/UI'];

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('blogAdminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Load existing blog posts
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary auth - accept any email/password
    if (email && password) {
      localStorage.setItem('blogAdminAuth', 'true');
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the blog admin panel",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('blogAdminAuth');
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    readTime: '',
    image: '',
    featured: false,
    published: true,
    tags: []
  });

  const [tagInput, setTagInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.excerpt || !formData.content || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newPost: BlogPost = {
      id: editingPost?.id || `post-${Date.now()}`,
      title: formData.title!,
      excerpt: formData.excerpt!,
      content: formData.content!,
      category: formData.category!,
      author: formData.author || 'Admin',
      date: new Date().toISOString().split('T')[0],
      readTime: formData.readTime || '5 min read',
      image: formData.image || '/placeholder.svg',
      featured: formData.featured || false,
      published: formData.published !== false,
      tags: formData.tags || []
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = blogPosts.map(post => post.id === editingPost.id ? newPost : post);
      toast({
        title: "Post updated",
        description: "Blog post has been updated successfully",
      });
    } else {
      updatedPosts = [...blogPosts, newPost];
      toast({
        title: "Post created",
        description: "Blog post has been created successfully",
      });
    }

    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      author: '',
      readTime: '',
      image: '',
      featured: false,
      published: true,
      tags: []
    });
    setTagInput('');
    setEditingPost(null);
    setShowForm(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setTagInput(post.tags.join(', '));
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    toast({
      title: "Post deleted",
      description: "Blog post has been deleted successfully",
    });
  };

  const addTag = () => {
    if (tagInput.trim()) {
      const tags = tagInput.split(',').map(tag => tag.trim()).filter(tag => tag);
      setFormData({ ...formData, tags });
    }
  };

  useEffect(() => {
    addTag();
  }, [tagInput]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Blog Admin Login</CardTitle>
            <CardDescription>
              Enter any email and password to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Blog Admin Panel</h1>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="posts">Manage Posts</TabsTrigger>
            <TabsTrigger value="create">Create Post</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">All Blog Posts ({blogPosts.length})</h2>
              <Button onClick={() => { setShowForm(true); setEditingPost(null); }}>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="grid gap-4">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          {post.featured && <Badge variant="default">Featured</Badge>}
                          {!post.published && <Badge variant="destructive">Draft</Badge>}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {post.author}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>{editingPost ? 'Edit Post' : 'Create New Post'}</CardTitle>
                <CardDescription>
                  {editingPost ? 'Update the blog post details' : 'Fill in the details to create a new blog post'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Blog post title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief description of the blog post"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <ReactQuill
                      id="content"
                      theme="snow"
                      value={formData.content || ''}
                      onChange={(value) => setFormData({ ...formData, content: value })}
                      placeholder="Write your blog post here..."
                      style={{ minHeight: '200px', background: 'white' }}
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, 3, false] }],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                          ['link', 'image'],
                          ['clean']
                        ]
                      }}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Author name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readTime">Read Time</Label>
                      <Input
                        id="readTime"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        placeholder="5 min read"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                      />
                      <Label htmlFor="featured">Featured Post</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                      />
                      <Label htmlFor="published">Published</Label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit">
                      {editingPost ? 'Update Post' : 'Create Post'}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => {
                      setShowForm(false);
                      setEditingPost(null);
                      setFormData({
                        title: '',
                        excerpt: '',
                        content: '',
                        category: '',
                        author: '',
                        readTime: '',
                        image: '',
                        featured: false,
                        published: true,
                        tags: []
                      });
                      setTagInput('');
                    }}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogAdmin;