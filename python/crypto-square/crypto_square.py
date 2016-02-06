import re
import math


def segment_text(clean_input, segment_size):
    segmented_text = []
    
    limit = len(clean_input) // segment_size
    print('limit = ', limit)
    for i in range(limit):
        segmented_text.append(clean_input[i * segment_size : segment_size ** (i + 1)])
    
    return segmented_text

def encode_helper(clean_input, segments):
    encoded_text = ''
    
    segments_len = len(segments)
    segment_len = len(segments[0])
    for j in range(segment_len):
        for i in range(segments_len):
            # if ('undefined' !== typeof plainSegments[i][j]) {
                encoded_text += segments[i][j]
            # }
        
        encoded_text += " "
    
    return encoded_text.rstrip()

def encode(message):
    if (0 == len(message)):
        return ''
    
    # TODO: clean up and normalize input
    clean_input = message.lower()
    regex = re.compile(r'[-!#$%^&*()_+|~=`{}\[\]:\";\'<>?,.\/\s]')
    clean_input = regex.sub('', clean_input)
    
    size = math.ceil(math.sqrt(len(clean_input)))
    segmented_text = segment_text(clean_input, size)

    encoded_text = encode_helper(clean_input, segmented_text)
    
    print('clean_input = ', clean_input)
    print('size = ', size)
    print('segmented_text = ', segmented_text)
    print('encoded_text = ', encoded_text)
    
    return encoded_text
    