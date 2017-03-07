# given a list of names
# I want to create directories for each name
# and inside each directory creat a new file

# code along exercise
# user enter a list full names "Daniel Tsui" seperated comma
# i want to create diretories for each first name only lowercased
# /daniel



# = begin
#
# = end

# 3. times do
#   puts 'beetlejuice'
# end

require 'fileutils' # standard libary
require 'pry' # because I need the debugging methods
# FileUtils.mkdir 'test'

# puts 'hello'
# binding.pry
# puts 'world'

# hackers = ["kerry","will","sam"]

# while condition
# #end
# index = 0
# while index <= 2
#   puts hackers[index]
#   index = index + 1
# end
#
#
# "John Smith, Mary Jane"
puts 'enter names seperated by commas'
get_full_names = gets().chomp # in ruby use _ to seperate variable names. instead of getFullNames use get_full_names // chomp gets rid of the new line in gets




full_names = get_full_names.split(",") # do not use fullNames

index = 0
while index < full_names.length
  # FileUtils.mkdir full_names[index].downcase() # dont need the () you can use .downcase
  # FileUtils.cd full_names[index].downcase()
  # FileUtils.touch 'readme.txt'
  # FileUtils.cd '..'

  FileUtils.mkdir full_names[index].downcase() # dont need the () you can use .downcase

    FileUtils.cd (full_names[index].downcase()) do # do this instead of going back out to the directory
      FileUtils.touch 'readme.txt'
    end


    # index = index + 2
    index += 2

  end


hackers = ["John smith", "Mary Jane", "full slack"]



hackers.each do |hacker| # enter block
  puts hacker + '!'
end

# higher order function
# hackers.forEach(function(hacker)) { javascript
#   console.log(hacker);
# })


#loop do

#end

# loop do
#   puts 'help me i am stuck'
# end
