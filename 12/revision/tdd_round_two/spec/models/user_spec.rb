describe 'User' do
    it 'is invalid without a name' do
      user = User.new
      expect(user).to_not be_valid
    end

    it 'is invalid with a password of less than 8 characters' do
      user = User.new(name: 'John', password:'1234567')

      expect(user).to_not be_valid
    end

    it 'is valid with a password greater than or equal to 8 characters' do
      user = User.new(name: 'John', password: '12345678')

      expect(user).to be_valid
    end

    it 'raises an error if saved without a name' do
      user = User.new

      expect{user.save!}.to raise_error(ActiveRecord::RecordInvalid)
    end
end
