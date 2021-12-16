import { motion } from "framer-motion"
import Head from "next/head"
import React from "react"
import utilStyles from './drawing.module.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Layout, { siteTitle } from "../layout"
import { RichText } from "prismic-reactjs"
import Image from 'next/image'

export default function Drawing({ post }) {

  console.log(post);

  return (
    <Layout>
      <Head>
        <title> {post.title} | {siteTitle}</title>
      </Head>

      <div className={`${utilStyles.container}`}>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .2 }}
          className={`${utilStyles.imageContainer}`}
        >
          <Zoom
            overlayBgColorStart='rgba(14, 14, 14, 0.8)'
            overlayBgColorEnd='rgba(14, 14, 14, 0.8)'
            zoomMargin={30}
          >
            <div className={`${utilStyles.image}`}>
              <Image
                src={post.img.url}
                alt={post.img.alt}
                title={post.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Zoom>
        </motion.div>
        <div className={`${utilStyles.description}`}>
          <h2>{post.title}</h2>
          <h5>{post.type} - School Project</h5>
          <div className={`${utilStyles.textDescription}`}>
            <RichText
              render={post.description}
            />
          </div>
          <div className={`${utilStyles.textDescription}`}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          {
            (post.colaborators.length !== 0 || post.sound.length !== 0) ?
              <>
                <h4>Credits</h4>
                <div className={`${utilStyles.credits}`}>
                  {
                    post.colaborators ?
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
                      :
                      <></>
                  }
                  {
                    post.sound ?
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
                      :
                      <></>
                  }

                </div>
              </>
              :
              <></>
          }
        </div>
      </div>
    </Layout>
  )
}