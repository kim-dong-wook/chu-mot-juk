import React, { useState, useEffect } from 'react';
import { getBook } from '../../api/API';
const TagsComponent = ({ novelNo }) => {
  const [tags, setTags] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(novelNo);
      setTags(result.data.tagNames);
    };
    fetchData();
  }, [novelNo]);
  if (!tags) {
    return null;
  }
  return (
    <div className=" overflow-hidden h-[110px]">
      <div className="inline">
        {tags.slice(0, 5).map((tag, index) => (
          <span
            id={index}
            target="_self"
            className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsComponent;
