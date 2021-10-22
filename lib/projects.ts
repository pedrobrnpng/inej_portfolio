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

export function getSelectedPosts(fields = []) {
  const names = getProjectNames();
  const posts = names
    .map((project) => getSelectedPostByName(project, fields))
  return posts;
}

export async function getPostByName(id: string, fields: string[] = []) {

  var name;
  if (id != null && id != undefined) {
    name = id.replace(/\.md$/, '');
  }

  const { data, content } = getPostContent(name);

  type Items = {
    [key: string]: string
  }
  const items: Items = {};

  fields.forEach((field) => {
    items[field] = fillFields(field, name, data, content)
  })

  // Combine the data with the id and contentHtml
  return items;
}

export async function getSelectedPostByName(id: string, fields: string[] = []) {

  var name;
  if (id != null && id != undefined) {
    name = id.replace(/\.md$/, '');
  }

  const { data, content } = getPostContent(name);

  type Items = {
    [key: string]: string
  }
  const items: Items = {};

  if (data.selected === true) {

    fields.forEach((field) => {
      items[field] = fillFields(field, name, data, content)
    })
  }

  // Combine the data with the id and contentHtml
  return items;
}

function getPostContent(name) {

  const fullPath = path.join(postsDirectory, `${name}.md`);

  var fileContents;
  if (fullPath != null && fullPath != undefined) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  }

  // Use gray-matter to parse the post metadata section
  return matter(fileContents);
}

function fillFields(field, name, data, content) {

  if (field === 'project') {
    return name;
  }

  if (field === 'title') {
    return data.title
  }

  if (field === 'content') {
    return content
  }

  if (field === 'img') {
    return data.img
  }

  if (field === 'videoUrl') {
    return data.videoUrl
  }

  if (field === 'type') {
    return data.type
  }

  if (field === 'sound') {
    var sound: any;

    if (data.sound)
      sound = data.sound.split(";")
    else
      sound = [];

    return sound;
  }

  if (field === 'colaborators') {
    var colaborators: any;

    if (data.colaborators)
      colaborators = data.colaborators.split(";")
    else
      colaborators = []

    return colaborators;
  }
}
