const Joi = require("joi");
const express = require("express");

const router = express.Router();

//Danh sách các truyện
const manga = [
    { id: "1", name: "Trinh thám" },
    {
        id: "2",
        name: "Truyện ma",
    },
    { id: "3", name: "Ngôn tình" },
];
router.get("/", function (req, res) {
    res.send(manga);
});
function ValidateManga(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    return schema.validate(manga);
}
router.post("/", function (req, res) {
    const { error, value } = ValidateManga(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
        if (manga.findIndex((item) => item.name == req.body.name) >= 0) {
            return res
                .status(400)
                .send("Manga with the same name already exists");
        }
        const newManga = {
            id: manga.length + 1,
            name: req.body.name,
        };
        manga.push(newManga);
        res.send(manga);
    }
});
router.put("/:id", (req, res) => {
    const { error } = validateManga(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let updateIndex = manga.findIndex((item) => item.id == req.params.id);
    if (updateIndex == -1) {
        return res.status(400).send("Manga not found");
    }
    try {
        manga[updateIndex].name = req.body.name;
        res.send(manga);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});

router.delete("/:id", (req, res) => {
    let deleteIndex = manga.findIndex((item) => item.id == req.params.id);
    if (deleteIndex == -1) return res.status(400).send("Manga not found");
    try {
        manga.splice(deleteIndex, 1);
        res.send(manga);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});
module.exports = router;