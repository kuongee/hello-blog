import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getPost } from '@/util/posts';

const Page = ({ params }) => {
  const fileName = `${params.id}.md`;
  const { title, content } = getPost(fileName);

  return (
    <ReactMarkdown
      components={{
        // code({ node, inline, className, children, ...props }) {
        //   const match = /language-(\w+)/.exec(className || '');
        //   return !inline && match ? (
        //     <SyntaxHighlighter
        //       children={String(children).replace(/\n$/, '')}
        //       style={materialDark}
        //       language={match[1]}
        //       PreTag="div"
        //       {...props}
        //     />
        //   ) : (
        //     <code className={className} {...props}>
        //       {children}
        //     </code>
        //   );
        // },
        blockquote: ({ node, ...props }) => <blockquote {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Page;
