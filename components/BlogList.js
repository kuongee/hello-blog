import Link from 'next/link';
import { getAllPosts } from '@/util/posts';

const BlogList = () => {
  const blogList = getAllPosts();

  return (
    <>
      <ul className="flex flex-col items-center space-y-5">
        {blogList.map(blog => (
          <Link
            className="text-lg w-full h-20"
            key={blog.fileName}
            href={`/blog/${blog.fileName}`}
          >
            <span className="font-bold text-2xl text-gray-600 hover:text-indigo-700">
              {blog.title}
            </span>
            <span className="text-gray-500 text-sm block">{blog.fileName}</span>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
