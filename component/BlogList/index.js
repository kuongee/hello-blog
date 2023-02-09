import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/util/posts';

const BlogList = () => {
  const blogList = getAllPosts();

  return (
    <>
      <ul className="flex flex-col space-y-5">
        {blogList.map(blog => (
          <li key={blog.fileName}>
            <Link
              key={blog.fileName}
              className="border-1 rounded-md border-black border-dashed"
              href={`/blog/${blog.fileName}`}
            >
              {blog.title}
              <span>2022-01-01</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
