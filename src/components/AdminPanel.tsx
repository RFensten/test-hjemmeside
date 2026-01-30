import { useState, useEffect } from 'react';

interface Project {
    id: string;
    title: string;
    shortDescription: string;
    link: string;
    year: string;
    tags: string[];
    highlight: boolean;
    content: string;
}

interface Homepage {
    welcomeTag: string;
    heroTitle: string;
    heroSubtitle: string;
    heroButtonText: string;
    heroImage: string;
    content: string;
}

export default function AdminPanel() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [homepage, setHomepage] = useState<Homepage | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [editingHomepage, setEditingHomepage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            const response = await fetch('/api/content/list');
            const data = await response.json();
            setProjects(data.projects);
            setHomepage(data.homepage);
            setLoading(false);
        } catch (error) {
            setMessage('Failed to load content');
            setLoading(false);
        }
    };

    const saveProject = async (project: Project) => {
        setSaving(true);
        try {
            const response = await fetch('/api/content/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'project',
                    id: project.id,
                    data: {
                        title: project.title,
                        shortDescription: project.shortDescription,
                        link: project.link,
                        year: project.year,
                        tags: project.tags,
                        highlight: project.highlight
                    },
                    content: project.content
                })
            });

            if (response.ok) {
                setMessage('✅ Project saved! Remember to commit and push to deploy.');
                await loadContent();
            } else {
                setMessage('❌ Failed to save project');
            }
        } catch (error) {
            setMessage('❌ Error saving project');
        }
        setSaving(false);
    };

    const saveHomepage = async (hp: Homepage) => {
        setSaving(true);
        try {
            const response = await fetch('/api/content/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'homepage',
                    data: {
                        welcomeTag: hp.welcomeTag,
                        heroTitle: hp.heroTitle,
                        heroSubtitle: hp.heroSubtitle,
                        heroButtonText: hp.heroButtonText,
                        heroImage: hp.heroImage
                    },
                    content: hp.content
                })
            });

            if (response.ok) {
                setMessage('✅ Homepage saved! Remember to commit and push to deploy.');
                await loadContent();
            } else {
                setMessage('❌ Failed to save homepage');
            }
        } catch (error) {
            setMessage('❌ Error saving homepage');
        }
        setSaving(false);
    };

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Content Admin</h1>

                {message && (
                    <div className="mb-4 p-4 bg-blue-100 border border-blue-300 rounded">
                        {message}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold mb-4">Navigation</h2>

                            <button
                                onClick={() => {
                                    setEditingHomepage(true);
                                    setSelectedProject(null);
                                }}
                                className="w-full text-left px-4 py-2 mb-2 rounded hover:bg-gray-100"
                            >
                                🏠 Homepage
                            </button>

                            <h3 className="font-semibold mt-6 mb-2">Projects</h3>
                            {projects.map(project => (
                                <button
                                    key={project.id}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setEditingHomepage(false);
                                    }}
                                    className="w-full text-left px-4 py-2 mb-1 rounded hover:bg-gray-100 text-sm"
                                >
                                    {project.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="md:col-span-2">
                        {editingHomepage && homepage && (
                            <HomepageEditor
                                homepage={homepage}
                                onSave={saveHomepage}
                                saving={saving}
                            />
                        )}

                        {selectedProject && (
                            <ProjectEditor
                                project={selectedProject}
                                onSave={saveProject}
                                saving={saving}
                            />
                        )}

                        {!editingHomepage && !selectedProject && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <p className="text-gray-500">Select an item to edit</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomepageEditor({ homepage, onSave, saving }: { homepage: Homepage; onSave: (hp: Homepage) => void; saving: boolean }) {
    const [formData, setFormData] = useState(homepage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Homepage</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Welcome Tag</label>
                    <input
                        type="text"
                        value={formData.welcomeTag}
                        onChange={e => setFormData({ ...formData, welcomeTag: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Hero Title</label>
                    <input
                        type="text"
                        value={formData.heroTitle}
                        onChange={e => setFormData({ ...formData, heroTitle: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Hero Subtitle</label>
                    <textarea
                        value={formData.heroSubtitle}
                        onChange={e => setFormData({ ...formData, heroSubtitle: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Button Text</label>
                    <input
                        type="text"
                        value={formData.heroButtonText}
                        onChange={e => setFormData({ ...formData, heroButtonText: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Hero Image Path</label>
                    <input
                        type="text"
                        value={formData.heroImage}
                        onChange={e => setFormData({ ...formData, heroImage: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {saving ? 'Saving...' : 'Save Homepage'}
                </button>
            </form>
        </div>
    );
}

function ProjectEditor({ project, onSave, saving }: { project: Project; onSave: (p: Project) => void; saving: boolean }) {
    const [formData, setFormData] = useState(project);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const updateTags = (value: string) => {
        setFormData({ ...formData, tags: value.split(',').map(t => t.trim()).filter(Boolean) });
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Short Description</label>
                    <textarea
                        value={formData.shortDescription}
                        onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                        rows={2}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Link</label>
                    <input
                        type="text"
                        value={formData.link}
                        onChange={e => setFormData({ ...formData, link: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Year</label>
                    <input
                        type="text"
                        value={formData.year}
                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={formData.tags.join(', ')}
                        onChange={e => updateTags(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={formData.highlight}
                            onChange={e => setFormData({ ...formData, highlight: e.target.checked })}
                            className="mr-2"
                        />
                        <span className="font-semibold">Highlight on homepage</span>
                    </label>
                </div>

                <div>
                    <label className="block font-semibold mb-2">Content (Markdown)</label>
                    <textarea
                        value={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                        className="w-full border rounded px-3 py-2 font-mono text-sm"
                        rows={6}
                    />
                </div>

                <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {saving ? 'Saving...' : 'Save Project'}
                </button>
            </form>
        </div>
    );
}
