require 'pry'


def to_sentence(arr)
  if arr.length > 2
    last_arr = arr.pop
    return arr.rotate(1).join(', ').concat(' and ' + last_arr).capitalize
  else
    return arr.join(' and ').capitalize
  end
end
