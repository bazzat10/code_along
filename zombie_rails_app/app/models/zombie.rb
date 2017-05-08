class Zombie < ApplicationRecord
  validates :name, presence: true
  has_many :tweets
end
