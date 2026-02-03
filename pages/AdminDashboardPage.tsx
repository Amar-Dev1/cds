import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { useAuth } from '../hooks/useAuth';
import { NewsArticle } from '../types';
import Spinner from '../components/Spinner';
import NewsForm from '../components/NewsForm';

const AdminDashboardPage: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const openCreateForm = () => {
    setEditingArticle(null);
    setIsFormOpen(true);
  };

  const openEditForm = (article: NewsArticle) => {
    setEditingArticle(article);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingArticle(null);
  };

  const handleFormSuccess = () => {
    closeForm();
    fetchArticles();
  };
  
  const handleDelete = async (articleId: number, imageUrl: string | null) => {
    if (!window.confirm("Are you sure you want to delete this article?")) return;

    try {
      // 1. Delete from news table
      const { error: dbError } = await supabase.from('news').delete().eq('id', articleId);
      if (dbError) throw dbError;

      // 2. Delete image from storage if it exists
      if (imageUrl) {
        const fileName = imageUrl.split('/').pop();
        if (fileName) {
           const { error: storageError } = await supabase.storage.from('news_images').remove([fileName]);
           if (storageError) console.warn("Could not delete image from storage:", storageError.message);
        }
      }

      fetchArticles(); // Refresh list
    } catch (err: any) {
      alert(`Error deleting article: ${err.message}`);
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div>
            <button onClick={openCreateForm} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              Create New Post
            </button>
            <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
        </div>

        {isFormOpen && (
          <NewsForm
            article={editingArticle}
            onClose={closeForm}
            onSuccess={handleFormSuccess}
          />
        )}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold">Manage News</h2>
          </div>
          {loading && <div className="p-6 flex justify-center"><Spinner /></div>}
          {error && <p className="p-6 text-red-500">{error}</p>}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{article.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{new Date(article.created_at).toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => openEditForm(article)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                        <button onClick={() => handleDelete(article.id, article.image_url)} className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {articles.length === 0 && <p className="p-6 text-center text-gray-500">No articles found.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
