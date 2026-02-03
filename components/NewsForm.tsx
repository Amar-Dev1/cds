import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { NewsArticle } from '../types';
import { compressImage } from '../utils/imageCompressor';

interface NewsFormProps {
  article: NewsArticle | null;
  onClose: () => void;
  onSuccess: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ article, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content || '');
    } else {
      setTitle('');
      setContent('');
    }
    setImageFile(null);
  }, [article]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let imageUrl = article?.image_url || null;

      if (imageFile) {
        const compressedFile = await compressImage(imageFile);
        const fileName = `${Date.now()}_${compressedFile.name}`;
        
        // Upload new image
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('news_images')
          .upload(fileName, compressedFile);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('news_images')
          .getPublicUrl(uploadData.path);
        
        imageUrl = urlData.publicUrl;

        // If editing and there was an old image, delete it
        if (article?.image_url) {
            const oldFileName = article.image_url.split('/').pop();
            if (oldFileName) {
                await supabase.storage.from('news_images').remove([oldFileName]);
            }
        }
      }

      const articleData = {
        title,
        content,
        image_url: imageUrl,
      };

      if (article) {
        // Update existing article
        const { error: updateError } = await supabase
          .from('news')
          .update(articleData)
          .eq('id', article.id);
        if (updateError) throw updateError;
      } else {
        // Create new article
        const { error: insertError } = await supabase
          .from('news')
          .insert([articleData]);
        if (insertError) throw insertError;
      }

      onSuccess();
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{article ? 'Edit Article' : 'Create New Article'}</h3>
          <form onSubmit={handleSubmit} className="mt-2 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
              <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={10} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
              <input type="file" id="image" onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)} accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
              {article?.image_url && !imageFile && <p className="text-xs text-gray-500 mt-1">Current image will be kept unless a new one is uploaded.</p>}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="items-center px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-400">
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
              <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
