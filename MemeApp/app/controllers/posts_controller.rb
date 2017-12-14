class PostsController < ApiController
  before_action :require_login, except: [:index, :show]

  def index
    posts = Post.all
    render json: { posts: posts }
  end

  def show
    post = Post.find(params[:id])
    post_user = post.user
    render json: { post: post, username: post_user.username }
  end

  def create
    post = Post.new(post_params)
    post.user = current_user

    if post.save
      render json: {
        message: 'ok',
        post: post,
      }
    else
      render json: {message: 'Could not create post'}
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :description, :url)
  end
end
