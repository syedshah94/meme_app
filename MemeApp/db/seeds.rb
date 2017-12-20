User.destroy_all
Post.destroy_all


ari = User.create!(username: 'ari', email: 'ari@ga.co', password: 'password')
bell = User.create!(username: 'bell', email: 'bell@ga.co', password: 'password')
dom = User.create!(username: 'dom', email: 'dom@ga.co', password: 'password')
ramsey = User.create!(username: 'ramsey', email: 'ramsey@ga.co', password: 'password')
drew = User.create!(username: 'drew', email: 'drew@ga.co', password: 'password')

puts "#{User.count} users created!"


# ari posts
Post.create!(user: ari, title: 'Santa knows best', description: 'A friendly Post', url: 'https://funnymemes.co/memes/Santa_Facebook_Status_Funny_Meme.jpg')
Post.create!(user: ari, title: 'Another Soon Meme', description: "These are always hilarious, you almost here 'soon' even if this wasn't captioned ", url: 'https://funnymemes.co/memes/Soon_Funny_Meme.jpg')

# dom posts
Post.create!(user: dom, title: 'Chicken Strips', description: "Order 'Chicken strips', not 'Chicken strip' ", url: 'https://media.giphy.com/media/XYRMO7Ucaqq3e/giphy.gif')
Post.create!(user: dom, title: 'Meep', description: 'Meep Meep Meep Meep Meep Meep Meep Meep Meep Meep Meep Meep', url: 'https://media.giphy.com/media/gwHRYa4dhOdZC/giphy.gif')


# ramsey posts
Post.create!(user: ramsey, title: 'Well Hello To You Too', description: 'This cat looks like my uncle', url: 'https://img.memecdn.com/hi-cat_fb_1992957.jpg')
Post.create!(user: ramsey, title: 'My favorite snack', description: 'This speaks for itself', url: 'https://i.pinimg.com/originals/e4/52/dd/e452ddd06efd79a2f994fc3fdf327c9d.jpg')

# drew posts
Post.create!(user: drew, title: 'Where dreams are made...', description: 'I thought kids love Disneyland', url: 'https://media.giphy.com/media/xUA7baCMQfFkvG5BdK/giphy.gif')

puts "#{Post.count} posts created!"
