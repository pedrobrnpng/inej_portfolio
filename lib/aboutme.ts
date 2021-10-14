import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data/aboutme')

export async function getData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()
  const img = data.img;

  // Combine the data with the id and contentHtml
  return {
    id,
    img,
    contentHtml
  }
}
