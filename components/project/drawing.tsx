import Vimeo from "@u-wave/react-vimeo"
import { motion } from "framer-motion"
import Head from "next/head"
import React from "react"
import utilStyles from './drawing.module.css'
import Layout, { siteTitle } from "../layout"

export default function Drawing( {post} ) {

  return(
    <Layout>
      <Head>
        <title> {post.title} | {siteTitle}</title>
      </Head>

      <div style={{ paddingTop: 140 }}>
        <div className={`${utilStyles.container}`}>
          <div className={`${utilStyles.row}`}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.title}`}
            >
              <h3>{post.title}</h3>
              <h5>{post.type} - School Project</h5>
              <div>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </p>
              </div>

              <div className={`${utilStyles.metaRow}`}>
                {post.colaborators.length > 0 ?
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={`${utilStyles.colaborators}`}
                  >
                    <h5>In colaboration with</h5>
                    {post.colaborators.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </motion.div>
                  :
                  <div></div>
                }

                {post.sound.length > 0 ?
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={`${utilStyles.sound}`}
                  >
                    <h5>Sound by</h5>
                    {post.sound.map((name) => {
                      return (
                        <p>{name.trim()}</p>
                      )
                    })}
                  </motion.div>
                  :
                  <div></div>
                }
              </div>
            </motion.div>
            
          </div>
          {post.videoUrl ?
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.vimeoContainer}`}
            >
              <Vimeo
                video={post.videoUrl}
                responsive={true}
              />
            </motion.div>
            :
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .2 }}
              className={`${utilStyles.imageContainer}`}
            >
              <img
                src={`${post.img}`}
                alt={post.title}
                title={post.title}
              />
            </motion.div>
          }
        </div>
      </div>
    </Layout>
  )
}