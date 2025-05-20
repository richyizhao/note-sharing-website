const Post = ({ post, children }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-indigo-600 first-letter:uppercase">{ post.title }</h2>
          <p className="text-[10px] text-slate-500">{ new Date(post.createdAt).toLocaleDateString() }</p>
        </div>

        <div>{ children }</div>
      </div>
      
      <p className="mt-4 text-sm">{ post.body }</p>
    
    <div className="w-full h-px mt-6 bg-gradient-to-r from-indigo-50 via-indigo-500/70 to-indigo-50"></div>
    </div>
  );
};
  
export default Post;