class DishType < ActiveRecord::Base

  validates :name,
    presence: true
end
