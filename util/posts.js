import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), '_posts');
const posts = fs.readdirSync(join(process.cwd(), '_posts'));

export const getAllPosts = () => {
  const getFiles = posts.map(file => {
    const fileContents = fs.readFileSync(join(postsDir, file), 'utf8');
    const { data } = matter(fileContents);
    const fileName = file.substring(0, file.lastIndexOf('.md'));
    return { fileName, title: data.title };
  });

  return getFiles;
};

export const getPost = fileName => {
  const fullPath = join(postsDir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
};
