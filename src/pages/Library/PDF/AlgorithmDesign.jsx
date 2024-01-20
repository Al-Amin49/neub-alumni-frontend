import React from 'react';

const AlgorithmDesignPDF = ({ resources }) => {
  // Filter resources for Algorithm Design category
  const algorithmResources = resources.filter(
    (resource) => resource.category === 'Algorithm Design'
  );
  const handleDownload = (fileUrl, title) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${title}.pdf`; // Use the title for the suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="grid grid-cols-3 gap-4  py-4">
      {algorithmResources.map((resource, index) => (
        <div key={index} className="mb-8 border-2 p-4 bg-lime-300 rounded-full text-center">
          {resource.title && (
            <>
              <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
            </>
          )}
          {resource.description && (
            <>
              <p className="text-sm font-medium">{resource.description}</p>
            </>
          )}
          {resource.fileUrl && (
            <>
              <a
                href={resource.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm"
              >
                {resource.fileUrl}
              </a>
              <br />
              <button
                className="text-primary font-bold text-sm cursor-pointer"
                onClick={() => handleDownload(resource.fileUrl, resource.title)}
              >
                Download
              </button>
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
};



export default AlgorithmDesignPDF;
