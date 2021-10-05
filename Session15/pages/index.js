import Head from "next/head";
import { Fragment } from "react";
import FeaturePosts from "../components/home-page/feature-posts";
import axios from "axios";
function Home(props) {
    return (
        <Fragment>
            <Head>
                <title>NEXT blog</title>
            </Head>
            <FeaturePosts posts={props.posts} />
        </Fragment>
    );
}

export async function getStaticProps() {
    /*
    TODO - call data from API using axios or fetch
     */

    const { data } = await axios.get(
        "https://614055eb5cb9280017a11239.mockapi.io/api/v1/card/data"
    );

    return {
        props: {
            posts: data,
        },
    };
}
export default Home;
