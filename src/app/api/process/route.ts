import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { inputType, content, customPrompt } = data;

  try {
    const response = await fetch('http://your-flask-api-url/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputType, content, customPrompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to process request');
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}
