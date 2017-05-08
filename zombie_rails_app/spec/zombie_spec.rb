describe Zombie do
  it 'is invalid without a name' do
    zombie = Zombie.new

    expect(zombie).to_not be_valid
  end

  it 'should have tweets' do
    tweet = Tweet.new(status: 'brains ...... uuuuuuhh..')
    zombie = Zombie.new(tweets: [tweet])

    expect(zombie.tweets).to include(tweet)
  end

end
