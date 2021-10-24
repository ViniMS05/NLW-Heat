const socialMedia = {
  github: 'ViniMS05',
  youtube: 'RocketSeat',
  faceboook: '',
  instagram: 'vini_ms05',
  twitter: 'hyugiz05'
}

function changeSocialMedia() {
  /*  let githubLink =
    (github.href = `https://www.github.com/${socialMedia.userGithub}`)*/
  let youtubeLink =
    (youtube.children[0].href = `https://www.youtube.com/c/${socialMedia.youtube}`)
  let instagramLink =
    (instagram.children[0].href = `https://www.instagram.com/${socialMedia.instagram}`)
  let facebookLink =
    (facebook.children[0].href = `https://www.facebook.com/${socialMedia.faceboook}`)
  let twitterLink =
    (twitter.children[0].href = `https://www.twitter.com/${socialMedia.twitter}`)

  return youtubeLink, instagramLink, facebookLink, twitterLink
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userAvatar.src = data.avatar_url
      userGithub.href = data.html_url
      repositoriesUser.textContent = `Repositórios: ${data.public_repos}`
    })
}
getGitHubProfileInfos()
