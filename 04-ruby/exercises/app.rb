require_relative 'monkey.rb'# linking files
# require './monkey.rb'

require 'pry'

adam = Monkey.new("Adam", "Spider Monkey")
adam.eat('fruit salad')
adam.eat('banana milkshake')
adam.introduce # "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"


binding.pry
