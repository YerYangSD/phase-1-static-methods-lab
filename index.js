class Formatter {
  static capitalize(string) {
    //takes in a string and capitalizes the first letter
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    //takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }
  static titleize(string) {
    // takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always captalizes the first word
    // 
    return string.split(" ").map(word =>{
      return word[0].toUpperCase() + word.slice(1)
    }).join(" ")
  }
}
console.log(Formatter.capitalize("letter"))
console.log(Formatter.sanitize("the #cat $in &the =hat"))
console.log(Formatter.titleize("the cat in the hat"))