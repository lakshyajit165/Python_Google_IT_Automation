
# Here is a list of punctuations and uninteresting words you can use to process your text
punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
uninteresting_words = ["the", "a", "to", "if", "is", "it", "of", "and", "or", "an", "as", "i", "me", "my", \
                       "we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its",
                       "they", "them", \
                       "their", "what", "which", "who", "whom", "this", "that", "am", "are", "was", "were", "be",
                       "been", "being", \
                       "have", "has", "had", "do", "does", "did", "but", "at", "by", "with", "from", "here", "when",
                       "where", "how", \
                       "all", "any", "both", "each", "few", "more", "some", "such", "no", "nor", "too", "very",
                       "can", "will", "just"]

# LEARNER CODE START HERE
word_frequencies = {}
with open("wordcloud", 'r') as f:
    for line in f:
        words = line.split()
        for word in words:
            word = str(filter(lambda ch: ch not in punctuations, word))
            if word == '':
                pass
            elif word.lower() in word_frequencies.keys() and word not in uninteresting_words:
                word_frequencies[word.lower()] += 1
            else:
                word_frequencies[word.lower()] = 1

print(word_frequencies)