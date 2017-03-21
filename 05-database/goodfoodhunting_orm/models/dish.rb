class Dish < ActiveRecord::Base
  has_many :comments # linking to commnets table
  validates :name,
    presence: true
end

## inherits methods written by someone
### conected to dishes table - class name has to be plural.
