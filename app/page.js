import BlogList from '@/component/BlogList';
import { getAllPosts } from '@/util/posts';
import Link from 'next/link';

export default function Home() {
  const blogList = getAllPosts();
  return (
    <>
      <ul className="flex flex-col items-center space-y-5">
        {blogList.map(blog => (
          <Link
            className="text-lg w-full h-14 border-2 rounded-md border-black border-dashed"
            key={blog.fileName}
            href={`/blog/${blog.fileName}`}
          >
            {blog.title}
            <span className="block">2022-01-01</span>
          </Link>
        ))}
      </ul>
      {/* <BlogList /> */}
    </>
  );
}
