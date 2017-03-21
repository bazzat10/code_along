require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
  username: 'Barry'
}

ActiveRecord::Base.establish_connection(options)
