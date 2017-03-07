require 'pry'

#cli programs
#File.open
# ARGV - globa variable array with your arguments
#
#
# puts ARGV[0]
#
# binding.pry

# $ruby loc.rb enums_and_blocks.rb
# $ruby loc.rb loc.rb


filename = ARGV[0]#'enums_and_blocks.rb'

file = File.open(filename) # OR File.open(filename).count

# file.each do |line|
#   puts line
# end
#

# OR try this

# File.open(filename) do |file|
#   puts file.coutn
# end

puts(file.count) # closing the file object NOT File.open

file.close


binding.pry
