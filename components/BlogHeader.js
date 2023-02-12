import { useMemo } from 'react';

const BlogHeader = async ({ info }) => {
  const { title, description, date } = info;

  const formattedDate = useMemo(() => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }, [date]);

  return (
    <div className="max-h-32 h-32 min-h-fit">
      <h1 className="text-3xl">{title}</h1>
      <h2>{description}</h2>
      <span>{formattedDate}</span>
    </div>
  );
};

export default BlogHeader;
