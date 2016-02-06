import re
import math


def segment_text(clean_input, segment_size):
    segmented_text = []
    
    limit = math.ceil(len(clean_input) / segment_size)
    for i in range(limit):
        start_pt = i * segment_size
        segmented_text.append(clean_input[start_pt : start_pt + segment_size])
    
    return segmented_text

def encode_helper(clean_input, segments):
    encoded_text = ''
    
    segments_len = len(segments)
    segment_len = len(segments[0])
    for j in range(segment_len):
        for i in range(segments_len):
            if (j < len(segments[i])):
                encoded_text += segments[i][j]
        
        encoded_text += " "
    
    return encoded_text.rstrip()

def encode(message):
    if (0 == len(message)):
        return ''
    
    clean_input = message.lower()
    regex = re.compile(r'[-!#$%^&*()_+|~=`{}\[\]:\";\'<>?,.\/\s]')
    clean_input = regex.sub('', clean_input)
    
    size = math.ceil(math.sqrt(len(clean_input)))
    segmented_text = segment_text(clean_input, size)

    return encode_helper(clean_input, segmented_text)