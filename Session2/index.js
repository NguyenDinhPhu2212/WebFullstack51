import Card from "./Components/Card.js";
$(document).ready(() => {
    $(".loader").hide();
});
const getUser = async (username, resolveData, resolveError) => {
    $("#search").addClass("disabled");
    try {
        $(".loader").show();
        console.log(`https://api.github.com/users/${username}`);
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );
        $(".loader").hide();
        resolveData(response.data);
    } catch (error) {
        $(".loader").hide();
        resolveError(error);
    }
};

const resolveData = (res) => {
    console.log(res);
    for (let prop in res) {
        if (prop == "avatar_url")
            res.avatar_url = res.avatar_url
                ? res.avatar_url
                : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";
        else res[prop] = res[prop] ? res[prop] : "Không tìm thấy thông tin";
    }
    const user = new Card(
        res.name,
        res.avatar_url,
        res.email,
        res.company,
        res.followers
    );
    $(".result").html(user.show());
    $("#search").removeClass("disabled");
    $("#username").val("");
};

const resolveError = (error) => {
    $(".result").html(`<h5 class="text-center text-danger">${error}</h5>`);
    $("#search").removeClass("disabled");
    $("#username").val("");
};

const search = () => {
    const user = $("#username").val();
    user === ""
        ? $(".result").html(
              `<h5 class="text-center text-danger">Vui lòng nhập thông tin người dùng</h5>`
          )
        : getUser(user, resolveData, resolveError);
};

$("#search").click(search);
