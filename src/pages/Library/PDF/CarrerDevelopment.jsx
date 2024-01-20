import React from "react";

const CareerDevelopmentPDF = ({ resources }) => {
  const developmentResources = resources.filter(
    (resource) => resource.category === 'Career Development'
  );
  const handleDownload = (fileUrl, title) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${title}.pdf`; // Use the title for the suggested filename
    link.target = '_blank'; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
return (
<div className="grid grid-cols-3 gap-4  py-4">
    {developmentResources.map((resource, index) => (
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
                download={`${resource.title}.pdf`} // Specify the filename in the download attribute
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
)
  }



export default CareerDevelopmentPDF;