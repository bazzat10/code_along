

def leap_year?(year)
  if year % 4 === 0
    if year % 100 === 0
      if year % 400 === 0
        return true
      else
        return false
      end
    else
      return true
    end
  else
    return false
  end
end

def test(expected, actual)
  if expected == actual
    puts 'all good'
  else
    puts 'no good'
  end
end

# if leap_year?(2017) === false
#   puts 'all good'
# end // dont need line anymore

test false, leap_year?(2017) # test(false, leapyear?(2017))
test false, leap_year?(1900) #


#
# if leap_year?(1900) === false
#   puts 'all good'
# else
#   puts 'no good'
# end
