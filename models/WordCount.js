// Schema for Word Count

var WordCount = module.exports ;

// Get Word Count

module.exports.getWordCount = function(){
	var index = 0;
	var sentence = "i am neha";
    var words = sentence
              .replace(/[.,?!;()"'-]/g, " ")
              .replace(/\s+/g, " ")
              .toLowerCase()
              .split(" ");

    // var index = {};
    // words.forEach(function (word) {
    //     if (!(index.hasOwnProperty(word))) {
    //         index[word] = 0;
    //     }
    //     index[word]++;
    // });

    index = words.length;
    console.log(index);

    // return index;
}
