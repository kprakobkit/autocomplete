window.onload = function() {
  var dictionary = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

  function updateSearchResults(matchedWords) {
    matchedWords.forEach(function(word) {
      matchedWord = document.createElement('input');
      lineBreak = document.createElement('br');
      matchedWord.setAttribute('disabled', 'disabled');
      matchedWord.setAttribute('value', word);
      document.getElementById('search-results').appendChild(matchedWord);
      document.getElementById('search-results').appendChild(lineBreak);
    });
  }


  searchInput.onkeyup = function(e) {
    var searchKeyword = this.value;
    var matchedWords = [];
    var searchInput = document.getElementById('search');
    var suggestions = document.getElementById('suggestions');

    document.getElementById('search-results').innerHTML = ""; // clear previous search results

    if (searchKeyword.length === 0) {
      suggestions.value = "";
      return false;
    }


    dictionary.forEach(function(word) {
      var matcher = new RegExp('^' + searchKeyword, "i");
      if (matcher.test(word)) {
        matchedWords.push(word);
      }
    });

    updateSearchResults(matchedWords);
  };
};
