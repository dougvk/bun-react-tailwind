'use client'

import { useState } from 'react';
import InputForm from './InputForm';
import ResultDisplay from './ResultDisplay';

const LandingPage = () => {
  const [result, setResult] = useState<{ transcription?: string; summary: string } | null>(null);

  const handleSubmit = async (inputType: string, content: string, customPrompt: string) => {
    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputType, content, customPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to process request');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error processing request:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">YouTube Transcription and Summary</h1>
      <InputForm onSubmit={handleSubmit} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default LandingPage;
