// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

// For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

// However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

const STRANGE_STRING = "oßo"