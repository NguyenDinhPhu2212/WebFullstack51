import PostItem from "./post-item";
function FeaturePosts(props) {
    return (
        <section className="m-auto text-center w-full bg-gray-300">
            <div className="bg-gray-700 text-white flex flex-col justify-center items-center p-5">
                <img className="w-64 h-64 object-cover rounded-full" src="https://c4.wallpaperflare.com/wallpaper/647/944/895/fantasy-moon-wallpaper-preview.jpg" />
                <h2 className="text-2xl text-black-50 mt-5 mb-20">Hello, I'm Phu!</h2>
            </div>
            <h2 className="text-4xl text-black-50 mt-10">Feature Posts</h2>
            <div className="flex flex-wrap justify-center w-full mt-20">
                {props.posts.map((post, index) => {
                    return <PostItem key={index} post={post} />;
                })}
            </div>
        </section>
    );
}

export default FeaturePosts;
