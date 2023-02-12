const BlogMarkdown = ({ content, className }) => {
  return (
    <>
      <article
        className={`${className} prose prose-slate prose-a:text-indigo-500 prose-a:no-underline`}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </>
  );
};

export default BlogMarkdown;
