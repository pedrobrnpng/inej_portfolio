import Vimeo from "@u-wave/react-vimeo"
import Head from "next/head"
import React from "react"
import utilStyles from './animation.module.css'
import Layout, { siteTitle } from "../layout"
import { RichText } from "prismic-reactjs"

export default function Animation({ post }) {

  return (
    <Layout>
      <Head>
        <title> {post.title} | {siteTitle}</title>
      </Head>

      <div className={`${utilStyles.container}`}>
        <div>
          <Vimeo
            video={post.video}
            dnt={true}
            showPortrait={false}
            showTitle={false}
            showByline={false}
            responsive={true}
          />
        </div>
        <div className={`${utilStyles.description}`}>
          <h2>{post.title}</h2>
          <h5>{post.type} - School Project</h5>
          <div className={`${utilStyles.textDescription}`}>
            <RichText
              render={post.description}
            />
          </div>
          <h4>Credits:</h4>
          <div className={`${utilStyles.credits}`}>
            <div className={`${utilStyles.creditContainer}`}>
              <h5>In colaboration with</h5>
              <ul>
                {post.colaborators.map((name) => {
                  return (
                    <li>{name.trim()}</li>
                  )
                })}
              </ul>
            </div>
            <div className={`${utilStyles.creditContainer}`}>
              <h5>Sound by</h5>
              <ul>
                {post.sound.map((name) => {
                  return (
                    <li>{name.trim()}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}