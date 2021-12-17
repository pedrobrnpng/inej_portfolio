export function convertPrismicToAnimations(prismic) {

  const collections = [];

  if (prismic) {

    prismic.map((collection) => {
      collections.push({
        project: collection.uid,
        title: collection.data.title,
        img: {
          url: collection.data.image.url,
          alt: collection.data.image.alt,
          width: collection.data.image.dimensions.width,
          height: collection.data.image.dimensions.height,
        },
        type: collection.data.post_type
      })
    })

    return collections;
  }

  return null;
}

export function convertPrismicToDrawings(prismic) {

  const collections = [];

  if (prismic) {

    prismic.map((collection) => {
      collections.push({
        project: collection.uid,
        title: collection.data.title,
        img: {
          url: collection.data.image.url,
          alt: collection.data.image.alt,
          width: collection.data.image.dimensions.width,
          height: collection.data.image.dimensions.height,
        },
        type: collection.data.post_type
      })
    })

    return collections;
  }

  return null;

}

export function convertPrismicToData(prismic) {

  const posts = [];
  if (prismic) {
    prismic.map((post) => {
      posts.push({
        project: post.uid,
        title: post.data.title,
        type: post.data.post_type,
        date: post.data.date,
        img: {
          url: post.data.image.url,
          alt: post.data.image.alt,
          width: post.data.image.dimensions.width,
          height: post.data.image.dimensions.height,
        },
        video: post.data.video.url || '',
        description: post.data.post_description
      })
    })

    return posts;
  }

  return posts;
}

export function convertPrismicToPost(prismic) {

  const { data } = prismic;

  var colaborators = [''];
  colaborators = data.colaborators.map((colaborator) => colaborator.colaborator_name)
  var sound = [''];
  sound = data.sound.map((sound) => sound.sound_colaborator)


  const post = {
    project: prismic.uid,
    title: data.title,
    type: data.post_type,
    date: data.date,
    img: {
      url: data.image.url,
      alt: data.image.alt,
      width: data.image.dimensions.width,
      height: data.image.dimensions.height,
    },
    video: data.video.url || '',
    description: data.post_description,
    colaborators,
    sound
  }

  return post;
}

export function convertPrismicToAbout(prismic) {

  const { data } = prismic;

  const aboutPage = {
    img: {
      url: data.img.url,
      alt: data.img.alt,
      width: data.img.dimensions.width,
      height: data.img.dimensions.height,
    },
    description: data.about_me
  }

  return aboutPage
}