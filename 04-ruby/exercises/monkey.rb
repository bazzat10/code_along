# Monkies!!
#
# Create a Monkey class in monkey.rb, which has the following attributes:
#
# name - a string, which should be determined by some input
# species - a string, which should be determined by some input
# foods_eaten - an array, which should be initialized as an empty array
# And the following methods:
#
# eat(food) - adds a food (a string) to the list of foods eaten
# introduce - introduces self, with name, species, and what it's eaten
# Create another file app.rb to use test out the Monkey class
# you should be able to call all the following methods
#
# adam = Monkey.new("Adam", "Spider Monkey")
# adam.eat('fruit salad')
# adam.eat('banana milkshake')
# adam.introduce # "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"

require 'pry'

class Monkey # class names DO NOT DO Monkey_Bar USE MonkeyBar

  attr_accessor :name, :species # easily accessible by typing in m1.name or m1.species

  def initialize(new_name, spec)
    @name = new_name
    @species = spec
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten << food # push food into array
  end

  def introduce()
    "Hi, My name is #{@name}, I am a #{@species}, I had #{@foods_eaten.join(' and ')} for brunch" # #{} this is called interpolation
  #  puts ("Hi, My name is #{@name}, I am a #{@species_type}, I had #{@foods_eaten.join(' and ')} for brunch") # #{} this is called interpolation
  # puts used for consolig into terminal - if you want to display on the web remove puts.
  end

  def to_s
      introduce
  end
end


binding.pry
