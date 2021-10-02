import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'data/projects')

export function getProjectNames() {
  return fs.readdirSync(postsDirectory)
}

export function getAllPosts(fields = []) {
  const names = getProjectNames();
  const posts = names
    .map((project) => getPostByName(project, fields))
  return posts;
}

export async function getPostByName(id: string, fields: string[] = []) {
  var name;
  if (id != null && id != undefined) {
    name = id.replace(/\.md$/, '');
  }

  const fullPath = path.join(postsDirectory, `${name}.md`);

  var fileContents;
  if (fullPath != null && fullPath != undefined) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  }

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string
  }
  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'project') {
      items[field] = name
    }
    if (field === 'title') {
      items[field] = data.title
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'img') {
      items[field] = data.img
    }
  })

  // Combine the data with the id and contentHtml
  return items;
}
