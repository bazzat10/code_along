require 'pry'

require 'minitest/autorun'
require 'minitest/reporters'
require_relative 'to_sentence'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new
# config


class ToSentence < MiniTest::Test

  def test_empty_array_returns_empty_string
    assert_equal '', to_sentence([])
  end

  # assert_equal expted output , pass variable
  def test_single_element_first_letter_is_capital
    assert_equal 'Kevin', to_sentence(['kevin'])
  end

  def test_2_elements_joins_it_with_and
    assert_equal 'Apple and orange', to_sentence(['apple','orange'])
  end

  def test_3_elements_also_joins_with_coma
    fruits = ['apple', 'banana', 'orange']
    assert_equal 'Banana, apple and orange', to_sentence(fruits)
  end

end
