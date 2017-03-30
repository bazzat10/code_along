require 'pry'

class Phone

  def initialize(number)
    @num = number
    @area_code = []
  end

  def number
    output = @num.gsub(/['(:;) .-]/, "")

    if output.length === 11 || output.length === 9
      if output[0] === '1' && output.length === 11
        return output.split('').drop(1).join('')
      else
        return '0000000000'
      end
    else
      return output
    end
  end

  def area_code
    code = @num.split("")
    for i in 0..2
      @area_code << code[i]
    end

    return @area_code.join("")

  end

  def to_s
    split_num = @num.split("")

    split_num.insert(0,*['('])
    split_num.insert(4,*[')'])
    split_num.insert(5,*[' '])
    split_num.insert(9,*['-'])
    split_num.join('')
    
  end

end
