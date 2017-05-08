def initialize
  @count
end

def infinity_and_beyond
  inifinity_and_beyond
end


# count down from 20
# blast off when I reach 0


def countdown(count)
  if count <= 0
    puts 'blast off'
  else
    puts count
    #sub problem
    countdown(count - 1)
  end
end

def sum(list)
  if list.length == 0
    return 0
  else
    list.shift + sum(list)
  end
  # puts numArray
  # if numArray.length < 0
  #   puts @count
  # else
  #   @count += numArray[numArray.length-1]
  #   sum(numArray.length - 1)
  # end
end

countdown(20) # countdown(19) # countdown(18)
sum([1,2,3,4,5])


# given a list of nymbers [1,2,3,4,5]
# write a function to workout the sumeo using recursion
