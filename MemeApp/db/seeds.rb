User.destroy_all
Post.destroy_all


ari = User.create!(username: 'ari', email: 'ari@ga.co', password: 'password')
j = User.create!(username: 'j', email: 'jsx@ga.co', password: 'password')
bell = User.create!(username: 'bell', email: 'bell@ga.co', password: 'password')
dom = User.create!(username: 'dom', email: 'dom@ga.co', password: 'password')
ramsey = User.create!(username: 'ramsey', email: 'ramsey@ga.co', password: 'password')
drew = User.create!(username: 'drew', email: 'drew@ga.co', password: 'password')

puts "#{User.count} users created!"


# ari posts
Post.create!(user: ari, title: 'Stacey', description: 'A friendly Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: ari, title: 'Tracey', description: 'A nice Post', url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')
Post.create!(user: ari, title: 'Macey', description: 'A silly Post')
Post.create!(user: ari, title: 'Lacey', description: 'A goofy Post')


# j posts
Post.create!(user: j, title: 'Dr. Express', description: 'An Express Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: j, title: 'Dr. React', description: 'A React Post', url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')
Post.create!(user: j, title: 'Dr. Flexbox', description: 'A Flexbox Post')
Post.create!(user: j, title: 'Dr. Kitten', description: 'A Kitten Post')

# bell posts
# bell has no posts :(


# dom posts
Post.create!(user: dom, title: 'DOM Post', description: 'Document Object Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: dom, title: 'Virtual DOM Post', description: 'Like the DOM Post, but virtualized', url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')


# ramsey posts
Post.create!(user: ramsey, title: 'NPM Post', description: 'Node Package Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: ramsey, title: 'NPM Heroku Post', description: 'An NPM Post deployed on Heroku', url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')
Post.create!(user: ramsey, title: 'Heroku NPM Post', description: 'A Heroku Post deployed on NPM')

# drew posts
Post.create!(user: drew, title: 'Kotlin Post', description: 'A Post that compiles into Java Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: drew, title: 'Java Post', description: 'A Post that compiles into Kotlin Post', url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')

puts "#{Post.count} posts created!"
