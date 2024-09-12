interface ResultDisplayProps {
  result: {
    transcription?: string;
    summary: string;
  };
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="mt-8 space-y-6">
      {result.transcription && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Transcription</h2>
          <p className="text-gray-700 bg-white p-4 rounded-md shadow">{result.transcription}</p>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700 bg-white p-4 rounded-md shadow">{result.summary}</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
