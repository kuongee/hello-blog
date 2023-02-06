import Link from 'next/link';
import { getAllPosts } from '@/util/posts';

const BlogPage = () => {
  const blogList = getAllPosts();

  return (
    <>
      <ul>
        {blogList.map(blog => (
          <li key={blog.fileName}>
            <Link href={`/blog/${blog.fileName}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
