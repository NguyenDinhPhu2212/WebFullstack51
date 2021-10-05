import Link from "next/link";

function PostItem(props) {
    const { name, url, image_url, description } = props.post;
    // const linkPath = `/posts/${slug}`;
    return (
        <div className="m-5">
            <a href={url}>
                <div className="w-64 rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src={image_url}
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {name}
                        </div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PostItem;
