import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDir = path.join(process.cwd(), '_posts');

const getSlugs = () => {
  const posts = fs.readdirSync(postsDir);
  return posts;
};

const getAllPosts = () => {
  const posts = fs.readdirSync(postsDir);
  const getFiles = posts
    .map(file => {
      const fileContents = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(fileContents);
      const fileName = file.substring(0, file.lastIndexOf('.md'));
      return { fileName, title: data.title };
    })
    .reverse();

  return getFiles;
};

const markdownToHtml = async markdown => {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
};

const getPost = async fileName => {
  const fileContents = fs.readFileSync(path.join(postsDir, fileName), 'utf8');
  const { data, content } = matter(fileContents);

  const contentHtml = await markdownToHtml(content);

  return {
    ...data,
    content: contentHtml,
  };
};

export { getSlugs, getAllPosts, getPost };
