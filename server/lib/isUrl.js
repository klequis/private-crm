

// var t = 'www.google.com'

// if (t.match(regex)) {
//   alert("Successful match")
// } else {
//   alert("No match")
// }

export const isUrl = (url, https=true) => {
  if (https) {

  }

  const exp = https
    ? /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    : /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  // const expHttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/



  if (url.match(exp)) {
    return true
  } else {
    return false
  }
}

// isUrl('http://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url') // test