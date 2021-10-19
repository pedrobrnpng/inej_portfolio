import Vimeo from "@u-wave/react-vimeo"
import { motion } from "framer-motion"
import Head from "next/head"
import React from "react"
import utilStyles from './animation.module.css'
import Layout, { siteTitle } from "../layout"

export default function Animation({ post }) {

  return (
    <Layout>
      <Head>
        <title> {post.title} | {siteTitle}</title>
      </Head>

      <div className={`${utilStyles.container}`}>
        <div>
          <Vimeo
            video={post.videoUrl}
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
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <h4>Credits:</h4>
          <div className={`${utilStyles.credits}`}>
            <div>
              <h5>Sound by</h5>
              {post.sound.map((name) => {
                return (
                  <p>{name.trim()}</p>
                )
              })}
            </div>
            <div>
              <h5>In colaboration with</h5>
              {post.colaborators.map((name) => {
                return (
                  <p>{name.trim()}</p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}