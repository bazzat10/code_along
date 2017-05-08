require 'zombie'

describe Zombie do
  it 'is named Ash' do
    zombie = Zombie.new('Ash')

    expect(zombie.name).to eq 'Ash'
  end

  it 'should not have brains' do
    zombie = Zombie.new('Ash')

    expect(zombie.brains).to be < 1
  end

end
