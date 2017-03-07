require 'pry'

#hashes are objects in javascript

cohort = {
  name: 'fullslack',
  age: 4,
  likes: 'css',
  students: ['a', 'b', 'c'],
  fav_song: {
    title: 'hello'
  }
}


cohort_with_old_syntax = {
  :name => 'fullslack',
  :age => 4,
  :likes =>  'css'
}

fav_song = {
  'title' => 'hello maybe',
  'artist' => 'unknown'
}


binding.pry
