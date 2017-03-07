require 'pry'

# brackets optional example - def double_me(number)
def double_me(number)
  11
  if number > 5
    return number + number
  else
    return 1 ## will return 1 because of return value
  end
  11
end

binding.pry # testing using pry

double_me(4)
