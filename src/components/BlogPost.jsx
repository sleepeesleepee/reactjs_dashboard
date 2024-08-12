import React from 'react';

const BlogPost = ({ title, author, date, content, additionalImages, coverImage }) => {
  return (
    <div className="w-full bg-white p-4 md:p-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
        <div className="lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
          {coverImage && (
            <img
              src={coverImage}
              alt="Blog post cover"
              className="w-full max-w-sm h-48 sm:h-64 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-black pb-2">{title}</h1>
          <p className="text-base text-gray-600 mb-4">
            By {author} • <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          </p>
          <article className="w-full">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base text-black">{paragraph}</p>
            ))}
          </article>
          {additionalImages && additionalImages.map((img, index) => (
            <img key={index} src={img} alt={`Additional ${index}`} className="w-full mt-4 rounded-lg"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
