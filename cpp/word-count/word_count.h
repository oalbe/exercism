// // cmake -G "Unix Makefiles" .. -DCMAKE_MAKE_PROGRAM=c:/dev/msys64/mingw32/bin/mingw32-make.exe
// #ifndef WORD_COUNT_H
// #define WORD_COUNT_H

// #include <string>
// #include <sstream>
// #include <vector>
// #include <map>

// std::vector<std::string>
// &split(const std::string &s, char delim, std::vector<std::string> &elems) {
//     std::stringstream ss(s);
//     std::string item;
    
//     while (std::getline(ss, item, delim)) {
//         elems.push_back(item);
//     }
    
//     return elems;
// }

// std::vector<std::string> split(const std::string &s, char delim) {
//     std::vector<std::string> elems;
//     split(s, delim, elems);
//     return elems;
// }

// namespace word_count {
// 	std::map<std::string, int> words(std::string const &input);
// }

// #endif // WORD_COUNT_H


#if !defined(WORD_COUNT_H)
#define WORD_COUNT_H

#include <map>
#include <string>

namespace word_count
{

std::map<std::string, int> words(std::string const& text);

}

#endif