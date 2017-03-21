require 'pry'
require 'active_record'

options = {
  adapter: 'postresql',
  database: 'goodfoodhunting',
  username: 'Barry'
}

ActiveRecord::Base.establish_connection(options)

class Dish <
  ActiveRecord::Base
  #attr_accessor: name, image_url

  #def
end


binding.pry
