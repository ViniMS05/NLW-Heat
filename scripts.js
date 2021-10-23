const socialMedia = {
  github: 'ViniMS05',
  youtube: 'RocketSeat',
  faceboook: '',
  instagram: 'vini_ms05',
  twitter: 'hyugiz05'
}

function changeSocialMedia() {
  let githubLink =
    (github.href = `https://www.github.com/${socialMedia.github}`)
  let youtubeLink =
    (youtube.children[0].href = `https://www.youtube.com/c/${socialMedia.youtube}`)
  let instagramLink =
    (instagram.children[0].href = `https://www.instagram.com/${socialMedia.instagram}`)
  let facebookLink =
    (facebook.children[0].href = `https://www.facebook.com/${socialMedia.faceboook}`)
  let twitterLink =
    (twitter.children[0].href = `https://www.twitter.com/${socialMedia.twitter}`)

  return githubLink, youtubeLink, instagramLink, facebookLink, twitterLink
}
changeSocialMedia()
