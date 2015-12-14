#include "word_count.h"

// std::map<std::string, int> words(std::string const &input) {
// 	// std::vector<std::string> single_words = split(input, ' ');
	
// 	std::map<std::string, int> counts;
// 	// for (size_t i = 0; i < single_words.size(); ++i) {
// 	// 	auto search = counts.find(single_words[i]);
		
// //   		if(search != counts.end()) {
// 	// 		// counts.insert(single_words[i], 1);
// 	// 		counts[single_words[i]] = 1;
// 	// 	} else {
// 	// 		counts[single_words[i]] += 1;
// 	// 	}
// 	// }
	
// 	counts.insert(std::make_pair("word", 1));
// 	return counts;
// }

#include <algorithm>
#include <cctype>
#include <iterator>
#include <vector>
#include <boost/algorithm/string.hpp>

using namespace std;

namespace
{

string normalize_text(string const& text)
{
    string normalized;
    transform(text.begin(), text.end(), back_inserter(normalized),
        [](const char c) { return (isalnum(c) || c == '\'') ? tolower(c) : ' '; });
    return normalized;
}

string trim_word(string const& word)
{
    return boost::trim_copy_if(word, boost::is_any_of("' "));
}

vector<string> split_text_into_words(string const& text)
{
    vector<string> words;
    boost::split(words, text, boost::is_any_of("\t "));
    transform(words.begin(), words.end(), words.begin(), trim_word);
    return words;
}

}

namespace word_count
{

map<string, int> words(string const& text)
{
    map<string, int> count;
    for (auto const& word : split_text_into_words(normalize_text(text)))
    {
        if (!word.empty())
        {
            ++count[word];
        }
    }
    return count;
}

}