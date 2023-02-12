import BlogHeader from '@/components/BlogHeader';
import BlogMarkdown from '@/components/BlogMarkdown';
import { getPost } from '@/util/posts';

const BlogPage = async ({ params }) => {
  const fileName = `${params.slug}.md`;
  const { title, description, date, content } = await getPost(fileName);

  const headerInfo = { title, description, date };

  return (
    <>
      <BlogHeader info={headerInfo} />
      <BlogMarkdown className="basis-2/4" content={content} />
    </>
  );
};

export default BlogPage;
