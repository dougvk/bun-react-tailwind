'use client'

import { useState } from 'react';

interface InputFormProps {
  onSubmit: (inputType: string, content: string, customPrompt: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [inputType, setInputType] = useState<'youtube' | 'transcription'>('youtube');
  const [content, setContent] = useState('');
  const [customPrompt, setCustomPrompt] = useState('Please provide a concise summary of the following transcription:');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputType, content, customPrompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Input Type</label>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value as 'youtube' | 'transcription')}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="youtube">YouTube URL</option>
          <option value="transcription">Transcription</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {inputType === 'youtube' ? 'YouTube URL' : 'Transcription'}
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
          placeholder={inputType === 'youtube' ? 'Enter YouTube URL' : 'Paste transcription here'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Custom Prompt</label>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          rows={2}
          className="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
